const express = require('express');
const app = express();
const urlRouter = require('./api/router/urlShortner');
const { connectToMongo } = require('./db');

app.use(express.urlencoded())
app.use(express.json())
app.use('/public/images/', express.static('./public/images'));

app.set('views','./views')
app.set('view engine','ejs')

connectToMongo();
app.use(urlRouter);

app.listen(3000,() => {
    console.log('Server is running on port 3000');
});