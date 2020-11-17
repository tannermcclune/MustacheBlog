"use strict";

const Style = require("../models/style"),
    getStyleParams = body => {
        return {
            title: body.title,
            imageURL: body.imageURL,
            description: body.description
        };
    };

module.exports = {
    gallery: (req, res, next) => {
        Style.find()
            .then(styles => {
                res.locals.styles = styles;
                next();
            })
            .catch(error => {
                console.log(`Cannot get staches.`);
                next(error);
            });
    },
    galleryView: (req, res) => {
        res.render("styles/gallery");
    },

    show: (req, res, next) => {
        let styleId = req.params.id;
        Style.findById(styleId)
          .then(style => {
            res.locals.style = style;
            next();
          })
          .catch(error => {
            console.log(`Could not find this style`);
            next(error);
          });
      },
    
      showStache: (req, res) => {
        res.render("styles/show-stache");
      },
};