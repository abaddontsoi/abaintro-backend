const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const router = express()

// to get body data in request
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.post('/:index', (req, res, next)=> {
    // determine whether the confirm box is checked
    if (req.body.confirm == 'on') {
        var db = require('../db/test.json')
        db.blocks.splice(req.params.index, 1)    
        var data = JSON.stringify(db, null, 4)
        fs.writeFile(__dirname+'/../db/test.json', data, (err) => {
            if (err) throw err;
        })
        res.redirect('/success')
    } else {
        res.redirect('/err')
    }
})

module.exports = router