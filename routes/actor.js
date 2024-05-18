const express = require("express");
const router = express.Router();

const pool = require("../queries");

//Untuk Menampilkan seluruh list actor
router.get("/", (req, res) => {
  pool.query("SELECT * FROM actor ORDER BY actor_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

module.exports = router;
