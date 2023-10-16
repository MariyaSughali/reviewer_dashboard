const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getreviewerRoutes = require("./routes/getreviewer");
const getTodoListRoutes = require("./routes/todoList");

app.get("/getreviewer", getreviewerRoutes);
app.get("/getTodolist", getTodoListRoutes);

module.exports = app;
