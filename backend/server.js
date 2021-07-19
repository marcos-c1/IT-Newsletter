require("dotenv").config();
const express = require('express');

const news = require('./models/News.js');
const app = express();

const cors = require('cors');

const newsRoutes = require('./routes/newsRoutes');

app.use(express.json());
app.use(cors());

// Router
app.use('/api/news', newsRoutes);


//database
const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));