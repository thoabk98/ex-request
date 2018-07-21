var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');
var http = require('http');
var link = "http://www.studyphim.vn/movies/english-communication/play?episode=1";
var leng = link.length;
var episode = link[leng - 1];
var folfer = "episode" + episode;
fs.mkdir(folfer);
var filevid = "/home/thoa/NodeJS/ex-request" + "/" + "episode" + episode + "/" + "episode" + episode + ".mp4";
var file = fs.createWriteStream(filevid);
request(link, function(err, request, html) {
    var $ = cheerio.load(html);
    fs.appendFile("a.html", html);
    var linkfilm = $("video > source");
    console.log($(linkfilm).attr("src"));

    var req = http.get($(linkfilm).attr("src"), function(response) {
        response.pipe(file);
    });
})
var split = link.split("/");
var linksub = "http://www.studyphim.vn/movies/getSubtitle/en/" + split[4] + "/" + episode;
var filesub = "/home/thoa/NodeJS/ex-request" + "/" + "episode" + episode + "/" + "episode" + episode + ".vtt";
request(linksub, function(err, response, html) {
    fs.appendFile(filesub, html);
})