const express = require("express");
const router = express.Router();
const pool = require("../config/database");

// get data from db
router.get("/getTodoList", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
        t.file_id,
        t.file_name,
        t.assigned_dt,
        t.language_id,
        r.id AS reviewer_id,
        u.username
      FROM translator_inbox t
      LEFT JOIN reviewer_inbox r ON t.file_id = r.file_id
      LEFT JOIN user_table u ON r.id = u.id
      WHERE t.iscompleted = true`
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
