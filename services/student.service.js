const Student = require('../models/Student.model')

const create = (student) => {
    const studentModel = new Student(student)
    return studentModel.save()
}
const findByEmail = (email) => Student.findOne({email})
const findUsingId = (id) => Student.findById(id)
const findOneStudent = (id) => Student.findOne(id)
const deleteById = (id) => Student.findOneAndRemove(id) 
const update = (student_id,studentFields) => {
    const updatedFields = Student.findOneAndUpdate(
        {s_id: student_id},
        { $set: studentFields },
        { new: true }
    )
    return updatedFields
}
module.exports = {
    create,
    findByEmail,
    findUsingId,
    deleteById,
    update,
    findOneStudent
}