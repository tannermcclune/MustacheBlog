"use strict";

const express = require("express"),
  layouts = require("express-ejs-layouts"),
  app = express(),
  router = express.Router(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  styleController = require("./controllers/stylesController"),
  blogController = require("./controllers/blogController"),
  contactController = require("./controllers/contactController"),
  mongoose = require("mongoose"),
  methodOverride = require("method-override"),
  db = mongoose.connection;

  mongoose.connect(
    "mongodb+srv://mis5050db:mountain420@clustermis5050.sykse.mongodb.net/mustacchio?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.set("useCreateIndex", true);

  app.set("port", process.env.PORT || 3000);
  app.set("view engine", "ejs");
  
  router.use(methodOverride("_method", {methods: ["POST", "GET"]}));
  router.use(layouts);
  router.use(express.static("public"));
  router.use(express.urlencoded({extended: false}));
  router.use(express.json());
  app.use(homeController.logRequestPaths);
  
  router.get("/", homeController.index);
  router.get("/about", homeController.about);

  // GALLERY ROUTING
  router.get("/styles", styleController.gallery, styleController.galleryView);
  router.get("/styles/:id", styleController.show, styleController.showStache);

  //BLOG ROUTING
  router.get("/blog/new", blogController.new);
  router.post("/blog/create", blogController.create, blogController.redirectView);
  router.get("/blog", blogController.blog, blogController.blogView);
  router.get("/blog/:id", blogController.show, blogController.showBlog);
  

  //CONTACT ROUTING
  router.get("/contact-list", contactController.contact, contactController.contactView);
  router.get("/contact/new", contactController.new);
  router.post("/contact/create", contactController.create, contactController.redirectView);
  router.get("/contact/:id/edit", contactController.edit);
  router.put("/contact/:id/update", contactController.update, contactController.redirectView);

  router.use(errorController.pageNotFoundError);
  router.use(errorController.internalServerError);

  app.use("/", router);

  db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
   });

  app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });
  