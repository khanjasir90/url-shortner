const express = require('express');
const router = express.Router();
const { insertURL, checkIfUrlExist, getOriginalUrl } = require('../model/queries');
const { toBase62 } = require('../util/base62');
const generateUniqueId = require('generate-unique-id');

router.get('/', (req,res,next) => {
    res.render('home',{
        shortUrl: ''
    });
})

router.post('/shortUrl', async (req,res,next) => {
    const  { originalUrl } = req.body;
    const uniqueId =  generateUniqueId({
        length: 10,
        useLetters: false
      });

    let shortUrlCode = toBase62(uniqueId);
    let shortUrl = req.get('host') + '/' + shortUrlCode;

    try {
        await insertURL(originalUrl,shortUrl);
        res.render('home',{
            shortUrl: shortUrl
        })
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id', async(req,res,next) => {
    const { id } = req.params;
    let shortUrl = req.get('host') + '/' + id;
    const orignalUrl = await getOriginalUrl(shortUrl);
    console.log(orignalUrl);
    orignalUrl == false ? res.redirect('/error/404') : res.redirect(orignalUrl);
})

router.get('/error/404', (req,res,next) => {
    res.render('404');
})

module.exports = router;