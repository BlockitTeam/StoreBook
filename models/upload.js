const mongoose = require('mongoose');
const uploadSchema = mongoose.Schema({
    name : {
        type : String,
        required : false
    },
    path : {
        type : String,
        required : false
    }
});

const Upload = module.exports = mongoose.model('Upload',uploadSchema);