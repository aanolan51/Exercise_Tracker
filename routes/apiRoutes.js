const router = require("express").Router();
const Exercise = require("../models/Exercise");

//In the public folder, there is an api.js file. This file is used to create the required methods for each determined route.

//Add Exercises to most recent plan. Updating a exercise using a put request:


//Add a new exercise to a new workout plan:
//path from the api.js file in the public folder:
router.post("/api/workouts", async ({ body }, res) => {
 
  try{
    const input = await Exercise.create(body);
    res.json.parse(input);

  }catch(err){console.log(err)}

    // Exercise.create(body)
    //   .then(data => {
    //     res.json(data);
    //   })
    //   .catch(err => {
    //     res.status(400).json(err);
    //   });
});


//View the last workout (api.js). This requires a get request at the following route:
router.get("/api/workouts", (req, res) => {
    Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//View a range of workouts:
router.get("/api/workouts/range", (req, res) => {
    Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


module.exports = router;