require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.json());

app.get('/', async function(req, res) {
	res.send((process.env.FOO));
});

app.post('/:zipcode', (req, res) => {
	const{zipcode} = req.params
	if (!zipcode) {
		return res.status(400).send({status:'failed'})
	}
	getWeatherData(zipcode)
})

async function getWeatherData(zipCode) {
	const apiKey = process.env.GOOGLE_MAPS_API_KEY
	const res = await axios.get(
		'https://maps.googleapis.com/maps/api/geocode/json?address='+zipCode+'&key='+ apiKey
	)

	console.log(JSON.stringify(res.data.results))
}

app.listen(process.env.PORT || 3001);