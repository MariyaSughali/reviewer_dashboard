const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getreviewerRoutes = require("./routes/getreviewer");
const getTodoListRoutes = require("./routes/todoList");
const assignFileRoutes = require("./routes/assignFile");
const setToDraftRoutes = require("./routes/setToDraft");

app.get("/getreviewer/:user_id", getreviewerRoutes);
app.get("/getTodolist", getTodoListRoutes);
app.post("/assignFile", assignFileRoutes);
app.put("/setToDraft", setToDraftRoutes);

module.exports = app;
