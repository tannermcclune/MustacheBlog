"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

const styleSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            max: [30, "Title too long"]
        },
        imageURL: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model("Style", styleSchema);