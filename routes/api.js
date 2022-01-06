const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/workouts", (req, res) => {
  Workout.create({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }
  ])
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {$push: { exercises: req.body }},
    { new: true, runValidators: true })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([{
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
  }])
    .sort({ _id: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;