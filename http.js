const express = require('express')
const newpage = require('./newpage.js')
const rootpage = require('./root.js')
const app = express()
const router = express.Router()
const port = 80


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

app.use('/new', newpage)
app.use('/', rootpage)
app.listen(port)