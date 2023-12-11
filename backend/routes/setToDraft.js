const express = require("express");
const router = express.Router();
const pool = require("../config/database");

//change the status to draft for  the selected file
router.put("/setToDraft", async (req, res) => {
  const { file_id } = req.body;
  const result = await pool.query(
    "UPDATE reviewer_inbox SET isdraft=true  WHERE file_id=$1",
    [file_id]
  );
  res.json(result.rows);
});

module.exports = router;
