"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            max: [30, "Title too long"]
        },
        summary: {
            type: String,
            required: true,
            max: [250, "Summary too long please shorten!"]
        },
        content: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
            required: true
        },
        datePosted: {
            type: Date,
            required: true
        }
    }
);

module.exports = mongoose.model("Blog", blogSchema);