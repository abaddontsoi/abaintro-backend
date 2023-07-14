const express = require('express')
const router = express.Router()

router.use((req, res, next)=>{
    console.log('new page is being visited')
    next()
})

router.get('/', (req, res)=> {
    res.send('new page')
})

router.get('/:name.:age', (req, res)=> {
    res.send(`Hi ${req.params.name}, you are ${req.params.age} years old.`)
})

module.exports = router