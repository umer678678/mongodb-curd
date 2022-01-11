const express = require('express')
const mongoose = require('mongoose')
//const users = require('./routes/api/users')
const studentRouter = require('./routes/api/student.route')
const sclassRouter = require('./routes/api/sclass.route')
const userRouter = require('./routes/api/User.Route')
const bodyParser = require('body-parser')


const app = express()
// body parser middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//db config
const db = require('./config/keys').mongoURI

//connect to mongodb
mongoose.connect(db,{useNewUrlParser:true,
    useUnifiedTopology: true,
    }).then(()=>{
    console.log('connect successfully')
}).catch(err =>{
    console.log(err)
})




//use route
//app.use('/api/users', users)
app.use('/api/students',studentRouter)
app.use('/api/sclass',sclassRouter)
app.use('/api/users/',userRouter)
const port = process.env.PORT || 3000


app.listen(port,()=> console.log(`server is up and running on port ${port}`))