const express = require("express");
const router = express.Router();

const auth = require("../config/auth");
const UserController = require("../controller/userController");
const taskController = require("../controller/taskController");
const ContactController = require("../controller/contactusController");

//login
router.post("/user_login", UserController.userLogin);
router.post("/signup", UserController.Registration);
router.post("/getEmployeeFromTechnology", UserController.getEmployeeFromTechnology);
router.post("/detail/Employee", UserController.getEmployee);

//product
router.post("/add/task", taskController.AddTask);
router.post("/detail/TaskDetailFromEmployeeId", taskController.TaskDetailFromEmployeeId);
router.post("/update/taskStatus", taskController.updateTaskStatus);

// router.post("/update/serviceStatus", ProductController.updateDetail);

router.post("/add/contactus", ContactController.ContactUs);

module.exports = router;
