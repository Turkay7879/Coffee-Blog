const express = require("express");
const app = express();
const port = 8080;
const path = require('path');
const photos = [{ "name": "V60 Demleme", "path": "../img/brew/v60.jpg", "route": "../brewtype/v60" },
{ "name": "French Press Demleme", "path": "../img/brew/french_press.jpg", "route": "../brewtype/frenchpress" },
{ "name": "Chemex Demleme", "path": "../img/brew/chemex.jpg", "route": "../brewtype/chemex" },
{ "name": "AeroPress Demleme", "path": "../img/brew/aeropress.jpg", "route": "../brewtype/aeropress" },
{ "name": "Syphon Demleme", "path": "../img/brew/syphon.jpg", "route": "../brewtype/syphon" },
{ "name": "Moka Pot Demleme", "path": "../img/brew/mokapot.jpg", "route": "../brewtype/mokapot" }];

const countryPhoto = [{ "name": "Latin Amerika", "path": "../img/continent/latin.jpg", "route": "../coffeevariety/latinamerica" },
{ "name": "Afrika", "path": "../img/continent/africa.jpg", "route": "../coffeevariety/africa" },
{ "name": "Asya Pasifik", "path": "../img/continent/asia.jpg", "route": "../coffeevariety/asia" }]

app.listen(port, () => {
    console.log("Helloo");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//views klasörünün yönünü direkt görmesi için
app.use(express.static(path.join(__dirname, "/views")));

const selectImg = (img) => {
    let count = 0;
    const randImg = [];

    while (count != 3) {
        let rand = Math.floor(Math.random() * photos.length);
        if (photos[rand].path !== "../img/brew/" + img + ".jpg" && !randImg.includes(photos[rand])) {
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
    const randImg = selectImg("french_press");
    const imgPath = "../img/brew/french_press.jpg";
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewType, imgPath, randImg });
})

app.get("/brewtype/v60", (req, res) => {
    const randImg = selectImg("v60");
    const imgPath = "../img/brew/v60.jpg";
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewType, imgPath, randImg });
})

app.get("/brewtype/chemex", (req, res) => {
    const randImg = selectImg("chemex");
    const imgPath = "../img/brew/chemex.jpg";
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewType, imgPath, randImg });
})

app.get("/brewtype/aeropress", (req, res) => {
    const randImg = selectImg("aeropress");
    const imgPath = "../img/brew/aeropress.jpg";
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewType, imgPath, randImg });
});

app.get("/brewtype/syphon", (req, res) => {
    const randImg = selectImg("syphon");
    const imgPath = "../img/brew/syphon.jpg";
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewType, imgPath, randImg });
});

app.get("/brewtype/mokapot", (req, res) => {
    const randImg = selectImg("mokapot");
    const imgPath = "../img/brew/mokapot.jpg";
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewType, imgPath, randImg });
});

app.get("/coffeevariety/latinamerica", (req, res) => {
    const mainImg = countryPhoto[0];
    const choice1 = countryPhoto[1];
    const choice2 = countryPhoto[2];
    res.render("coffeeVariety", { mainImg, choice1, choice2 });
});

app.get("/coffeevariety/africa", (req, res) => {
    const mainImg = countryPhoto[1];
    const choice1 = countryPhoto[0];
    const choice2 = countryPhoto[2];
    res.render("coffeeVariety", { mainImg, choice1, choice2 });
});

app.get("/coffeevariety/asia", (req, res) => {
    const mainImg = countryPhoto[2];
    const choice1 = countryPhoto[1];
    const choice2 = countryPhoto[0];
    res.render("coffeeVariety", { mainImg, choice1, choice2 });
});

app.get("/brewtype", (req, res) => {
    res.render("brewList");
});

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.post("/contact", (req, res) => {
    const { isim, telefon, email, mesaj } = req.body;
    res.send("hipiti hopiti post request alindi");
});

// Geçersiz bir sayfa açılırsa
app.get("*", (req, res) => {
    res.send("Aradığınız sayfaya ulaşılamıyor.");
    //res.render("notFound");
});