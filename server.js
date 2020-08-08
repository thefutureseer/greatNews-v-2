// Require/import the HTTP module
var express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

// const lo = cheerio.load('<h2 class="title">Hello world</h2>');

axios.get("https://arstechnica.com/gadgets/").then(urlResponse => {
  const $ = cheerio.load(urlResponse.data);
  //.each for multiple articles i for index of each element
  $("li.article").each((i, element) => {
    const headlines = $(element).find("a.overlay").attr("href");
    //log all article headlines 
    console.log(headlines);

    //Express app to register this route handler, listen/watch for the http get method 
    //with end point "/srapes", request object (req) that represents incoming requests,
    //res object that represents the outgoing response
    app.get("/scrapes", (req, res) => {
      //Load entire page to the browser:
      res.send(urlResponse.data);
    });
  })
});
//Bring in a node.js module to deal with file paths called "path"
const path = require('path');

const app = express();

//Define a port to listen for incoming requests process.env.PORT is for Heroku to host later. or 8000 for dev
var PORT = process.env.PORT || 8000;

 //Express app listening/ Start server so that it can begin listening to client requests.
 app.listen(PORT, function() {
 
   // Log (server-side) when our server has started
   console.log(`Server listening on: http://localhost: ${PORT}`);
 });