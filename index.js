const express = require("express");
const app = express();
const port = 8080;
const path = require('path');
const photos = ["../img/brew/v60.jpg", "../img/brew/french_press.jpg", "../img/brew/chemex.jpg", "../img/brew/aeropress.jpg"];

app.listen(port, () => {
    console.log("Helloo");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//views klasörünün yönünü direkt görmesi için
app.use(express.static(path.join(__dirname, "/views")));

const selectImg = (img) => {
    let count = 0;
    const randImg = [];

    while (count != 3) {
        let rand = Math.floor(Math.random() * photos.length);
        if (photos[rand] !== "../img/brew/" + img + ".jpg" && !randImg.includes(photos[rand])) {
            randImg.push(photos[rand]);
            count++;
        }
    }
    return randImg;
}

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/brewtype/frenchpress", (req, res) => {
    const randImg = selectImg("chemex");
    const imgPath = "../img/brew/french_press.jpg";
    res.render("brewType", { imgPath, randImg });
})

app.get("/brewtype/v60", (req, res) => {
    const randImg = selectImg("v60");
    const imgPath = "../img/brew/v60.jpg";
    res.render("brewType", { imgPath, randImg });
})

app.get("/brewtype/chemex", (req, res) => {
    const randImg = selectImg("chemex");
    const imgPath = "../img/brew/chemex.jpg";
    res.render("brewType", { imgPath, randImg });
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

// Geçersiz bir sayfa açılırsa
app.get("*", (req, res) => {
    res.send("Aradığınız sayfaya ulaşılamıyor.");
    //res.render("notFound");
});