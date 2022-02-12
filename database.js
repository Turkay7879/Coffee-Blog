const mongoose = require("mongoose");

const connectionString =
  "U2FsdGVkX1/+JbBUVewvObSfv+zZWdYkjX4aLfNEFxPBXn86cutdbn0y+trhPPVLuj9QqwU0579KymilMgm5+zlVbvHa04GCVHVfbkYXq6x+5L2guTl9Sn/YHR4Yxm/BS0Zm+nbq4FvU2CLYz79bHN8ALizmPBFvaPmJJxn+NoY=";

const contactMailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Bir isim giriniz"],
  },
  phone: {
    type: String,
    required: [true, "Telefon numarası giriniz"],
    length: 12,
  },
  email: {
    type: String,
    required: [true, "Mail adresi giriniz"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Geçerli bir mail adresi giriniz",
    ],
  },
  message: {
    type: String,
    required: [true, "İletişim mesajını giriniz"],
    minlength: [20, "Mesajınız en az 20 karakter uzunluğunda olmalıdır"],
    maxlength: [998, "Mesajınız en fazla 998 karakter uzunluğunda olmalıdır"],
    trim: true,
  },
});
const ContactMail = mongoose.model("ContactMail", contactMailSchema);

module.exports = { connectionString, ContactMail };
