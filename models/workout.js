const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        }
    }],
    day: {
        type: Date,
        default: () => new Date()
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;