const express = require('express');
const router = express.Router();
const { getAllNews, getNewsById } = require('../controller/newsController');

//@desc GET all news from db
//@route GET /api/news
//@access Public
router.get('/', getAllNews);

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get('/:id', getNewsById);

module.exports = router;