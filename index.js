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
    res.render("main");
})

app.get("/brewtype/frenchpress", (req, res) => {
    const imgPath = "../img/brew/french_press.jpg";
    res.render("brewType", { imgPath });
})

app.get("/brewtype/v60", (req, res) => {
    const imgPath = "../img/brew/v60.jpg";
    res.render("brewType", { imgPath });
})

app.get("/brewtype/chemex", (req, res) => {
    const imgPath = "../img/brew/chemex.jpg";
    res.render("brewType", { imgPath });
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

// Geçersiz bir sayfa açılırsa
app.get("*", (req, res) => {
    res.send("Aradığınız sayfaya ulaşılamıyor.");
    //res.render("notFound");
});