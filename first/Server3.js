var http = require("http");
var connect = require("connect");
var fs = require("fs");

var app = connect();

// var doFirst = function (request, response, next) {
//     console.log("First");
//     next();
// };
//
// var doSecond = function (request, response, next) {
//     console.log("Second");
//     next();
// };
//
// app.use(doFirst);
// app.use(doSecond);

function profile(request, response) {
    fs.createReadStream('./index.html').pipe(response)
}

function uses(request, response) {
    fs.createReadStream('./index2.html').pipe(response)
}

app.use('/profile', profile)
app.use('/uses', uses)


http.createServer(app).listen(8080);
console.log("The Server has started");