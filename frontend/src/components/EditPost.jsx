// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const EditPost = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [post, setPost] = useState({});
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [author, setAuthor] = useState("");

//   useEffect(() => {
//     axios.get(`http://localhost:5000/blogs/${id}`)
//       .then((res) => {
//         setPost(res.data);
//         setTitle(res.data.title);
//         setDescription(res.data.description);
//         setAuthor(res.data.author);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/blogs/${id}`, { title, description, author });
//       alert("Post updated successfully!");
//       navigate("/");
//     } catch (err) {
//       console.error("Error updating post:", err);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-center">Edit Post</h2>
//       <form onSubmit={handleUpdate} className="flex flex-col gap-4">
//         <input type="text" className="border p-2 rounded" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         <textarea className="border p-2 rounded" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         <input type="text" className="border p-2 rounded" value={author} onChange={(e) => setAuthor(e.target.value)} required />
//         <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Update Post</button>
//       </form>
//     </div>
//   );
// };

// export default EditPost;
