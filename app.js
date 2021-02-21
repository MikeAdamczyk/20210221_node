const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const functions = require("./functions");


const sample = () => 'podtytuł';
const x = 10;

app.set('view engine', 'hbs');
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function(req, res){
    res.render("index", {
        pageTitle: functions.someText,
        subTitle: x == 10 ? sample() : "upps",
    });
});

app.get("/about", function(req, res){
    res.send("Strona o mnie");
});

app.listen(port, (err) => {
    if(err) {
        return console.log(`Bład: ${err}`);
    }

    console.log(`Strona działa na porcie ${port}`);          
});



























// const { clear } = require("console");
// const http = require("http");

// const handler = (req, res) => {
//     console.log("sample message");
//     res.end("<h1>Hello world<h1>");
// }

// const server = http.createServer(handler);
// const port = 3000;

// server.listen(port, (err) => {
//     if(err){
//         return console.log(`Błąd: ${err}`);
//     }
//     console.log(`Server działa na porcie ${port}`);
// });




















// const functions = require('./functions');

// console.log("Heloooooooooooo");
// functions.hello();
// functions.add(2,3);