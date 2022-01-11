const {body, validationResult, check,param} = require('express-validator')

const studentValidationRule = () => {
    return [
        check('email','email field is required').notEmpty().trim().isEmail().withMessage('Email must be valid email').normalizeEmail().toLowerCase().exists(),
        check('name','name is required').notEmpty().trim().isLength({ min: 3}).withMessage('name must be 3 char long'),
        check('dateOfBirth','date of birth is required').notEmpty().isDate().withMessage('must be valid date'),
        body('facebookProfile').isURL().withMessage('Facebook url must be valid')
    ]
}
// const validate = (req,res)=> {
//     const errors = validationResult(req)
//     if(!errors.isEmpty()){
//         //console.log(errors)
//         return res.status(400).json({errors: errors.array()})
//     }
// }

const sclassValidationRule = () => {
    return [
        param('student_id','student_id is required').isMongoId().withMessage('not a valid mongoid'),
    
        check('subject','subject field is required').notEmpty().trim().isLength({min:2}).withMessage('subject must be valid '),
        check('teacherName','teacherName is required').notEmpty().trim().isLength({ min: 3}).withMessage('name must be 3 char long'),
        //check('time','time is required').notEmpty(),
        check('duration','duration is required').notEmpty().isNumeric().withMessage('duration must be valid number')
    ]
}

const deleteSClassvalidationRule = () => {
    return [
        param('class_id').isMongoId().withMessage('not a valid mongoid'),
        param('student_id').isMongoId().withMessage('not a valid mongoid')
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
}


module.exports ={
    studentValidationRule,
    validate,
    sclassValidationRule,
    deleteSClassvalidationRule
}