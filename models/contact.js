"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            max: [30, "Title too long"]
        },
        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        phone: {
            type: String,
        },
        message: {
            type: String,
            required: true
        },
        response: {
            type: String
        },
        shortMessage: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Contact", contactSchema);