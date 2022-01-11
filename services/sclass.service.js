//const SClassModel = require('../models/SClass.model')
const SClass = require('../models/SClass.model')
const { findByIdAndRemove } = require('../models/Student.model')
//const StudentModel = require('../models/Student.model')

// create sclass
const createSClass = (sclass)=> {
    const sclassModel = new SClass(sclass)
    return sclassModel.save()
}
const update = (student_id,sclassFields) => {
    const updatedFields = SClass.findOneAndUpdate(
        {s_id: student_id},
        { $set: sclassFields },
        { new: true }
    )
    return updatedFields
}

const findBySubject = (subject) => SClass.findOne({subject})
const deleteById = (id) => SClass.findByIdAndRemove(id)
const findStudent = (id) => SClass.findOne({id})
module.exports = {
    createSClass,
    findBySubject,
    deleteById,
    findStudent,
    update
}