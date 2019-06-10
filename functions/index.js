const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
// const firestore = require('./firestore');

const admin = require('firebase-admin');
admin.initializeApp();

const firestore = admin.firestore();

const app = express();

app.use(helmet());
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	response = { message: 'We have launched' };

	return res.status(200).json(response);
});

app.post('/post', (req, res) => {
	request = req.body;

	firestore.collection('person').add;
});

exports.kengo_api = functions.https.onRequest(app);
