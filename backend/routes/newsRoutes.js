const express = require('express');
const router = express.Router();
const { getAllNews, getNewsBySlugName, deleteNews, postNews } = require('../controller/newsController');

//@desc GET all news from db
//@route GET /api/news
//@access Public
router.get('/', getAllNews);

router.post('/', postNews);

//@desc GET a product by id from db
//@route GET /api/news/:slugname
//@access Public
router.get('/?:slugname', getNewsBySlugName);


router.delete('/:id', deleteNews);

module.exports = router;