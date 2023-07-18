const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    // res.send('This is index page')
    res.render('../views/index')
})

module.exports = router