const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if(err){
    return console.log("unable to connect to mongo")
  }
  console.log("connected to mongo")
  const db = client.db('TodoApp')


  db.collection("Users").find({name: "Jake"}).toArray().then((docs) => {

    console.log(JSON.stringify(docs))
  }, (err) => {
    console.log(err)
  })



  // client.close()
})
