const express = require("express");
const router = express.Router();
const pool = require("../config/database");

//get data from db
router.get("/getreviewer", async (req, res) => {
  // id = req.body;
  id = 1;
  const result = await pool.query(
    "SELECT * FROM reviewer_inbox  WHERE id =$1",
    [id]
  );
  res.json(result.rows);
});

module.exports = router;
