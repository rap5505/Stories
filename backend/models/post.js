const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    
    title: { type: String, required: true },
    content: { type: String, required: true }, 
    

});

// Takes the name, and schema you want to use, and then exported outside of the file
module.exports = mongoose.model('Post', postSchema);


