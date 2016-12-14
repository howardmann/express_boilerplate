// In terminal open psql and create a new database. Then include the name of the database and your username and password in the development details below
// Run the following terminal command
// $ psql
// # CREATE DATABASE nameofyourdatabase;
// Note: remember the semicolon syntax
// # \q

// To check if database was created run psql and \l to see full list of databases

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "howardmann",
      password: '',
      database: "express_boilerplate"
    }
  }
  ,
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
}
