var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/Todo')
var {User} = require('./models/User')

var app = express()

app.use(bodyParser.json())
//middleware. Write your own function or access a library

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })
  todo.save().then((doc)=>{
    res.send(doc)
  }, (e) => {
    res.status(400).send(e)
  })
})

app.listen(3000, () => {
  console.log("started on 3000")
})
