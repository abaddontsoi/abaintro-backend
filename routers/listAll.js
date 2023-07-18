const express = require('express')
const router = express.Router()
const db = require('../db/test.json')


router.get('/', (req, res)=>{
    res.render('../views/listAll', {
        blocks: db.blocks,
        num: db.blocks.length
    })
})

module.exports = router