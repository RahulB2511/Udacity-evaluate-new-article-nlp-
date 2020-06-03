const dotenv = require('dotenv');
dotenv.config();
function validateInputRequest(req, res, next) {
    if(!req.body.text ) { // check for input validation
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function PostHandler(req, res, next) {
    var aylien = require("aylien_textapi");
    // Aylien API credentias load app_id and app_key from .env file
    // Please make sure to carate an account in aylian and obtain your own app_id and app_key
    // then create a .env file and set it.
    var textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    console.log(req.body, req.body.text)
    textapi.sentiment({
      url: req.body.text
    }, (error, response) => {
        res.json(response)
    }); 
 
}

exports.validateInputRequest = validateInputRequest;
exports.PostHandler = PostHandler;