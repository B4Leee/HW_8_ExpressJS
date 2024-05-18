const express = require("express");
const router = express.Router();

const pool = require("../queries");

// Untuk Menampilkan seluruh list category
router.get("/", (req, res) => {
  pool.query(`SELECT * FROM category`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

//Untuk Menampilkan data list film berdasarkan category
router.get("/:name", (req, res) => {
  const name = req.params.name;

  pool.query(
    `SELECT * FROM film
    INNER JOIN film_category ON film.film_id = film_category.film_id
    INNER JOIN category ON film_category.category_id = category.category_id
    WHERE category.name = $1;`,
    [name],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

module.exports = router;
