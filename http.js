const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

app.get('/new', (req, res)=>{
  res.send('you start a new page!');
  console.log('getting new page');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})