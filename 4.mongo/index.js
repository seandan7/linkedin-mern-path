var { MongoClient } = require("mongodb");

var url = "mongodb://localhost:27017/learning_mongo";

var findDocuments = function(db, callback) {
  console.log(db);
  var collection = db.collection("tours");

  collection.find({ tourPackage: "Snowboard Cali" }).toArray((err, docs) => {
    console.log(docs);
    callback;
  });
};

MongoClient.connect(url, (err, db) => {
  const datahase = db.db("learning_mongo");
  // when docs found, close
  findDocuments(datahase, function() {
    db.close();
  });
});
