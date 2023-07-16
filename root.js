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
    console.log('connected to the root page.')
    // console.log('method is: '+req.method)
    // if (req.method == 'GET') {
    //     console.log('is GET')
    //     next('route')
    // } else {
    //     console.log('is not GET')
    //     next()
    // }
}, (req, res, next)=>{
    print('smth')
})


router.get('/', gettingPage)
module.exports = router