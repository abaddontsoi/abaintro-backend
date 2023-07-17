const express = require('express')
const morgan = require('morgan')
const router = express()
const fs = require('fs')
const path = require('path')

function print(text) {
    console.log(text)
}

const consoleLog = (req, res, next) => {
    console.log('connected to the root page.!')
    next()
}

const greetingPage = (req, res, next) => {
    res.send('Root page')
}

const gettingPage = (req, res, next) => {
    res.send('you are getting page')
}

var logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a'
})

router.use('/', (req, res, next) => {
    print('connected')
    next()
}, morgan('combined', {stream: logStream}))

router.get('/', gettingPage)

module.exports = router