var movie = require("./Movies")

var Yassin_Choice = movie()
Yassin_Choice.good_Movie = "Twilight"
Yassin_Choice.bad_Movie = "Deadpool"

console.log(Yassin_Choice)

module.exports.Yassin = Yassin_Choice.good_Movie + Yassin_Choice.bad_Movie