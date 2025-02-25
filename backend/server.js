const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

console.log("DEBUG: MONGO_URI from .env:", process.env.MONGO_URI);
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    console.log("MongoDB URI is missing ,check the env file.");
    process.exit(1)
}


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ MongoDB connected successfully');
}).catch(err => {
    console.error('❌ MongoDB Connection error:', err.message);
    process.exit(1);
});


app.get('/', (req, res) => {
    res.send("Backend is running on port " + PORT);
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})