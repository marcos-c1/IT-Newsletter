const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    id: {
        type: mongoose.ObjectId,
        auto: true,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    }
});

module.export = newsSchema;