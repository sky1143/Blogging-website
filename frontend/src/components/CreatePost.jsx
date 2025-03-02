// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [author, setAuthor] = useState("");
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   const handleImageUpload = async () => {
//     if (!image) return alert("Please select an image");

//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", "your_upload_preset");

//     try {
//       const res = await axios.post(
//         "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
//         formData
//       );
//       return res.data.secure_url;
//     } catch (err) {
//       console.error("Image upload error:", err);
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const imageUrl = await handleImageUpload();
//     if (!imageUrl) return;

//     const newPost = { title, description, author, imageUrl, time: new Date().toLocaleString() };

//     try {
//       await axios.post("http://localhost:5000/blogs", newPost);
//       alert("Post created successfully!");
//       navigate("/");
//     } catch (err) {
//       console.error("Error creating post:", err);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-center">Create New Post</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input type="text" placeholder="Title" className="border p-2 rounded" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         <textarea placeholder="Description" className="border p-2 rounded" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         <input type="text" placeholder="Author Name" className="border p-2 rounded" value={author} onChange={(e) => setAuthor(e.target.value)} required />
//         <input type="file" className="border p-2 rounded" onChange={(e) => setImage(e.target.files[0])} required />
//         <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Create Post</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;


import React from 'react'

const CreatePost = () => {
  return (
    <div>CreatePost</div>
  )
}

export default CreatePost