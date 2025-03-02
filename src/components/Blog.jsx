import React, { useState, useEffect } from "react";
import axios from "axios";



const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    image: null, // Changed from imageUrl to image (file)
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;


  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/blogs/`);
      if (response.data?.blogs && Array.isArray(response.data.blogs)) {
        setBlogPosts(response.data.blogs);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] }); // Store selected file
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("author", formData.author);

      if (formData.image) {
        formDataToSend.append("imageUrl", formData.image); // Ensure field name matches backend
      }

      if (editId) {
        await axios.patch(`${API_BASE_URL}/api/blogs/${editId}`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Post updated successfully!");
      } else {
        await axios.post(`${API_BASE_URL}/api/blogs/`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Post created successfully!");
      }

      setFormData({
        title: "",
        description: "",
        author: "",
        image: null,
      });

      setShowModal(false);
      setEditId(null);
      fetchPosts();
    } catch (error) {
      console.error("Error saving post:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleEdit = (post) => {
    setEditId(post._id);
    setFormData({
      title: post.title,
      description: post.description,
      author: post.author,
      image: null, // Reset image field to prevent reusing old files
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/blogs/${id}`);
      alert("Post deleted successfully!");
      fetchPosts(); // Refresh the blog list after deletion
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="w-full p-6">
      <h3 className="text-3xl font-bold text-center mb-6">Recent Blog Posts</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post._id} className="p-4 shadow-md rounded-lg">
            <img className="w-full h-60 object-cover rounded-lg" src={post.imageUrl} alt={post.title} />
            <h2 className="text-xl font-semibold mt-3">{post.title}</h2>
            <p className="text-gray-600 mt-2 mb-4">{post.description.substring(0, 80)}...</p>
            <p className="font-medium text-gray-600">{post.author}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-orange-500 p-2 text-white font-semibold rounded-lg hover:bg-orange-600" onClick={() => handleEdit(post)}>Edit</button>
              <button className="bg-red-500 p-2 text-white font-semibold rounded-lg hover:bg-red-600" onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button onClick={() => { setShowModal(true); setEditId(null); setFormData({ title: "", description: "", author: "", image: null }); }} className="bg-blue-500 p-3 rounded-lg text-white">New Post</button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">{editId ? "Edit Post" : "Create New Post"}</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input type="text" name="title" placeholder="Title" className="w-full p-2 mb-3 border" value={formData.title} onChange={handleChange} required />
              <textarea name="description" placeholder="Description" className="w-full p-2 mb-3 border" value={formData.description} onChange={handleChange} required />
              <input type="text" name="author" placeholder="Author" className="w-full p-2 mb-3 border" value={formData.author} onChange={handleChange} required />
              <input type="file" name="image" className="w-full p-2 mb-3 border" onChange={handleChange} required />
              <div className="flex justify-between">
                <button type="submit"

                  className="bg-green-500 p-2 text-white rounded-lg"
                >{editId ? "Update" : "Submit"}
                </button>
                <button onClick={() => setShowModal(false)}
                  type="button" className="bg-gray-500 p-2 text-white rounded-lg"
                >Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
