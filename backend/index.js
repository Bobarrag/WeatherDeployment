require('dotenv').config();

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', async function(req, res) {
	res.send((process.env.FOO));
});

app.listen(process.env.PORT || 3001);