const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// load student controller
const UserController = require('../../controllers/User.Controller')

// @route   GET api/user/test
// @desc    Tests user route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'user Works' }));

// @route   POST api/user
// @desc    create student route
// @access  Public
router.post('/',UserController.createUser)

module.exports = router