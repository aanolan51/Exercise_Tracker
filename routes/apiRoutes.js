const router = require("express").Router();
const Exercise = require("../models/Exercise");

//Add Exercises to most recent plan:


//Add a new exercise to a new workout plan:


//View combined weight of multiple exercises from past 7 workouts on stats page:


//View total duration of of each workout from the past 7 workouts on the stats page:

// router.post("/api/transaction", ({ body }, res) => {
//   Exercise.create(body)
//     .then(dbExercise => {
//       res.json(dbExercise);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;