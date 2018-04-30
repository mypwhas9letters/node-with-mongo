const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if(err){
    return console.log("unable to connect to mongo")
  }
  console.log("connected to mongo")
  const db = client.db('TodoApp')


  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5ae2373552c336145fb09905")
  },{
    $inc: {
      age: 2
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })


  // client.close()
})
