// Uses ExpressJS
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var proverbs = require('./proverbs')
var app = express()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/hello', function(req, res) {
  res.send('Hello World')
})

app.get('/jae', function(req, res) {
  res.send('Hello Jae')
})

app.get('/proverbs', function(req, res) {
  res.json(proverbs[Math.floor(Math.random() * proverbs.length)])
})

app.get('/query', function(req, res) {
  console.log('Query String Data', req.query)
  res.json(req.query)
})

app.post('/post', function(req, res) {
  console.log('Posted Data', req.body)
  res.json(req.body)
})

app.listen(3001, function() {
  console.log('Server running on localhost:3001')
})
