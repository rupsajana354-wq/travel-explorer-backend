const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/travelexplorer');


app.use(express.json());
app.use(express.static('public'));


app.use('/api/destinations', require('./routes/destinationRoutes'));

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/travelExplorer')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(3000, () => console.log('Server running'));
app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
