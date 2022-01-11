const studentServices = require('../services/student.service')
const {body, validationResult, check,param} = require('express-validator')

// create user 

const createStudent = (req,res) => {

    // const student = studentServices.create(objStudent)
    // return student
    studentServices.create(req.body)
    .then((student) => {
        res.status(201).send(student)
    }).catch((error) => {
        console.log('Some error occured while creating student')
        res.status(400).send({
            msg:'some error occur'
        })
    })
}
// get student by Email
const getStudentByEmail =  (req, res) =>{
    // const errors = validationResult(req)
    // if(!errors.isEmpty()){
    //    // console.log(errors)
    //     return res.status(400).json({errors: errors.array()})
    // }
    const email = req.params.email
    studentServices.findByEmail(email)
    .then((student) => {
        res.status(200).json(student)
    }).catch((err) => {
        console.log('Some error occured while creating student')
        res.status(400).send({
            msg:'some error occur'
        })
    })
}
const updateStudent = (req, res) => {
    //return studentServices.update(student_id,studentFields)
    const studentFields = {};
    if (req.body.name) studentFields.name = req.body.name;
    if (req.body.email) studentFields.email = req.body.email;
    if (req.body.dateOfBirth) studentFields.dateOfBirth = req.body.dateOfBirth;
    if (req.body.facebookProfile) studentFields.facebookProfile = req.body.facebookProfile;
    
    studentServices.update(req.params.student_id,studentFields).then(student => res.json(student));
}
// get student by id
const getStudentById = (req, res) =>{
    // const errors = validationResult(req)
    // if(!errors.isEmpty()){
    //    // console.log(errors)
    //     return res.status(400).json({errors: errors.array()})
    // }
    const sid = req.params.id
    studentServices.findUsingId(sid)
    .then((student) => {
        res.status(200).json(student)
    }).catch((err) => {
        console.log('Some error occured while  student')
        res.status(400).send({
            msg:'some error occur'
        })
    })
}

// delete student
const deleteStudent = (req,res) =>{
    // const errors = validationResult(req)
    // if(!errors.isEmpty()){
    //    // console.log(errors)
    //     return res.status(400).json({errors: errors.array()})
    // }

    studentServices.deleteById(req.params.id)
    .then(()=>{
        res.status(200).json({
            msg:'student deleted successfully'
        })
    }).catch((err) => {
        console.log('Some error occured while creating student')
        res.status(400).send(err)
    })
}


module.exports = {
    createStudent,
    getStudentByEmail,
    getStudentById,
    deleteStudent,
   updateStudent
}