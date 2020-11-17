const mongoose = require("mongoose"),
    Style = require("./models/style"),
    Blog = require("./models/blog");

    mongoose.connect(
        "mongodb+srv://mis5050db:mountain420@clustermis5050.sykse.mongodb.net/mustacchio?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    mongoose.Promise = global.Promise;

    // Style.create({

    //     title: "",
    //     imageURL: "",
    //     description: "",

    //    })
    //     .then(style => console.log(style))
    //     .catch(error => console.log(error.message));

    // Blog.create({

    //     title: "The Mustache Brothers",
    //     summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis. Adipiscing commodo elit at imperdiet dui accumsan. In hendrerit gravida rutrum quisque non. Risus ultricies tristique nulla aliquet enim tortor. Eget nulla facilisi etiam dignissim diam. Purus ut faucibus pulvinar elementum integer. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Morbi quis commodo odio aenean sed adipiscing. Sapien faucibus et molestie ac feugiat. Ipsum dolor sit amet consectetur adipiscing. Odio euismod lacinia at quis risus sed vulputate odio ut. Arcu cursus euismod quis viverra nibh cras. Ut diam quam nulla porttitor. Mauris pellentesque pulvinar pellentesque habitant. Lacus vestibulum sed arcu non odio euismod lacinia at. Mi ipsum faucibus vitae aliquet nec. Et tortor consequat id porta.",
    //     imageURL: "/images/mustache-brothers.jpg",
    //     datePosted: "2020-10-23"

    // })
    // .then(style => console.log(style))
    // .catch(error => console.log(error.message));