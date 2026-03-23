const express = require("express");
const router = express.Router();

const { courses } = require("../data/data");

// GET /courses
router.get("/", (req, res) => {
  const names = courses.map(course => course.name).join(", ");
  res.send(`Courses: ${names}`);
});

// GET /courses/:id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const course = courses.find(c => c.id === id);

  if (!course) {
    return res.send("Course not found");
  }

  res.send(`Course: ${course.name}, Description: ${course.description}`);
});

module.exports = router;