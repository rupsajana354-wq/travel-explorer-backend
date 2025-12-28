const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 SAFE CONNECT (only once)
if (mongoose.connection.readyState === 0) {
  mongoose.connect("process.env.mongodb+srv://rjrup17_db_user:Rupsa@2005@cluster0.6tmh5pv.mongodb.net/?appName=Cluster0")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("Mongo Error:", err));
}

const destinationRoutes = require("./routes/destinationRoutes");
app.use("/api/destinations", destinationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});

