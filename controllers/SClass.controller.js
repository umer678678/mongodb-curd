const sclassServices = require('../services/sclass.service')

//create user
const createSClass = (req, res) => {
    const sclassFields = {}
     sclassFields.student = req.params.student_id
    if(req.body.subject) sclassFields.subject = req.body.subject
    if(req.body.teacherName) sclassFields.teacherName = req.body.teacherName
    if(req.body.time) sclassFields.time = req.body.time
    if(req.body.duration) sclassFields.duration = req.body.duration
     sclassServices.createSClass(sclassFields)
     .then((sclass)=>{
         res.status(201).json(sclass)
     }).catch((error)=>{
         console.log('Some error occured while creating class', error)
         res.status(400).send({
             msg:'some error occur'
         })
     })
 
}
const updateSClass = (req, res) => {
    const sclassFields = {}
     sclassFields.student = req.params.student_id
    if(req.body.subject) sclassFields.subject = req.body.subject
    if(req.body.teacherName) sclassFields.teacherName = req.body.teacherName
    if(req.body.time) sclassFields.time = req.body.time
    if(req.body.duration) sclassFields.duration = req.body.duration
     sclassServices.update(req.params.student_id,sclassFields).then(sclass => res.json(sclass))
    .catch((error)=>{
         console.log('Some error occured while creating student')
         res.status(400).send({
             msg:'some error occur'
         })
     })
 
}

const getSClassBySubject =  (req, res) => {
    const subject = req.params.subject
    sclassServices.findBySubject(subject)
    .populate('student',['name', 'email'])
    .then((sclass) =>{
        res.status(200).json(sclass)
    }).catch((err)=> {
        res.status(400).send({
            msg: 'error'
        })
    })
}
const getStudent = (req, res) =>{
    // const errors = validationResult(req)
    // if(!errors.isEmpty()){
    //    // console.log(errors)
    //     return res.status(400).json({errors: errors.array()})
    // }
    //const subject = req.params.subject
    const student_id = req.params.student_id
    sclassServices.findStudent(student_id)
    .populate('student',['name', 'email'])
    .then((sclass)=> {
        if(!sclass){
            res.json({
                error:'student not found'
            })
        }
        res.json(sclass)
    }).catch((err) => {
        res.send(err)
    })

}
const deleteSClass = (req,res) => {
    sclassServices.deleteById(req.params.class_id).then(()=>{
        StudentController.deleteStudent(req.params.student_id).then(() => {
          res.json({
              success: true
          })  
        })
    })
}

module.exports = {
    createSClass,
    getSClassBySubject,
    getStudent,
    deleteSClass,
    updateSClass
}