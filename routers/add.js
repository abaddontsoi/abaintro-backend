const express = require('express')
const bodyParser = require('body-parser')
var validation = require('./add/validate')
const fs = require('fs')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('../views/add')
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))
// router.use(express.static('public'))

router.post('/reqAdd', (req, res, next)=>{
    // conditional routing by data validation
    if (validation(req.body.Keyword, req.body.Definition)) {
        // ok
        var db = require('../db/test.json')
        db.blocks.push(req.body)
        var data = JSON.stringify(db, null, 4)
        fs.writeFile(__dirname+'/../db/test.json', data, (err) => {
            if (err) throw err;
        })
        res.redirect('/addok')
    }
    // failed
    else {
        res.redirect('/err')
    }
    console.log(req.body)
})


module.exports = router