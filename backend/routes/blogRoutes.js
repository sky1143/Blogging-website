const express = require("express");
const multer = require("multer")
const cloudinary = require("../config/cloudinary");
const BlogPost = require("../models/BlogPost");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

//  Get All Blog Post
router.get("/", async (req, res) => {
    try {
        const blogs = await BlogPost.find();
        res.status(200).json({ message: 'All blogs posts fetched successfully!', blogs });
    } catch (error) {
        res.status(500).json({ error: " Internal Server Error " });

    }
})


//  Get Single Blog Post
router.get("/:id", async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) {
            res.status(404).json({ error: "post not found" })
        }
        res.status(200).json({ message: 'Post fetched successfully!', post });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error " })
    }
})

router.post("/", upload.single("imageUrl"), async (req, res) => {
    try {
        const { title, description, author } = req.body;

        // ✅ Validate Required Fields
        if (!title || !description || !author) {
            return res.status(400).json({ error: "Title, description, and author are required" });
        }

        let imageUrl = "";

        // ✅ Upload Image to Cloudinary (if provided)
        if (req.file) {
            try {
                const result = await new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: "blog-images",
                            public_id: title.replace(/\s+/g, "_").toLowerCase(),
                            resource_type: "image"
                        }, // ✅ Added folder
                        (error, result) => {
                            if (error) {
                                console.error("Cloudinary upload error:", error);
                                reject(error);
                            } else {
                                resolve(result);
                            }
                        }
                    );
                    stream.end(req.file.buffer);
                });

                imageUrl = result.secure_url;
            } catch (error) {
                console.error("Cloudinary upload failed:", error);
                return res.status(500).json({ error: "Image upload failed" });
            }
        }

        // ✅ Create new blog post
        const newPost = new BlogPost({ title, description, author, imageUrl });
        await newPost.save();

        res.status(201).json({ message: "Blog post created successfully!", post: newPost });

    } catch (error) {
        console.error("Error creating blog post:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.patch("/:id", upload.single("imageUrl"), async (req, res) => {
    try {
        const { title, description, author } = req.body;
        const existingPost = await BlogPost.findById(req.params.id);

        if (!existingPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        let imageUrl = existingPost.imageUrl; // Keep old image if no new one is uploaded
        let newPublicId = `blog-images/${title.replace(/\s+/g, "_").toLowerCase()}`;

        // ✅ If a new image is uploaded, delete the old one and upload the new one
        if (req.file) {
            try {
                if (existingPost.imageUrl) {
                    // ✅ Extract old public ID
                    const urlParts = existingPost.imageUrl.split('/');
                    const fileName = urlParts[urlParts.length - 1].split(".")[0];
                    const oldPublicId = `blog-images/${fileName}`;

                    // ✅ Delete old image
                    await cloudinary.uploader.destroy(oldPublicId);
                }

                // ✅ Upload new image and use the **same public ID** to overwrite
                const result = await new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: "blog-images",
                            public_id: newPublicId,
                            resource_type: "image",
                            overwrite: true, // ✅ Ensures the image is REPLACED
                            invalidate: true, // ✅ Forces cache update
                        },
                        (error, result) => {
                            if (error) {
                                console.error("Cloudinary upload error:", error);
                                reject(error);
                            } else {
                                resolve(result);
                            }
                        }
                    );
                    stream.end(req.file.buffer);
                });

                imageUrl = result.secure_url;
            } catch (error) {
                console.error("Image upload failed:", error);
                return res.status(500).json({ error: "Image upload failed" });
            }
        }

        // ✅ Update only provided fields
        const updatedPost = await BlogPost.findByIdAndUpdate(
            req.params.id,
            {
                ...(title && { title }),
                ...(description && { description }),
                ...(author && { author }),
                ...(imageUrl && { imageUrl }),
            },
            { new: true }
        );

        res.status(200).json({ message: "Post updated successfully", post: updatedPost });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



router.put("/:id", upload.single("imageUrl"), async (req, res) => {
    try {
        const { title, description, author } = req.body;
        if (!title || !description || !author) {
            return res.status(400).json({ error: "Title, description, and author are required" });
        }

        let imageUrl;
        const existingPost = await BlogPost.findById(req.params.id);
        if (!existingPost) {
            return res.status(404).json({ error: "Post not found" });
        }

        // ✅ Upload new image to Cloudinary (if provided)
        if (req.file) {
            try {
                // ✅ Delete old image from Cloudinary
                if (existingPost.imageUrl) {
                    const urlParts = existingPost.imageUrl.split('/');
                    const fileName = urlParts[urlParts.length - 1]; // Example: "eamhe1pqetctet8c1uyc.jpg"
                    const publicId = `blog-images/${fileName.split(".")[0]}`; // Ensure correct folder

                    console.log("Deleting old image:", publicId);
                    await cloudinary.uploader.destroy(publicId);
                }

                // ✅ Upload new image
                const result = await new Promise((resolve, reject) => {
                    cloudinary.uploader.upload_stream(
                        { folder: "blog-images" },
                        (error, result) => {
                            if (error) reject(error);
                            else resolve(result);
                        }
                    ).end(req.file.buffer);
                });

                imageUrl = result.secure_url;
            } catch (error) {
                console.error("Image upload failed:", error);
                return res.status(500).json({ error: "Image upload failed" });
            }
        } else {
            imageUrl = existingPost.imageUrl; // Keep old image if no new image is uploaded
        }

        // ✅ Update the blog post
        const updatedPost = await BlogPost.findByIdAndUpdate(
            req.params.id,
            { title, description, author, imageUrl },
            { new: true }
        );

        res.status(200).json({ message: "Post updated successfully", post: updatedPost });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// delete route

router.delete("/:id", async (req, res) => {
    try {
        // 🔹 Find the post by ID
        const post = await BlogPost.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // 🔹 If image exists, delete it from Cloudinary
        if (post.imageUrl) {
            try {
                // Extract public ID correctly
                const urlParts = post.imageUrl.split('/');
                const fileNameWithExtension = urlParts[urlParts.length - 1]; // e.g. "eamhe1pqetctet8c1uyc.jpg"
                const folder = "blog-images"; // Your Cloudinary folder name
                const fileName = fileNameWithExtension.split(".")[0]; // Remove ".jpg"
                const publicId = `${folder}/${fileName}`; // "blog-images/eamhe1pqetctet8c1uyc"

                console.log("Attempting to delete:", publicId);

                const result = await cloudinary.uploader.destroy(publicId);

                console.log("Cloudinary Delete Response:", result);

                if (result.result !== "ok") {
                    return res.status(500).json({ error: "Failed to delete image from Cloudinary" });
                }
            } catch (imageError) {
                console.error("Cloudinary deletion error:", imageError);
                return res.status(500).json({ error: "Error while deleting image" });
            }
        }

        // 🔹 Delete the post from MongoDB
        await BlogPost.findByIdAndDelete(req.params.id);

        return res.status(200).json({ message: "Post and image deleted successfully" });

    } catch (error) {
        console.error("Delete post error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});



module.exports = router;







