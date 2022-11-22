
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb+srv://ankit:cachy123@cluster0.saedp.mongodb.net/";
const fs = require('fs');

// MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("user_details");
//   var query = { "_id": 1 };
//  const data =  dbo.collection("user_posts").find({}).project({_id:1}).toArray(function(err, result) {
//     if (err) throw err;


//     return result
//     db.close();
//   });

// });
//     mongodb://root:cachy@15.207.239.166:27017/?authMechanism=DEFAULT

// MONGO_USERNAME="cachy-prod-admin"
// MONGO_PASSWORD="1GB0qNB63psF3LZM"
// MONGO_AUTHDB="admin"
// MONGO_PORT=27017
// MONGO_HOST="cachy-prod-cluster.hc2ot.mongodb.net"
// MONGO_DB="user_details"
// MONGO_CONNECTION_LIMIT=100


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://cachy-prod-admin:1GB0qNB63psF3LZM@cachy-prod-cluster.hc2ot.mongodb.net/user_detail';

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("user_details");
  var query = { "_id": 1 };
 dbo.collection("user_comments").aggregate([
    {
      '$unwind': {
        'path': '$reply', 
        'includeArrayIndex': 'string', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$project': {
        '_id': {
          '$toString': '$_id'
        }, 
        'postId': 1, 
        'reply.id': 1
      }
    }
  ]).toArray(function(err, result) {
    if (err) throw err;

    let arr = result;
let finalObj = [];
console.log("The array is \n", arr);
console.log(arr.length)
if (arr.length == 189) {

    console.log("defaultConstructorArray after 10 records"  + arr);

    fs.writeFileSync(__dirname + '/db/post.json', JSON.stringify(arr));

}
// loop elements of the array 
var stateArray = arr.map(item => item._id);
console.log(stateArray);

  db.close();
});
});