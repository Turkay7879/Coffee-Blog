const express = require("express");
const app = express();
const port = 8080;
const path = require('path');
const blogData = require('./views/data/data.json');

const photos = blogData.coffees;
const countryPhoto = blogData.continents;

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
    const brewName = "French Press";
    const randImg = selectImg("french_press");
    const imgPath = "../img/brew/french_press.jpg";
    const intro = blogData.brewInstructions.frenchPress.intro;
    const instructions = blogData.brewInstructions.frenchPress.details;
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewName, brewType, imgPath, randImg, intro, instructions });
})

app.get("/brewtype/v60", (req, res) => {
    const brewName = "V60";
    const randImg = selectImg("v60");
    const imgPath = "../img/brew/v60.jpg";
    const intro = blogData.brewInstructions.v60.intro;
    const instructions = blogData.brewInstructions.v60.details;
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewName, brewType, imgPath, randImg, intro, instructions });
})

app.get("/brewtype/chemex", (req, res) => {
    const brewName = "Chemex";
    const randImg = selectImg("chemex");
    const imgPath = "../img/brew/chemex.jpg";
    const intro = blogData.brewInstructions.chemex.intro;
    const instructions = blogData.brewInstructions.chemex.details;
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewName, brewType, imgPath, randImg, intro, instructions });
})

app.get("/brewtype/aeropress", (req, res) => {
    const brewName = "AeroPress";
    const randImg = selectImg("aeropress");
    const imgPath = "../img/brew/aeropress.jpg";
    const intro = blogData.brewInstructions.aeropress.intro;
    const instructions = blogData.brewInstructions.aeropress.details;
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewName, brewType, imgPath, randImg, intro, instructions });
});

app.get("/brewtype/syphon", (req, res) => {
    const brewName = "Syphon";
    const randImg = selectImg("syphon");
    const imgPath = "../img/brew/syphon.jpg";
    const intro = blogData.brewInstructions.syphon.intro;
    const instructions = blogData.brewInstructions.syphon.details;
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewName, brewType, imgPath, randImg, intro, instructions });
});

app.get("/brewtype/mokapot", (req, res) => {
    const brewName = "Moka Pot";
    const randImg = selectImg("mokapot");
    const imgPath = "../img/brew/mokapot.jpg";
    const intro = blogData.brewInstructions.mokapot.intro;
    const instructions = blogData.brewInstructions.mokapot.details;
    const brewType = photos.find(brew => brew.path === imgPath).name;
    res.render("brewType", { brewName, brewType, imgPath, randImg, intro, instructions });
});

app.get("/coffeevariety/latinamerica", (req, res) => {
    const mainImg = countryPhoto[0];
    const choice1 = countryPhoto[1];
    const choice2 = countryPhoto[2];
    const {title, text} = blogData.variety.latinAmerica;
    res.render("coffeeVariety", { mainImg, choice1, choice2, title, text });
});

app.get("/coffeevariety/africa", (req, res) => {
    const mainImg = countryPhoto[1];
    const choice1 = countryPhoto[0];
    const choice2 = countryPhoto[2];
    const {title, text} = blogData.variety.africa;
    res.render("coffeeVariety", { mainImg, choice1, choice2, title, text });
});

app.get("/coffeevariety/asia", (req, res) => {
    const mainImg = countryPhoto[2];
    const choice1 = countryPhoto[1];
    const choice2 = countryPhoto[0];
    const {title, text} = blogData.variety.asiaPacific;
    res.render("coffeeVariety", { mainImg, choice1, choice2, title, text });
});

app.get("/brewtype", (req, res) => {
    res.render("brewList");
});

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.post("/contact", (req, res) => {
    const { isim, telefon, email, mesaj } = req.body;
    // Daha düzgün bir mesaj göster, veya redirect?
    res.send("Mesajınız alınmıştır. İletişime geçtiğiniz için teşekkürler!");
});

// Geçersiz bir sayfa açılırsa
app.get("*", (req, res) => {
    res.render("notFound");
});