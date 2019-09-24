const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EndpointSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Endpoint = mongoose.model(
  "endpoint",
  EndpointSchema,
  "endpoints"
);
