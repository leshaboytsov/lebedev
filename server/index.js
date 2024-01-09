
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(fileUpload());

mongoose.connect('mongodb://database:27017/lebedev');
app.use('/film', express.static('film'));


const filmRoutes = require("./routes/video");
const adminRoutes = require("./routes/admin");


app.use("/video", filmRoutes);
app.use('/admin', adminRoutes);

app.listen(8000, '0.0.0.0', () => {
  console.log('Server is running on port 8000');
});

module.exports = app;
