const auth = require("../middleware/auth");
const { Movie, validate } = require("../models/movie.model");
const express = require("express");
const router = express.Router();

router.get("/movies", auth, async (req, res) => {
  const movies = await Movie.find({})
    .limit(25)
    .select("name image score");

  if (movies) {
    return res.send({ movies });
  } else {
    return res.status(400).send({ msg: "No movies available to show" });
  }
});

router.post("/movies", auth, async (req, res) => {
  //   const { error } = validate(req.body);
  //   if (error) return res.status(400).send({ msg: error.details[0].message });

  let movie = new Movie({
    name: `Kill Bill ${Date.now()}`,
    image: "https://picsum.photos/200/100",
    director: "manu",
    release_date: "1233",
    score: 1,
    plot: "asd"
  });

  try {
    await movie.save();
  } catch (err) {
    return res.status(400).send({ msg: "No movies available to show" });
  }

  return res.status(201).send({ movie });
});

router.get("/movies/:movieId", auth, async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.movieId });

  if (movie) {
    return res.send(movie);
  } else {
    return res.status(404).send({ msg: "No movie with this ID" });
  }
});

router.delete("/movies/:movieId", auth, async (req, res) => {
  try {
    await Movie.findOneAndRemove({ _id: req.params.movieId });
    return res.status(204).send();
  } catch (err) {
    return res.status(400).send({ msg: `Error ${err}` });
  }
});

router.patch("/movies/:movieId", auth, async (req, res) => {
  let movie;

  try {
    movie = await Movie.findOneAndUpdate({ _id: req.params.movieId }, req.body);
    return res.status(200).send(movie);
  } catch (err) {
    return res.status(400).send({ msg: `Error ${err}` });
  }
});

module.exports = router;
