const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const cors =  require('cors')

app.use(cors())

const sequelize = require('./util/database');

app.use(bodyParser.json());
const userRoute = require('./routes/user');

const User = require('./models/user')
const Message = require('./models/message')
app.use(userRoute)
const messageRoute = require('./routes/message')
app.use(messageRoute)

User.hasMany(Message)
Message.belongsTo(User)
sequelize.sync(
    
)
.then(user=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})