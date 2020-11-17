"use strict";

const Blog = require("../models/blog"),
    getBlogParams = body => {
        return {
            title: body.title,
            summary: body.summary,
            content: body.content,
            imageURL: body.imageURL,
            datePosted: body.datePosted
        };
    };

module.exports = {
    blog: (req, res, next) => {
        Blog.find()
            .then(blogs => {
                res.locals.blogs = blogs;
                next();
            })
            .catch(error => {
                console.log(`Cannot get staches.`);
                next(error);
            });
    },

    new: (req, res) => {
        res.render("blog/new");
      },

    blogView: (req, res) => {
        res.render("blog/blog");
    },
    show: (req, res, next) => {
        let blogId = req.params.id;
        Blog.findById(blogId)
          .then(blog => {
            res.locals.blog = blog;
            next();
          })
          .catch(error => {
            console.log(`Could not find this post`);
            next(error);
          });
      },
    
      showBlog: (req, res) => {
        res.render("blog/blog-single-post");
      },

      create: (req, res, next) => {
        let blogParams = getBlogParams(req.body);
        Blog.create(blogParams)
          .then(blog => {
            res.locals.redirect = "/blog/new";
            res.locals.blog = blog;
            next();
          })
          .catch(error => {
            console.log("Error creating new post!");
            next(error);
          });
      },

      redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
      }
};