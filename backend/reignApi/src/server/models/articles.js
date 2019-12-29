const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    reference_id: {
        type: Number,
        required: false
    },
    title: {
        type: String,
        required: false,
        default: null
    },
    story_title: {
        type: String,
        required: false,
        default: null
    },
    url: {
        type: String,
        required: false,
        default: null
    },
    story_url: {
        type: String,
        required: false,
        default: null
    },
    author: {
        type: String,
        required: false,
        default: null
    },
    created_at: {
        type: Date,
        required: false,
    },
    state: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('article', articleSchema);