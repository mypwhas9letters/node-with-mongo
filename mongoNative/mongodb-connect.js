const { MongoClient, ObjectID } = require('mongodb')

var obj = new ObjectID();
console.log(obj)

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if(err){
    return console.log("unable to connect to mongo")
  }
  console.log("connected to mongo")
  const db = client.db('TodoApp')

  // db.collection("Todos").insertOne({
  //   text: "learn mongo",
  //   completed: false
  // }, (err, result) =>{
  //   if(err){
  //     return console.log(err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })
  db.collection("Users").insertOne({
    name: "Jake",
    age: 28,
    location: "NY"
  }, (err, result) =>{
    if(err){
      return console.log(err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  client.close()
})
