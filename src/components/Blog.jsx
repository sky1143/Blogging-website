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

          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
