const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {sclassValidationRule,deleteSClassvalidationRule, validate} = require('../../validation/validator')


// load sClass controller
const SClassController = require('../../controllers/SClass.controller')
// load studenf controller
const StudentController = require('../../controllers/Student.controller')
const {body, validationResult, check,param} = require('express-validator')


// @route   GET api/sclass/test
// @desc    Tests sclass route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'SClass Works' }));

// @route   POST api/sclass/test
// @desc    create sclass route
// @access  Public
router.post('/:student_id',sclassValidationRule(),validate,SClassController.createSClass)


// @route   POST api/sclass/test
// @desc    update sclass route
// @access  Public
router.patch('/update/:student_id',validate,SClassController.updateSClass)
 


// @route   get api/sclass/test
// @desc    read subject sclass route
// @access  Public
router.get('/:subject',SClassController.getSClassBySubject)

// @route   get api/sclass/test
// @desc    read subjec student sclass route
// @access  Public
router.get('/getstudent/:student_id' ,[
    param('student_id','student id is required').isMongoId().withMessage('not a valid mongoid'),
    
],validate,SClassController.getStudent )

// @route   delete api/sclass/test
// @desc    delete sclass route
// @access  Public
router.delete('/:class_id/:student_id',deleteSClassvalidationRule,validate ,SClassController.deleteSClass)

   





module.exports = router