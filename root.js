const express = require('express')
const router = express()

function print(text) {
    console.log(text)
}

const gettingPage = (req, res, next) => {
    res.send('you are getting page')
}

router.use('/', (req, res, next) => {
    print('connected')
    next()
})

router.get('/', gettingPage)
module.exports = router