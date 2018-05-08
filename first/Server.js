var http = require("http")
var fs = require("fs")

function send404Response(response) {
    response.writeHead(404, "Not good");
    response.write("Error 404, Page not found");
    console.log("Something")
    response.end();
}

function onRequest(myRequest, myResponse) {

    if (myRequest.method == "GET" && myRequest.url == "/"){
        myResponse.writeHead(200, "Working");
        // fs.createReadStream("./index.html").pipe(myResponse);
        myResponse.write(fs.readFileSync("./index.html"))
    }
    else send404Response(myResponse);

    myResponse.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running ")
