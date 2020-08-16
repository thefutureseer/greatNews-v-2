// Require/import the HTTP module
const express = require('express');
const app = express();
const path = require('path');
var jQuery = require('jquery');
var Nightmare = require('nightmare');

const nightmare = Nightmare();

const PORT = process.env.PORT || 8080;

var city = process.argv[2];

nightmare.goto('http://'+ city +'.craigslist.org/search/cpg?is_paid=yes&postedToday=1')
.wait(2000)
.evaluate(function() {
  var gigs = [];
  $('.hdrlnk').each(function() {
    item = {}
    item["title"] = $(this).text()
    item["link"] = $(this).attr("href")
    gigs.push(item)
  })
  return gigs;
})
.end()
.then(function(result) {
  for(gig in result) {
    console.log(result[gig].title);
    console.log(result[gig].link);
    console.log("\n");
    app.get('/', (req, res) => {
    res.send(result);
     });
  }
});

 //Express app listening/ Start server so that it can begin listening to client requests.
 app.listen(PORT, function() {
 
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost: ${PORT}`);
});