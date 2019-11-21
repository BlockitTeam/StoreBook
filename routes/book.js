const express = require('express');
const router  = express.Router();
const Author  = require('../models/author');
const Book = require('../models/book');
const path = require('path');
const resize = require('../config/resize');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.get('/', (req,res) => {
    Book.find()
    .then(book => {
        res.render('book',{books : book});
    })
    .catch(err => {
        console.log(err);
    })
});

router.get('/post',(req,res) => {
   Author.find()
   .then(author => {
        res.render('book/post', {authors : author});
   })
   .catch(err => {
       console.log(err);
   })
});


router.post('/post', uploadMiddleware.single('image'), async function(req,res){


    const imagePath = path.join(__dirname, '../public/img');
    const fileUpload = new resize(imagePath);

    if(!req.file) {
        res.status(401).json({error : 'Please provide an inmage'});
    }
    const fileName =  await fileUpload.save(req.file.buffer);

    const newBook = new Book({
        name :  req.body.name,
        pagecount : req.body.pagecount,
        amount : req.body.amount,
        author : req.body.author,
        description : req.body.description,
        image : fileName,
        publicdate: req.body.publicdate,
        pathimage : imagePath + '/' + fileName
    });
    newBook.save()
    .then(book => {
        res.redirect('/book');
    })
    .catch(err => {
        console.log(err);
    })
    

});

// Update
router.post('/update/:id', uploadMiddleware.single('image'), async function(req,res){

    let id = req.params.id;

    const imagePath = path.join(__dirname, '../public/img');
    const fileUpload = new resize(imagePath);

    if(!req.file) {
        res.status(401).json({error : 'Please provide an inmage'});
    }
    const fileName =  await fileUpload.save(req.file.buffer);
    Book.findById(id.trim())
    .then(book => {
        book.name       =  req.body.name;
        book.pagecount  = req.body.pagecount;
        book.amount     = req.body.amount;
        book.author     = req.body.author;
        book.description = req.body.description;
        book.image      = fileName;
        book.publicdate      = req.body.publicdate;
        book.pathimage = imagePath + '/' + fileName;

        book.save()
        .then(book => {
            res.redirect('/book');
        })
        .catch(err => {
            console.log(err);
        })
    })
    .catch(err => {
        console.log(err);
    })
    

});

// Delete

router.get('/delete/:id',(req,res) => {
    let id = req.params.id;
    Book.findOneAndDelete(id)
    .then(book => {
        res.redirect('/book');
    })
    .catch(err => {
        console.log(err);
    })
});


router.get('/update/:id',(req,res) => {
    let id = req.params.id;
    Book.findById(id.trim())
    .then(book => {
        Author.find()
        .then(author =>  {
            res.render('book/update', {book : book, author : author});
        })
    })
    .catch(err => {
        console.log(err);
    })
});

module.exports = router;