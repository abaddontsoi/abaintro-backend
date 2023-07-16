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

router.get('/:id', (req, res, next) => {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route')
    // otherwise pass control to the next middleware function in this stack
    else next()
  }, (req, res, next) => {
    // render a regular page
    res.send('regular')
  })

module.exports = router