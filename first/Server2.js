//this application is now creating server and only outputting one sentence. then us host a website. It must also
//tell us what sites the user has clicked on
//listen to port 8080


var http = require("http")
var fs = require("fs")

var send404error = function (response) {
    response.writeHead(404, "Shit didnt work son");
    response.write("There is an error accessing this page. Please go back to where you started");
    response.end();

}

var myRequestListener = function (request, response) {

    if (request.url == "/" && request.method == "GET"){
        fs.createReadStream("./index.html").pipe(response)
        console.log("Working. Accessing " + request.url)
    }
    else {
        send404error(response)
        console.log(request.url)

    }
}


http.createServer(myRequestListener).listen(8000);
console.log("The server has been started");


