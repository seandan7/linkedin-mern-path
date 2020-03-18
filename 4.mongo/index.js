var mongodb = require("mongodb");
var Hapi = require("@hapi/hapi");

var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/learning_mongo";

var server = new Hapi.Server({
  port: 8080,
  host: "localhost"
});

server.route([
  {
    method: "GET",
    path: "/",
    handler: function(request, h) {
      return "hello";
    }
  },
  // Get tour list
  {
    method: "GET",
    path: "/api/tours",
    config: { json: { space: 2 } },
    handler: function(request, h) {
      var findObj = {};

      let tours = null;
      for (var key in request.query) {
        findObj[key] - request.query[key];
      }
      collection.find(findObj).toArray(function(err, tours) {
        tours = tours;
      });
      return tours;
    }
  },
  // Add new tour
  {
    method: "POST",
    path: "/api/tours",
    handler: function(request, h) {
      return collection.insertOne(request.payload, function(err, result) {
        request.payload;
      });
    }
  },
  // Get a single tour
  {
    method: "GET",
    path: "/api/tours/{name}",
    handler: function(request, h) {
      let results = null;
      if (request.query.replace == "true") {
        request.payload.tourName = request.params.name;
        collection.replaceOne(
          {
            tourName: request.params.name
          },
          request.payload,
          function(err, results) {
            collection.findOne({ tourName: request.params.name }, function(
              err,
              results
            ) {
              results = results;
            });
          }
        );
      }
      collection.updateOne(
        {
          tourName: request.params.name
        },
        { $set: request.payload },
        function(error, results) {
          collection.findOne({ tourName: request.params.name }, function(
            err,
            results
          ) {
            results = results;
          });
        }
      );
      return results;
    }
  },
  // Update a single tour
  {
    method: "PUT",
    path: "/api/tours/{name}",
    handler: function(request, h) {
      return h.response;
    }
  },
  // Delete a single tour
  {
    method: "DELETE",
    path: "/api/tours/{name}",
    handler: function(request, h) {
      collection.deleteOne({ tourName: request.params.name }, function(
        err,
        results
      ) {
        return "204";
      });
    }
  }
]);
server.start().then(function(res, err) {
  console.log("success");
});

mongoClient.connect(
  url,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  function(err, db) {
    var db = db.db("learning_mongo");
    collection = db.collection("tours");
    console.log("Db connected");
  }
);
