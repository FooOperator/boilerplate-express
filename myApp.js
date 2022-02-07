var express = require('express');
var path = require('path')
var app = express();
var http = require('http')

const pathToIndexHTML = path.resolve(__dirname, 'views', 'index.html')

function logger_get(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
}

app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(pathToIndexHTML)
})

app.use('/json', logger_get)

app.get('/json', (req, res) => {
  const messageValue = "Hello json"
  const data = { "message": process.env['MESSAGE_STYLE'] === 'uppercase' ? messageValue.toUpperCase() : messageValue }
  res.json(data)
})


const mySecret = process.env['MESSAGE_STYLE']




























module.exports = app;
