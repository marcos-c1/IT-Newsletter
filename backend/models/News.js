const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    slug_name: {
        type: String
    },
    section: {
        type: String,
    },
    subsection: {
        type: String
    },
    title: {
        type: String
    },
    abstract: {
        type: String
    },
    url: {
        type: String
    },
    byline: {
        type: String,
        capitalize: true
    },
    thumbnail_standard: {
        type: String
    },
    item_type: {
        type: String
    },
    source: {
        type: String
    },
    updated_date: {
        type: Date
    },
    created_date: {
        type: Date,
        /*default: new Date()*/
    },
    published_date: {
        type: Date,
        /*default: new Date()*/
    },
    first_published_date: {
        type: Date
    },
    material_type_facet: {
        type: String
    },
    kicker: {
        type: String
    },
    subheadline: {
        type: String
    },
    des_facet: {
        type: [String]
    },
    org_facet: {
        type: [String]
    },
    per_facet: {
        type: [String]
    },
    geo_facet: {
        type: [String]
    },
    related_urls: {
        type: String
    },
    multimedia: {
        type: [Object]
    }
});

const News = mongoose.model('news', newsSchema);

module.exports = News;