const URL = require('./url');

const insertURL = async(orignalUrl, shortendUrl) => {
    console.log(shortendUrl);
    console.log(orignalUrl);
    var newUrl = new URL({
        orignalUrl: orignalUrl,
        shortendUrl: shortendUrl
    })

    try {
        await newUrl.save()
    } catch(err) {
        console.log(err)
    }
}

const checkIfUrlExist = async(shortendUrl) => {
    const url = await URL.find({shortendUrl});
    console.log(url);
    return url.length > 0 ? true : false;
}

const getOriginalUrl = async(shortendUrl) => {
    const url = await URL.find({shortendUrl});
    return url.length > 0 ? url[0].orignalUrl : false;
}

module.exports = {
    insertURL,
    checkIfUrlExist,
    getOriginalUrl
}
