// ==BP: SETUP KNEX AND OBJECTION DATABASE
// Initialize knex.
var config = require('../knexfile')[process.env.NODE_ENV || "development"];
var knex = require("knex")(config);

// // =====Require Objection.js
// // Bind all Models to a knex instance. If you only have one database in your server this is all you have to do. For multi database systems, see the Model.bindKnex method.
var Model = require('objection').Model;
Model.knex(knex);
