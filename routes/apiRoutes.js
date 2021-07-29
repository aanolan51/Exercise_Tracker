const router = require("express").Router();
const Exercise = require("../models/Exercise");

//Add Exercises to most recent plan:


//Add a new exercise to a new workout plan:
//path from the api.js file in the public folder:
router.post("/api/workouts", ({ body }, res) => {
    // console.log(body);

    Exercise.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});


//View combined weight of multiple exercises from past 7 workouts on stats page:
router.get("/api/workouts", (req, res) => {
    Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


//View total duration of of each workout from the past 7 workouts on the stats page:



module.exports = router;