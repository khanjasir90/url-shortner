const express = require('express');
const app = express();
const urlRouter = require('./api/router/urlShortner');
const { connectToMongo } = require('./db');
const PORT = 3000;

app.use(express.urlencoded())
app.use(express.json())
app.use('/public/images/', express.static('./public/images'));

app.set('views','./views')
app.set('view engine','ejs')

app.use(urlRouter);

connectToMongo().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})