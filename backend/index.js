const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let bookings = []; // basit bellek içi veri

// Rezervasyon ekleme
app.post("/api/bookings", (req, res) => {
  const { serviceId, name, phone, time } = req.body;
  if (!serviceId || !name || !phone || !time) {
    return res.status(400).json({ message: "Eksik veri" });
  }
  const newBooking = { id: Date.now(), serviceId, name, phone, time };
  bookings.push(newBooking);
  res.json(newBooking);
});

// Rezervasyonları listeleme
app.get("/api/bookings", (req, res) => {
  res.json(bookings);
});

app.listen(5000, () => console.log("Backend çalışıyor: http://localhost:5000"));
