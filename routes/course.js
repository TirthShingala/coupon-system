//routes for course
const router = require("express").Router();
const {
  addCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../utils/course");

router.post("/course", addCourse);
router.get("/courses", getAllCourses);
router.get("/course/:id", getCourseById);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

module.exports = router;
