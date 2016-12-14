var express = require('express');
var router = express.Router();

var users = require('./users.js');
var posts = require('./posts.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-Boilerplate' });
});

// USERS CRUD
router
  .get('/users', users.index)
  .get('/users/new', users.new)
  .post('/users', users.create)
  .get('/users/:id', users.show)
  .get('/users/:id/edit', users.edit)
  .put('/users/:id', users.update)
  .delete('/users/:id', users.destroy);

// POSTS CRUD
router
  .get('/posts', posts.index)
  .get('/posts/new', posts.new)
  .post('/posts', posts.create)
  .get('/posts/:id', posts.show)
  .get('/posts/:id/edit', posts.edit)
  .put('/posts/:id', posts.update)
  .delete('/posts/:id', posts.destroy);



module.exports = router;
