const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')

const app = new express()
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('app is running on port 3000')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/home.html"))
})

app.get('/about', (req, res) => {
    res.send('About us Page')
})

app.get('/article', (req, res) => {
    res.json([{
        title: 'MERN Stack',
        description: 'Article of MERN Stack',
        keywords: 'MEAN, React, NODE, Mongodb, Express'
    }, {
        title: 'MERN Stack',
        description: 'Article of MERN Stack',
        keywords: 'MEAN, React, NODE, Mongodb, Express'
    }])
})

app.post('/api', (req, res) => {
    console.log(req.body.title)
    res.send('Request Submitted Successfully')
})