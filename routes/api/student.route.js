const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {body, validationResult, check,param} = require('express-validator')
const {studentValidationRule , validate} = require('../../validation/validator')

// load student controller
const studentController = require('../../controllers/Student.controller')

// @route   GET api/student/test
// @desc    Tests student route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'student Works' }));

// @route   POST api/student
// @desc    create student route
// @access  Public
router.post('/',studentValidationRule() , validate,studentController.createStudent)

 
// @route   GET api/student:email
// @desc    get student info by email route
// @access  Public
router.get('/:email',studentController.getStudentByEmail)
// @route   upadte api/student
// @desc    update student route
// @access  Public
router.patch('/update/:student_id',validate,studentController.updateStudent)

// @route   GET api/student/:id
// @desc    get student info by id route
// @access  Public
router.get('/:id',[
    param('id').isMongoId().withMessage('not a valid mongoid')
], validate, studentController.getStudentById)

// @route   delete api/student/:id
// @desc    get student info by id route
// @access  Public
router.delete('/:id',[
    param('id').isMongoId().withMessage('not a valid mongoid')
], validate, studentController.deleteStudent)






module.exports = router;