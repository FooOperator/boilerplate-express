var express = require('express');
var path = require('path')
var app = express();
var http = require('http')
var bodyParser = require('body-parser')
var {name_post, json_get, echo_get, name_get, currentTime_get, sendTime_get, currentTime_get} = require('./utils.js')
const pathToIndexHTML = path.resolve(__dirname, 'views', 'index.html')

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(pathToIndexHTML)
})

app.get("/name", name_get);
app.post('/name', name_post)
app.get('/now', currentTime_get, sendTime_get)
app.get('/:word/echo', echo_get)

app.use('/json', json_get)

app.get('/json', (req, res) => {
  const messageValue = "Hello json"
  const data = { "message": process.env['MESSAGE_STYLE'] === 'uppercase' ? messageValue.toUpperCase() : messageValue }
  res.json(data)
})


const mySecret = process.env['MESSAGE_STYLE']




























module.exports = app;
