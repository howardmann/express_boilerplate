var express = require('express');
var router = express.Router();

// Require controllers
var users = require('../controllers/users.js');
var posts = require('../controllers/posts.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-Boilerplate' });
});

// USERS CRUD SERVER-SIDE FORMAT
router
  .get('/users', users.index)
  .get('/users/new', users.new)
  .post('/users', users.create)
  .get('/users/:id', users.show)
  .get('/users/:id/edit', users.edit)
  .put('/users/:id', users.update)
  .delete('/users/:id', users.destroy);

// POSTS CRUD API FORMAT
router
  .get('/posts', posts.index)
  .post('/posts', posts.create)
  .get('/posts/:id', posts.show)
  .put('/posts/:id', posts.update)
  .delete('/posts/:id', posts.destroy);

// USER NESTED ROUTES
  router
    .get('/users/:id/posts/new', posts.newUser)
    .post('/users/:id/posts', posts.createUser);




module.exports = router;
