const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/user')

app.use(bodyParser.json())
app.use('/', usersRoutes)
const PORT = 5000 || process.env

app.listen(PORT, () => {
    console.log(`Server Runing on Port ${PORT}`)
})