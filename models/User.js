var Model = require('objection').Model;
var Post = require('./Post');

// Extends Model constructor to User.
function User() {
  Model.apply(this, arguments);
}

Model.extend(User);
module.exports = User;

// Table name is the only required property;
User.tableName = 'users';

// This object defines the relations to other models
// relationMappings
User.relationMappings = {
  posts: {
    relation: Model.HasManyRelation,
    // The related model. This can be either a Model subclass constructor or an
    // absolute file path to a module that exports one.
    modelClass: Post,
    join: {
      from: 'users.id',
      to: 'posts.user_id'
    }
  },
};
