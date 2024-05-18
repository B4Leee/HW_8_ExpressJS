const express = require("express");
const router = express.Router();

const pool = require("../queries");

//Untuk Menampilkan seluruh list film
router.get("/", (req, res) => {
  pool.query("SELECT * FROM film ORDER BY film_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

//Untuk menampilkan data film bedasarkan id
router.get("/:film_id", (req, res) => {
  const film_id = req.params.film_id;

  pool.query(
    `SELECT * FROM film WHERE film_id = $1`,
    [film_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

module.exports = router;
