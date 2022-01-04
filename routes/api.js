const router = require("express").Router();
const workout = require("../models");

router.post("/workout", ({ body }, res) => {
  workout.create(body)
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workout", (req, res) => {
  workout.aggregate([
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

router.put("/workout/:id", (req, res) => {
  workout.findByIdAndUpdate(req.params.id,
    {$push: { excercises: req.body }},
    { new: true, runValidators: true })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workout", (req, res) => {
  workout.aggregate([{
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