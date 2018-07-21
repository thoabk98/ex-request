var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var http = require('http');
var link = "http://mediaf.studyphim.vn/index1.php?v=RXVuUnhXSmJGN2JLbzNzTXNNbEhjaG9qaDhvZlhzL2p2aXl6Q09KSFh0V29tM25jQkFrUW8xelRoU2JCcHJBMUpDQlVtR2dGa25rbVhtSVR1ZkZlbVJaR1lXVzJObjJNTm5wRXJKZXhHbFE2bGQ4blBNcE9PWnlTNVkvMkI1dWpZOWhOYWgxNlQyUTVqZU1LV2g4QXk3TTFIMDZBaTQ2MlVRbkRoR3E5U0JvMi92czNweHg3eGxJeFA2TTY5cUlVeXNaeFlDbVhsZHdpb09hN3FVKzNpMkZmRnM5L3Z5WDRUYUhVUmVUZ3hrMzRIS2txakErVEhiYUV0UXFFcW1EOTNjelpCSGtmZ1hEWFZqWWdwNDJ1SlNXVitrSStEbHNlMm5lTjBpYlJTY29HSTRITDYwVHdMN1hRNDFLQkg2cFN2d3daWGQ3Ym1WY3NHMllLVTdHL1E5S1NRU09lNlpDTnV4OTMvSGVrdmJLaVJSTGhvWFlhRUcyc05mbll4bGVqZlREekhHbitPZUlHSS9PeG5pbklGZENwUlRsU0Z6aHRTOGZELzljZDdzUkJOL2Q0U1ZHMjJvUFY2cW5tVUZaK2FBbXh6Z1JXbU5VdnNOQXgwTmE1b01yNllWQ0EveWswSE1jelVic01pdmRBYk1nTm9jY3FsRDgzWTFNN0RuQzE1K2cyNW1XcEo4ZXNyb3pHMzFHeDlSNnBkY0F5SmpvUjV0dG9MOXUxc2lWdmFXQ3FCNkp1aW1zRmxJR3NNd2hLbEUzV0FuelRCL0RhbmVHM2JiMHVUZHAweHI5dmlZNEFWT05ucEx2SGRGaFI4ZHN4bzFHMUlkSTBOSWpjYlVSRHgxVHBVK2lmODhOQW90Vm4rcmx1RFRDeEg0cktldjVaRGY0WGZseGV2dUE9";
// request(link, function(err, req, html) {
//     // const $ = cheerio.load(html);
//     // //fs.writeFile("aj.html", html);
//     // var video = $("#video > source");
//     // console.log($(video).attr("src"));

//     req.pipe(file);
// });
var file = fs.createWriteStream("a.mp4");
var request = http.get(link, function(response) {
    response.pipe(file);
});