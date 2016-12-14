var config = require("../knexfile")[process.env.NODE_ENV || "development"];
var knex = require("knex")(config);

// =====Require Objection.js
// Bind all Models to a knex instance. If you only have one database in your server this is all you have to do. For multi database systems, see the Model.bindKnex method.
var objection = require('objection');
var Model = objection.Model;
Model.knex(knex);

module.exports = Model;


// // Require bookshelf
// var Bookshelf = require('bookshelf')(knex);
// var cascadeDelete = require('bookshelf-cascade-delete');
// Bookshelf.plugin('registry');
// Bookshelf.plugin(cascadeDelete);
//
// module.exports = Bookshelf;
