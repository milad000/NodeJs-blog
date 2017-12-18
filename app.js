var express = require("express");
var bodyparser = require("body-parser");
var app = express();



app.use('/static', express.static('public'));
app.set('view engine', 'ejs');
app.use(require("express-session")({
    secret: "milad try and try",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyparser.urlencoded({
    extended: true
}));


//HOME
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/index", function (req, res) {
    res.render("index");
});
app.get("/about", function (req, res) {
    res.render("about");
});
app.get("/aboutJavaScript", function (req, res) {
    res.render("aboutJavaScript");
});
app.get("/scroll", function (req, res) {
    res.render("scroll");
});
app.get("/single", function (req, res) {
    res.render("single");
});
app.get("/contact", function (req, res) {
    res.render("contact");
});
app.get("/ES6vsES5", function (req, res) {
    res.render("ES6vsES5");
});
//PORT, IP
app.listen(6100,'192.168.0.109', function () {
    console.log("server started");
});
