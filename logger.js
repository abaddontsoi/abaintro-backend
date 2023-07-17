const fs = require('fs')
const path = require('path')
var morgan = require('morgan')


var loggingStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})



module.exports = morgan('combined', {stream: loggingStream})