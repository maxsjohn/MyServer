/**
 * Created by John Viegas on 7/5/2016.
 */

var http = require('http');
var fs = require('fs');

var contents = fs.readFileSync('package.json').toString();

var server = http.createServer(function (request , response) {
    response.writeHead(200,{"Content-Type" : "text/plain"});
    console.log("hhhh");
    response.toString("dmdmd");
    response.end("Hello World12\n" +contents);

});

server.listen(7000);