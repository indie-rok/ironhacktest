const Joi = require("joi");
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  image: {
    type: String,
    minlength: 3,
    required: true
  },
  director: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  release_date: {
    type: Date,
    required: true
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  plot: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 500
  }
});

const Movie = mongoose.model("Movie", MovieSchema);

//function to validate movie
function validateUser(movie) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    image: Joi.string()
      .min(3)
      .required(),
    director: Joi.string()
      .min(3)
      .max(50)
      .required(),
    score: Joi.number()
      .min(0)
      .max(5)
      .required(),
    plot: Joi.string()
      .min(3)
      .max(500)
      .required(),
    release_date: Joi.date().required()
  };

  return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateUser;
