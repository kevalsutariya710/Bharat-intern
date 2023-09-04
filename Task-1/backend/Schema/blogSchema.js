const mongoose = require('mongoose')

const AddBlog = new mongoose.Schema({

    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    authorName: {
        type: 'string',
        require: true
    }
})



mongoose.model('Blog', AddBlog);