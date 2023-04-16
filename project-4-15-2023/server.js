const express = require("express")
const bodyParser = require("body-parser")
const routes = require('./routes/routes')
// const mongoose = require('mongoose')

const app = new express()
app.use('/', routes)
// mongoose.connect('mongodb://localhost:27017')
// console.log('db connected')
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('app is running on port 3000')
})