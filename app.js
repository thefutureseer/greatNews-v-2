// const cheerio = require('cheerio');
// const axios = require('axios');


// // const lo = cheerio.load('<h2 class="title">Hello world</h2>');

// axios.get("https://arstechnica.com/gadgets/").then(urlResponse => {
//   const $ = cheerio.load(urlResponse.data);
//   //.each for multiple articles i for index of each element
//   $("li.article").each((i, element) => {
//     const link = $(element).find("a.overlay").attr("href");
//     console.log(link);
//     })
//     });