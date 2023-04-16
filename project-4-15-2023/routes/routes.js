const express = require("express")
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"))
})

router.get('/about', (req, res) => {
    res.send('About us Page')
})

router.get('/article', (req, res) => {
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

router.post('/api', (req, res) => {
    console.log(req.body.title)
    res.send('Request Submitted Successfully')
})

module.exports = router