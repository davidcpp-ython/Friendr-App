const mongoose = require('mongoose')
const postModel = mongoose.model('Post',
    {
        id: String,
        date: String,
        author: String,
        title: String,
        content: String,
        likes: [String]
    }
)

module.exports = postModel