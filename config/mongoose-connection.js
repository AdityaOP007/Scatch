const mongoose = require('mongoose');

mongoose
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(function () {
    console.log("connected to database successfully");
  })
  .catch(function (err) {
    console.log("error connecting to database", err);
  });

  module.exports = mongoose.connection;