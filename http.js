const express = require('express')
const newpage = require('./newpage.js')
const root = require('./root.js')
const morgan = require('morgan')
const app = express()
const router = express.Router()
const port = 80
const path = require('path')
const fs = require('fs')

// show current time
// router.use((req, res, next)=> {
// 	console.log(Date.now())
// 	next()
// })

// conditional routing
// router.get('/:id',
// 	(req, res, next)=>{
// 		if (req.params.id == 0) {
// 			next('route')
// 		} else {
// 			next()
// 		}
// 	}, (req, res, next) => {
// 		res.send('regular')
// 	}
// )

var logStream = fs.createWriteStream(path.join(__dirname+'access.log'), {
    flags: 'a'
})

app.use('/new', newpage)
app.use('/', root)
app.use(morgan('dev', {stream: logStream}))
app.listen(port)