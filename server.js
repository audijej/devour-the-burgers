let express = require("express");
let path = require('path');
let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//////Handlebar routing/////////////


let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log( "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT)
});