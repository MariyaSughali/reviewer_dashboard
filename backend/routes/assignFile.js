const express = require("express");
const router = express.Router();
const pool = require("../config/database");

// assign the selected file to that reviewer
router.post("/assignFile", async (req, res) => {
  const { id, file_name, file_id, language_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO reviewer_inbox (file_id, file_name, id,language_id) VALUES ($1, $2, $3,$4)",
      [file_id, file_name, id, language_id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
