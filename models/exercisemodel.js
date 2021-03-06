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
      trim: true
    },
    name: {
      type: String,
      trim: true
    },
    duration: {
      type: Number
    },
    distance: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    }

  }]
  
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;