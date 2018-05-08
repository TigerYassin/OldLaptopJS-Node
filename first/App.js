var forest = require("./Forest_Gump")


require("./Avatar")

var fs = require("fs")

fs.writeFileSync("Movie.txt", forest.Yassin)

console.log(fs.readFileSync("Movie.txt").toString())