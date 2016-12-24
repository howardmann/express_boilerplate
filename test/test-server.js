var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app.js');
var should = chai.should();
var expect = chai.expect;

var config = require('../knexfile')[process.env.NODE_ENV || "development"];
var knex = require("knex")(config);

chai.use(chaiHttp);

describe('Posts', function() {

  // Before each test we rollback the migrations and run the seed file again
  beforeEach(function(done) {
    knex.migrate.rollback()
    .then(function() {
      knex.migrate.latest()
      .then(function() {
        return knex.seed.run()
        .then(function() {
          done();
        });
      });
    });
  });

  it('should list ALL posts on /posts GET', function(done){
    chai.request(app)
      .get('/posts')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.length(8);
        res.body[0].should.have.property('description');
        res.body[0].description.should.equal('I love that amazing food');
        done();
      });
  });

  it('should list a SINGLE post on /post/:id GET', function(done){
    chai.request(app)
      .get('/posts/7')
      .end(function(err, res){
        // For illustartion purposes different style using expect. Should and expect are both fine
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('description');
        expect(res.body.description).to.equal('I am the boss');
        // Add associations for post belongs to user
        expect(res.body).to.have.property('user');
        expect(res.body.user).to.be.a('object');
        expect(res.body.user).to.have.property('name');
        expect(res.body.user.name).to.equal('howie mann');
        expect(res.body.user).to.have.property('email');
        expect(res.body.user.email).to.equal('howie@email.com');
        done();
      });
  });

  it('should add a SINGLE post on /posts POST', function(done){
    chai.request(app)
      .post('/posts')
      .send({
        description: 'This is a new post',
        user_id: 5
      })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('description');
        res.body.description.should.equal('This is a new post');
        res.body.should.have.property('user');
        res.body.user.should.be.a('object');
        res.body.user.should.have.property('name');
        res.body.user.name.should.equal('howie mann');
        done();
      });
  });

  it('should update a SINGLE post on /posts/:id PUT', function(done){
    chai.request(app)
      .put('/posts/1')
      .send({
        description: 'I love gravy'
      })
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('description');
        res.body.description.should.equal('I love gravy');
        done();
      });
  });

  it('should delete a SINGLE post on /posts/:id DELETE', function(done){
    chai.request(app)
      .delete('/posts/5')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('description');
        res.body.description.should.equal('Cheese is good on anything');
        chai.request(app)
          .get('/posts')
          .end(function(err, res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body.length.should.equal(7);
            done();
          });
      });
  });

});
