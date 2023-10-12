const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const getreviewerRoutes= require("./routes/getreviewer");

app.get('/getreviewer',getreviewerRoutes);

module.exports = app ;