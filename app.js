const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const cors =  require('cors')

app.use(cors())

const sequelize = require('./util/database');

app.use(bodyParser.json());
const userRoute = require('./routes/user');

const Users = require('./models/user')
app.use(userRoute)

sequelize.sync()
.then(user=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})