require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", async function (req, res) {
  res.send(process.env.FOO);
});

app.post("/:zipcode", async (req, res) => {
  const { zipcode } = req.params;
  const coords = await getCoordinates(zipcode);
  res.send(coords);
});

async function getCoordinates(zipcode) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const res = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      zipcode +
      "&key=" +
      apiKey
  );
  const coordinates = res.data.data.results;
  return coordinates;
}

app.listen(process.env.PORT || 3001);
