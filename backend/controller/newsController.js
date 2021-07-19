const News = require('../models/News.js');

const getAllNews = async(req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getNewsBySlugName = async(req, res) => {
    try {
        const news = await News.findOne(req.params.id);
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const postNews = async(req, res) => {
    try {
        News.deleteMany();
        let news = await News.insertMany(req.body);
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteNews = async(req, res) => {
    try {
        let allNews = await News.find();
        const news = await News.findById(req.params.id);
        if (news) {
            allNews = allNews.filter((n) => n.id !== news.id);
            res.status(200).json(allNews);
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getAllNews,
    getNewsBySlugName,
    postNews,
    deleteNews
};