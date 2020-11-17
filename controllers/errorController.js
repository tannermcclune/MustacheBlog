"use strict";

const httpStatus = require("http-status-codes");
const fs = require("fs");
const myFile = "./errorLog.txt";


// Create async file
const createFile = (fileName, content, callback) => {
    fs.writeFile(fileName, content, () => {
        callback("log has been created!");
    });
};

//append file function
const appendFile = (fileName, content, callback) => {
    fs.appendFile(fileName, content, () => {
        callback("log has been appended!");
    });
};

//call createFile function to make a new file with contents
createFile(myFile, "", (result) => {
    console.log(result);
});

module.exports = {
  logErrors: (error, req, res, next) => {
    appendFile(myFile, `\nerror occured: ${error.stack}`, (result) => {});
    next(error);
  },

  pageNotFoundError: (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    appendFile(myFile, `\nerror occured: ${errorCode}`, (result) => {});
    res.render("error");
  },

  internalServerError: (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    appendFile(myFile, `\nerror occured: ${errorCode}`, (result) => {});
    res.status(errorCode);
    res.render("error");;
  }
};
