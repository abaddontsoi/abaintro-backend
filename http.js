const express = require('express')
const app = express()
const port = 80
const routerHub = require('./routers/exporter')

app.set('view engine', 'ejs')

app.use('/delete', routerHub.deleteP)
app.use('/add', routerHub.add)
app.use('/all', routerHub.listAll)
app.use('/success', routerHub.success)
app.use('/err', routerHub.err)
app.use('/', routerHub.index)
app.listen(port)