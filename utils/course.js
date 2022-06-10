//course callback function

const Course = require("../models/course");

const addCourse = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;
    const course = new Course({
      name,
      description,
      price,
      duration,
    });
    await Course.create(course);
    res.status(200).json({
      message: "Course added successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      message: "All courses fetched successfully",
      courses,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json({
      message: "Course fetched successfully",
      course,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        price,
        duration,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Course updated successfully",
      course,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Course deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
module.exports = {
  addCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
