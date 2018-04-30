const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if(err){
    return console.log("unable to connect to mongo")
  }
  console.log("connected to mongo")
  const db = client.db('TodoApp')


  // db.collection("Todos").deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result)
  // })
  // db.collection("Todos").deleteOne({text: "eat lunch"}).then((result) => {
  //   console.log(result)
  // })
  // db.collection("Todos").findOneAndDeleted({text: "eat lunch"}).then((result) => {
  //   console.log(result)
  // })

  // client.close()
})
