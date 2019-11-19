const express = require('express');
const router = express.Router();
const path = require('path');
const resize = require('../config/resize');
const Upload = require('../models/upload');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.get('/',async (req,res,next) => {
    await res.render('upload');
});

router.post('/post', uploadMiddleware.single('image'), async function(req,res){
    const imagePath = path.join(__dirname, '../public/img');
    const fileUpload = new resize(imagePath);

    if(!req.file) {
        res.status(401).json({error : 'Please provide an inmage'});
    }
    const fileName =  await fileUpload.save(req.file.buffer);

    const newUpload = new Upload({
        name :  fileName,
        path : imagePath + '/' + fileName
    });
    newUpload.save()
    .then(upload => {
        return res.status(200).json({ name: fileName });
    })
    .catch(err => {
        console.log(err);
    })
    

});

module.exports = router;