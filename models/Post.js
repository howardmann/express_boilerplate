var Model = require('objection').Model;

// Extends Model constructor.
function Post() {
  Model.apply(this, arguments);
}

Model.extend(Post);
module.exports = Post;
// Table name is the only required property;
Post.tableName = 'posts';

// This object defines the relations to other models
Post.relationMappings = {
  user: {
    relation: Model.BelongsToOneRelation,
    // We use __dirname to avoid require loops
    modelClass: __dirname + '/User',
    join: {
      from: 'posts.user_id',
      to: 'users.id'
    }
  }
};
