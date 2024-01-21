require("dotenv").config();

console.log(process.env);

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
  const locationData = await getLocationData(zipcode);
  const weatherData = await getWeatherData(locationData);
  res.send(weatherData.data);
});

async function getLocationData(zipcode) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const res = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      zipcode +
      "&key=" +
      apiKey
  );
  const locationData = res.data;
  console.log(
    "successfully fetched location: " + JSON.stringify(locationData) + "\n"
  );
  return locationData;
}

async function getWeatherData(locationData) {
  const coordinates = locationData.results[0].geometry.location;
  console.log(
    "attempting to fetch weather at coordinates: " +
      coordinates.lat +
      coordinates.lng
  );
  const weatherData = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      coordinates.lat +
      "&longitude=" +
      coordinates.lng +
      "&current=temperature_2m,is_day,precipitation&temperature_unit=fahrenheit&timezone=America%2FNew_York&hourly=temperature_2m&forecast_days=1"
  );

  console.log("fetched weather data: " + weatherData);
  return weatherData;
}
app.listen(process.env.PORT || 3001);
