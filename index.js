const express = require("express");
const app = express();
const port = 8080;
const path = require('path');

app.listen(port, () => {
    console.log("Helloo");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//views klasörünün yönünü direkt görmesi için
app.use(express.static(path.join(__dirname, "/views")));

app.get("/", (req, res) => {
    //console.log(__dirname);
    res.sendFile(path.join(__dirname, "/views/main.html"));
})

app.get("/ejs", (req, res) => {
    res.render("brewType");
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/contact.html"));
})