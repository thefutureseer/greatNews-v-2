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

  //Load entire page to the browser:
   app.get("/scrapes", (req, res) => {
      res.send(urlResponse.data);

    });
  })
});
  //bring in a node.js module to deal with file paths called "path"
const path = require('path');

const app = express();

// // Define a port to listen for incoming requests
var PORT = process.env.PORT || 8000;


// // Create a generic function to handle requests and responses
// function handleRequest(request, response) {

// //   // Send the below string to the client when the user visits the PORT URL
//  response.end("It Works!! Path Hit: " + request.url);
//  };

// // Use the Node HTTP package to create our server.
// // Pass the handleRequest function to empower it with functionality.
 //var server = http.createServer(handleRequest);
// app.get("/scrapes", (req, res) => {
//   res.json(member)
// })

// // Start our server so that it can begin listening to client requests.
 app.listen(PORT, function() {
 
//   // Log (server-side) when our server has started
   console.log(`Server listening on: http://localhost: ${PORT}`);
 });