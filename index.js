const express = require("express");
const path = require("path");
const http = require("http");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const server = http.createServer(app);


app.use(session({ secret: "ssshhhhh", saveUninitialized: true, resave: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/src"));

app.set("port", process.env.port || 8080);
app.set("views", path.join(__dirname, "src"));

app.use("/assets", express.static(path.join(__dirname, "assets")));


app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', 1);

  next();
});

app.get("/",(req,res) => {
    res.sendFile("index.html")
})

server.listen(app.get("port"), () => {
  console.log("App listening to port %d", app.get("port"));
});

