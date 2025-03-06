# Blog API

## Overview
This is a simple Blog API built with Node.js, Express, MongoDB, and Cloudinary for image uploads. The API allows users to create, read, update, and delete blog posts with images.

## Features
- Create a blog post with an optional image upload
- Fetch all blog posts
- Get a single blog post by ID
- Update blog posts with or without a new image
- Delete blog posts along with associated images in Cloudinary

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- Multer (for handling file uploads)
- Cloudinary (for image storage)
- dotenv (for environment variables)
- CORS (for enabling cross-origin requests)

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/blog-api.git
cd blog-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

### 4. Start the Server
```sh
npm start
```

## API Endpoints

### 1. Get All Blog Posts
```http
GET /api/blogs
```
**Response:**
```json
{
  "message": "All blog posts fetched successfully!",
  "blogs": [
    {
      "_id": "65123456789",
      "title": "My First Blog",
      "description": "This is a blog post",
      "author": "John Doe",
      "imageUrl": "https://res.cloudinary.com/...",
      "createdAt": "2025-02-27T10:00:00Z",
      "updatedAt": "2025-02-27T10:00:00Z"
    }
  ]
}
```

### 2. Get a Single Blog Post
```http
GET /api/blogs/:id
```
**Parameters:**
- `id` (string, required) - The ID of the blog post to retrieve

**Response:**
```json
{
  "message": "Blog post fetched successfully!",
  "blog": {
    "_id": "65123456789",
    "title": "My First Blog",
    "description": "This is a blog post",
    "author": "John Doe",
    "imageUrl": "https://res.cloudinary.com/...",
    "createdAt": "2025-02-27T10:00:00Z",
    "updatedAt": "2025-02-27T10:00:00Z"
  }
}
```

### 3. Create a Blog Post
```http
POST /api/blogs
```
**Request Body (Form-Data):**
- `title` (string, required) - Title of the blog post
- `description` (string, required) - Blog post content
- `author` (string, required) - Name of the author
- `image` (file, optional) - Image file for the blog post

**Response:**
```json
{
  "message": "Blog post created successfully!",
  "blog": {
    "_id": "65123456789",
    "title": "My First Blog",
    "description": "This is a blog post",
    "author": "John Doe",
    "imageUrl": "https://res.cloudinary.com/...",
    "createdAt": "2025-02-27T10:00:00Z",
    "updatedAt": "2025-02-27T10:00:00Z"
  }
}
```

### 4. Update a Blog Post (Full Update)
```http
PUT /api/blogs/:id
```
**Parameters:**
- `id` (string, required) - The ID of the blog post to update

**Request Body (Form-Data or JSON):**
- `title` (string, required) - Updated title of the blog post
- `description` (string, required) - Updated content
- `author` (string, required) - Updated author name
- `image` (file, optional) - New image file (replaces existing one if provided)

**Response:**
```json
{
  "message": "Blog post updated successfully!",
  "blog": {
    "_id": "65123456789",
    "title": "Updated Blog Title",
    "description": "Updated content",
    "author": "Jane Doe",
    "imageUrl": "https://res.cloudinary.com/...",
    "createdAt": "2025-02-27T10:00:00Z",
    "updatedAt": "2025-02-27T12:00:00Z"
  }
}
```

### 5. Update a Blog Post (Partial Update)
```http
PATCH /api/blogs/:id
```
**Parameters:**
- `id` (string, required) - The ID of the blog post to update

**Request Body (Form-Data or JSON, optional fields):**
- `title` (string, optional) - Updated title
- `description` (string, optional) - Updated content
- `author` (string, optional) - Updated author name
- `image` (file, optional) - New image file (replaces existing one if provided)

**Response:**
```json
{
  "message": "Blog post updated successfully!",
  "blog": {
    "_id": "65123456789",
    "title": "Partially Updated Blog Title",
    "description": "Partially updated content",
    "author": "Jane Doe",
    "imageUrl": "https://res.cloudinary.com/...",
    "createdAt": "2025-02-27T10:00:00Z",
    "updatedAt": "2025-02-27T12:30:00Z"
  }
}
```

### 6. Delete a Blog Post
```http
DELETE /api/blogs/:id
```
**Parameters:**
- `id` (string, required) - The ID of the blog post to delete

**Response:**
```json
{
  "message": "Blog post deleted successfully!"
}
```

## License
This project is licensed under the MIT License.

