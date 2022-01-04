const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
    },
    distanceInput: {
        type: Number
      },
    durationInput: {
        type: Number
    },
    weightInput: {
        type: Number
    },
   setsInput: {
       type: Number
   },
   reps: {
       type: Number
   } 
  }],
  day: {
    type: Date,
    default: Date.now
  }
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;