const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    pagecount : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    pathimage : {
        type : String,
        required : false
    },
    author : {
        type : String,
        required :true
    },
    publicdate : {
        type : String,
        required : false
    }
});

const Book = module.exports = mongoose.model('Book',bookSchema);