const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');


router.post('/', async (req, res) => {
const dest = new Destination(req.body);
await dest.save();
res.json(dest);
});


router.get('/', async (req, res) => {
const data = await Destination.find();
res.json(data);
});


module.exports = router;


