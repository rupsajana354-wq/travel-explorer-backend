const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');


// POST - Save Booking
router.post('/', async (req, res) => {
try {
const booking = new Booking(req.body);
await booking.save();
res.status(201).json({ message: 'Booking Confirmed' });
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// GET - All Bookings (Admin)
router.get('/', async (req, res) => {
const bookings = await Booking.find();
res.json(bookings);
});


module.exports = router;