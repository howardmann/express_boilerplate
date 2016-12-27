exports.seed = function(knex, Promise) {
  // Initial seed data
  var users = [
    {email: 'john@email.com', name: 'john smith', age: 16},
    {email: 'polly@email.com', name: 'polly paddle', age: 36},
    {email: 'mack@email.com', name: 'mack cheese', age: 26},
    {email: 'molly@email.com', name: 'molly beth', age: 18},
    {email: 'howie@email.com', name: 'howie mann', age: 23, is_admin: true},
    {email: 'pete@email.com', name: 'pete jones', age: 23}
  ];

  var posts = [
    {description: 'I love that amazing food', user_id: knex('users').where({email: 'john@email.com'}).select('id')},

    {description: 'I am the best', user_id: knex('users').where({email: 'john@email.com'}).select('id')},

    {description: 'I love that amazing food', user_id: knex('users').where({email: 'polly@email.com'}).select('id')},

    {description: 'What a time to be alive I say', user_id: knex('users').where({email: 'mack@email.com'}).select('id')},

    {description: 'Cheese is good on anything', user_id: knex('users').where({email: 'mack@email.com'}).select('id')},

    {description: 'Molly rhymes with polly', user_id: knex('users').where({email: 'molly@email.com'}).select('id')},

    {description: 'I am the boss', user_id: knex('users').where({email: 'howie@email.com'}).select('id')},

    {description: 'Petey meaty haha', user_id: knex('users').where({email: 'pete@email.com'}).select('id')}

  ];

  return knex('posts').del()
    .then(function(){
      return knex('users').del()
    }).then(function(){
      return knex('users').insert(users, 'id')
    }).then(function(){
      return knex('posts').insert(posts, 'id');
    })

};
