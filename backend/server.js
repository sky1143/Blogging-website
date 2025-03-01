const dotenv = require('dotenv')
dotenv.config();
const express = require("express");
const cors = require('cors');
const connectDB = require('./config/db')
const blogRoutes =  require("./routes/blogRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());

connectDB();

app.use("/api/blogs", blogRoutes)

app.get("/" , (req, res) => {
    res.send({ message: "Api is working"});
})

app.listen(PORT, () => {
    // console.log(`Server is running on port http://localhost:${PORT} || `)
    console.log(`Server is running on port ${PORT} `)
})