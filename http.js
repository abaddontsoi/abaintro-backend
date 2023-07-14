const express = require('express')
const newpage = require('./newpage.js')
const app = express()
const router = express.Router()
const port = 80

// app.get('/', (req, res, next) => {
//   	res.send('Hello World!\n')
// 	next()
// }, (req, res)=>{
// 	console.log(req['url'])
// })

// app.get('/new', (req, res)=>{
//   	res.send('you start a new page!');
//   	console.log('getting new page');
// })

// app.listen(port, () => {
//   	console.log(`Example app listening on port ${port}`)
// })

// show current time
// router.use((req, res, next)=> {
// 	console.log(Date.now())
// 	next()
// })

// show request url and method
// router.use('/:id',
// 	(req, res, next) => {
// 		console.log('url: ', req.originalUrl)
// 		console.log('method: ', req.method)
// 		// res.send('aaa')
// 		next()
// 	}
// )

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
router.get('/:id', (req, res, next)=>{
	res.send('special')
	next()
})

// app.use('/', router)
app.use('/new', newpage)
app.listen(port)