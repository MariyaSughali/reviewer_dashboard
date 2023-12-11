const express = require("express");
const router = express.Router();
const pool = require("../config/database");

//get data from db
router.get("/getreviewer/:user_id", async (req, res) => {
  const id = req.params.user_id;
  // id = 1;
  const result = await pool.query(
    "SELECT * FROM reviewer_inbox  WHERE id =$1",
    [id]
  );
  res.json(result.rows);
});

module.exports = router;
