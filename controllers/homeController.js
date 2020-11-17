"use strict";

const fs = require("fs");
const myFile = "./requestLog.txt";


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
  index: (req, res) => {
    res.render("index");
  },
  about: (req, res) => {
    res.render("about");
  },
  logRequestPaths: (req, res, next) => {
    appendFile(myFile, `\nrequest made to: ${req.url}`, (result) => {});
    next();
  }
};