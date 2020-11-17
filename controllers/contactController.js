"use strict";

const Contact = require("../models/contact"),
    getContactParams = body => {
        return {
            name: body.name,
            address: body.address,
            email: body.email,
            phone: body.phone,
            message: body.message,
            response: body.response
        };
    };

module.exports = {
    new: (req, res) => {
        res.render("contact/contact");
      },

    create: (req, res, next) => {
        let contactParams = getContactParams(req.body);
        Contact.create(contactParams)
          .then(contact => {
            res.locals.redirect = "/contact/new";
            res.locals.contact = contact;
            next();
          })
          .catch(error => {
            console.log("Error saving new contact!");
            next(error);
          });
      },

      redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
      },

      contact: (req, res, next) => {
        Contact.find()
          .then(contacts => {
            res.locals.contacts = contacts;
            next();
          })
          .catch(error => {
            console.log("ERROR");
            next(error);
          });
      },

      contactView: (req, res) => {
        res.render("contact/contact-list");
      },
    
      edit: (req, res, next) => {
        let contactId = req.params.id;
        Contact.findById(contactId)
          .then(contact => {
            res.render("contact/contact-respond", {
              contact: contact
            });
          })
          .catch(error => {
            console.log(`ERROR`);
            next(error);
          });
      },

      update: (req, res, next) => {
        let contactId = req.params.id,
          contactParams = getContactParams(req.body);
    
        Contact.findByIdAndUpdate(contactId, {
          $set: contactParams
        })
          .then(contact => {
            res.locals.redirect = "/contact-list";
            res.locals.contact = contact;
            next();
          })
          .catch(error => {
            console.log(`ERROR`);
            next(error);
          });
      },    
};