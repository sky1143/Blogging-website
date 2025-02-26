import React from "react";
import { blogPosts }from '../components/js/list'

const Blog = () => {



  return (
    <div className="w-full p-6">
      {/* Title */}
      <h3 className="text-3xl font-bold text-center mb-6">Recent Blog Posts</h3>

      {/* Blog Posts - Responsive Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="p-4 shadow-md rounded-lg">
            <img className="w-full h-60 object-cover rounded-lg" src={post.image} alt={post.title} />
            <h2 className="text-xl font-semibold mt-3">{post.title}</h2>
            <p className="text-gray-600 mt-2 mb-4">
              {post.description.split(" ").slice(0, 8).join(" ")}
              {post.description.split(" ").length > 10 && "..."}
            </p>

           <div  className="flex items-center gap-3">
            <img  className="w-12 h-12  object-cover rounded-full"src={post.authorImage} alt="" />
            <p className="font-medium text-gray-600">{post.authorname}</p>
            <p className="text-sm text-gray-600"  >{post.time}</p>
           </div>
           <div className="font-semibold p-2 mt-2   text-white">
            <button onClick={() => {
              

            }}  className="mr-4 bg-orange-500 p-2 rounded-lg   hover:text-gray-300">Edit</button>
            <button 
            onClick={() => {
              
            }}
            className=" bg-red-500 p-2 rounded-lg  hover:text-gray-300">Delete</button>
           </div>
          
          </div>
        ))}
         <div className="flex  w-screen justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-semibold p-2 mt-2   text-white">
            <button className="mr-4 bg-orange-500 p-2 rounded-lg   hover:text-gray-300">New post</button>
           </div>
      </div>
    </div>
  );
};

export default Blog;








// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Blog = () => {
//   const [blogPosts, setBlogPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/blogs");
//       setBlogPosts(res.data);
//     } catch (err) {
//       console.error("Error fetching posts:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       try {
//         await axios.delete(`http://localhost:5000/blogs/${id}`);
//         alert("Post deleted successfully!");
//         fetchPosts(); // Refresh posts after deletion
//       } catch (err) {
//         console.error("Error deleting post:", err);
//       }
//     }
//   };

//   return (
//     <div className="w-full p-6">
//       {/* Title & Create Button */}
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-3xl font-bold text-center w-full">Recent Blog Posts</h3>
//         <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//           + New Post
//         </Link>
//       </div>

//       {/* Blog Posts - Responsive Grid */}
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {blogPosts.map((post) => (
//           <div key={post._id} className="p-4 shadow-md rounded-lg">
//             <img className="w-full h-60 object-cover rounded-lg" src={post.imageUrl} alt={post.title} />
//             <h2 className="text-xl font-semibold mt-3">{post.title}</h2>
//             <p className="text-gray-600 mt-2 mb-4">
//               {post.description.split(" ").slice(0, 8).join(" ")}
//               {post.description.split(" ").length > 10 && " ..."}
//             </p>

//             <div className="flex items-center gap-3">
//               <img className="w-12 h-12 object-cover rounded-full" src={post.authorImage || "default-avatar.png"} alt="" />
//               <p className="font-medium text-gray-600">{post.author}</p>
//               <p className="text-sm text-gray-600">{post.time}</p>
//             </div>

//             {/* Edit & Delete Buttons */}
//             <div className="mt-4 flex gap-2">
//               <Link to={`/edit/${post._id}`} className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600">
//                 Edit
//               </Link>
//               <button onClick={() => handleDelete(post._id)} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

