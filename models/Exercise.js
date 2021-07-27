const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter the exercise type:"
    },
    name: {
      type: String,
      trim: true,
      required: "Enter the exercise name:"
    },
    duration: {
      type: Number,
      required: "Enter the duration:"
    },
    weight: {
      type: Number,
      required: "Enter weight:"
    },
    reps: {
      type: Number,
      required: "Enter number of reps:"
    },
    sets: {
      type: Number,
      required: "Enter how many sets:"
    }

  }]
  
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;