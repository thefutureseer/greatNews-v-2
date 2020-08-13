// Require/import the HTTP module
var express = require('express');
const axios = require('axios');
//const cheerio = require('cheerio');
const path = require('path');
const app = express();

// const lo = cheerio.load('<h2 class="title">Hello world</h2>');

axios.get("https://arstechnica.com/gadgets/").then(urlResponse => {
//const $ = cheerio.load(urlResponse.data);
  //.each for multiple articles i for index of each element
  // $("li.article").each((i, element) => {
  //   const headlines = $(element).find("a.overlay").attr("href");
    //log all article headlines 
  //  console.log(headlines);

    //Express app to register this route handler, listen/watch for the http get method 
    //with end point "/", request object (req) that represents incoming requests,
    //res object that represents the outgoing response
    app.get("/scrapers", (req, res) => {
      //Load entire page to the browser:
      res.send(urlResponse.data);
    });
//  })
});

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.use('*', (req, res) => {
    //Load index.html file. Path module. Go from the current directory
    // to the client folder to the build folder and load the index.html
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}


//Define a port to listen for incoming requests process.env.PORT is for Heroku to host later. or 8000 for dev
var PORT = process.env.PORT || 8000;

 //Express app listening/ Start server so that it can begin listening to client requests.
 app.listen(PORT, function() {
 
   // Log (server-side) when our server has started
   console.log(`Server listening on: http://localhost: ${PORT}`);
 });