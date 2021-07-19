require('dotenv').config();

const newsData = require('./data/newsData.js');
const connectDB = require('./config/db');
const News = require('./models/News.js');

connectDB();

const importData = async() => {
    try {
        await News.deleteMany({});
        //await News.insertMany(newsData);

        console.log("Data import SUCCESS");
        process.exit();
    } catch (err) {
        console.error(err);
    }
}

importData();