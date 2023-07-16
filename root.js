const express = require('express')
const router = express()

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

router.use('/', (req, res, next) => {
    print('connected')
    next('route')
})

router.get('/', gettingPage)

module.exports = router