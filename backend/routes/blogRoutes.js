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
        res.status(200).json({message: 'Post fetched successfully!',  post });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error " })
    }
})

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { title, descritpion, author } = req.body;

        cloudinary.uploader.upload_stream({ resource_type: "image" }, async (error, result) => {
            if (error) return res.status(500).json({ error: "image upload failed" });

            const newPost = new BlogPost({ title, descritpion, author, imageUrl: result.secure_url });
            await newPost.save();
            res.status(201).json({ message: "Blog post created Successfully!", post: newPost });
        }).end(req.file.buffer);

    } catch (error) {
        res.status(500).json({ error: "internla server error" });

    }
});


router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        const { title, descritpion, author } = req.body;
        let imageUrl = req.body.imageUrl;

        if (req.file) {
            cloudinary.uploader.upload_stream({ resource_type: "image " }, async (error, result) => {
                if (error) return res.status(500).json({ error: "Image upload failed " });

                imageUrl = result.secure_url;
                const updatedPost = await BlogPost.findByIdAndUpdate(
                    req.params.id,
                    { title, descritpion, author, imageUrl },
                    { new: true }
                );
                res.status(200).json({ message: "post updated successfully", post: updatedPost });

            }).end(req.file.buffer);
        } else {
            const updatedPost = await BlogPost.findByIdAndUpdate(
                req.params.id, {
                title, descritpion, author
            },
                { new: true }
            );
            res.status(200).json({ message: "post updated successfully", post: updatedPost })
        }

    } catch (error) {
        res.status(500).json({ message: "Interval Serval error" });

    }
})

// delete route

router.delete("/:id", async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Image not found" })
        }
        if (post.imageUrl) {
            try {
                const imageUrlParts = post.imageUrl.split('/');
                const publicId = imageUrlParts[imageUrlParts.length - 1].split(".")[0];

                const result = await cloudinary.uploader.destroy(publicId);

                if (result.result !== "ok") {
                    return res.status(500).json({ error: "failed to delete image from Cloudinary" });
                }
            } catch (imageError) {
                return res.status(500).json({ error: "Error while deleting image " });
            }
        }
        await BlogPost.findByIdAndUpdate(req.params.id);

        return res.status(200).json({ message: "Post deleted successfully" });

    } catch (error) {
        return res.status(500).json({ error: "Internal server Error " })
    }
})

module.exports = router;







