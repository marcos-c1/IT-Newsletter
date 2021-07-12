const News = require('../models/News');

const getAllNews = async(req, res) => {
    try {
        const news = await News.find({});
        res.writeHeader(200, { 'Content-Type': 'application/json' });
        res.json(news);
    } catch (error) {
        console.error(error);

    }
}

const getNewsById = async(req, res) => {
    try {
        const news = await News.findById(req.params.id);
        res.writeHeader(200, { 'Content-Type': 'application/json' });
        res.json(news);
    } catch (error) {

    }
}

module.exports = {
    getAllNews,
    getNewsById
};