const express = require("express");
const router = express.Router();
const pool = require("../config/database");

//get data from db
router.get("/getTodoList", async (req, res) => {
  id = 1;
  const result = await pool.query(
    " SELECT * FROM translator_inbox JOIN user_table ON translator_inbox.language_id = user_table.language_id WHERE user_table.id=$1",
    [id]
  );
  res.json(result.rows);
});

module.exports = router;
