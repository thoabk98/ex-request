var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');
var http = require('http');
//var linkraw = "http://www.studyphim.vn/movies/english-communication/play?episode=1";
var link = "http://www.studyphim.vn/movies/english-communication/play?episode=";
//var leng = linkraw.length;
//var episode = linkraw[leng - 1];
//var num = parseInt(linkraw[leng - 1]);
var currEp = 1;

function getData(link, episode, callback) {
    console.log("start download ep...", episode);
    var linkf = link + episode;
    var folfer = "episode" + episode;
    fs.mkdirSync(folfer);
    var filevid = "/home/thoa/NodeJS/ex-request" + "/" + "episode" + episode + "/" + "episode" + episode + ".mp4";
    var file = fs.createWriteStream(filevid);
    request(linkf, function(err, request, html) {
        var $ = cheerio.load(html);
        var linkfilm = $("video > source");
        //console.log($(linkfilm).attr("src"));
        http.get($(linkfilm).attr("src"), function(response) {
            response.on('end', function() {
                if (callback && typeof callback === "function") {
                    callback(++currEp);
                }
            })
            response.pipe(file);

        });

    })
    var split = link.split("/");
    var linksub = "http://www.studyphim.vn/movies/getSubtitle/en/" + split[4] + "/" + episode;
    //console.log(linksub);
    var filesub = "/home/thoa/NodeJS/ex-request" + "/" + "episode" + episode + "/" + "episode" + episode + ".vtt";
    request(linksub, function(err, response, html) {
        fs.appendFile(filesub, html);
    })
}

function getDatanum(i) {
    if (i < 6) getData(link, i, getDatanum);
    return;
}
getData(link, currEp, getDatanum);