const mongoose = require('mongoose');


const destinationSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
city: {
type: String,
required: true,
unique: true
},
createdAt: {
type: Date,
default: Date.now
}
});


module.exports = mongoose.model('Destination', destinationSchema);

const DestinationSchema = new mongoose.Schema({
  name: String,
  city: String
});

module.exports = mongoose.model('Destination', DestinationSchema);
