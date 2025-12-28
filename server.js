const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 👇 IMPORTANT: routes import
const destinationRoutes = require("./routes/destinationRoutes");

// 👇 IMPORTANT: routes use
app.use("/api/destinations", destinationRoutes);

app.get("/", (req, res) => {
  res.send("Travel Explorer Backend Running");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => console.log(err));


