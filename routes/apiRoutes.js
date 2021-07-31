const router = require("express").Router();
const Exercise = require("../models/exercisemodel.js");

//In the public folder, there is an api.js file. This file is used to create the required methods for each determined route.

//Add Exercises to most recent plan. Updating a exercise using a put request:
router.put("/api/workouts/:id",  (req, res) =>{
  Exercise.findByIdAndUpdate(
    req.params.id,
    {$push: {exercises: req.body}},
    {new:true}
  ).then(data => {
    console.log(data);
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});


//Add a new exercise to a new workout plan:
//path from the api.js file in the public folder:
router.post("/api/workouts",  (req, res) => {
  // console.log("inside post");
 
  //Create the item to be inserted in the db. Does not yet have any data, the put request will add in the data.
    Exercise.create({})
      .then(data => {
        // console.log(data);
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

//View the last workout (api.js). This requires a get request at the following route:
router.get("/api/workouts", (req, res) => {
    Exercise.aggregate([{$set: {totalDuration: {$sum: "$exercises.duration"}}}])
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

//View a range of workouts. Add aggregate to add a sum of the total duration and add to the get request. 
//Sort the data in descending order by using the -1 indicator for the id. Limit to the past 7 workouts of data:
router.get("/api/workouts/range", (req, res) => {
    Exercise.aggregate([{$set: {totalDuration: {$sum: "$exercises.duration"}}}, {$sort:{_id: -1}}]).limit(7)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


module.exports = router;