var express = require('express')
var bodyParser = require('body-parser')
var {ObjectId} = require('mongodb')

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

app.get("/todos", (req, res) => {
  Todo.find().then((todos)=>{
    res.send({todos})
  }, (e) => {
    res.status(400).send(e)
  })
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id
  if(!ObjectId.isValid(id)){
    return res.status(404).send()
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send()
    }
    res.send({todo})
  }).catch((e)=>{
    res.status(400).send()
  })
})


app.listen(3000, () => {
  console.log("started on 3000")
})

module.exports = {app}
