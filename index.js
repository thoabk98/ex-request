var request = require('request');
var cheerio = require('cheerio');
var list;
var fs = require('fs');
request('http://dantri.com.vn/', function(err, response, html) {
    if (err) throw err;
    //console.log(response);
    //console.log(body);
    const $ = cheerio.load(html);
    //fs.appendFile("google.html", body);
    var $list = $('li[data-boxtype=homenewsposition] a');
    $list.each((i, element) => {
        console.log(i, "Title: ", $(element).text());
        console.log("URL: ", $(element).attr("href"));
    });
});