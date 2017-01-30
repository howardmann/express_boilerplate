# EXPRESS-BOILERPLATE

## Overview
An Express.js boilerplate template for building a CRUD app with SQL database.

Designed following Rails best practices but with lower overhead.

Boilerplate app comes with a User and Post model (with a has many and belongs to association) with full CRUD template for User and REST API template for Post.

Includes unit and integration tests for Post API, User static CRUD and integration with SQL database. Testing frameworks include mocha, chai, chai-http(for server reqests) and cheerio(for jQuery HTML selection)

## Features and npm packages
- Express generator for boilerplate structure
- node-sass-middleware for sass compiler (includes my simple CSS library with 12-col grid system)
- express-handlebars for templating engine with layouts
- postgresql for database
- knex for SQL schema building
- objection.js for SQL ORM built on top of knex
- Models folder using objection.js for setting up associations and custom methods
- Rearrange routes directory with routes/index.js acting as routes index and individual route files referencing controllers
- Method-override for html put and delete requests
- Flash messages using connect-flash and express-session

## Installation instructions
1. Git clone the repo ```git clone [url]``` and remove origin ```git remote remove origin```
2. npm install the packages ```npm install```
3. Configure development database. If using postgresql create a new psql database in terminal and change reference (see knexfile.js for instructions)
4. Run knex database migrations ```npm run bootstrap```
5. Start server ```npm run dev```
6. Create your own database tables by rolling back knex migrations ```knex migrate:rollback``` then creating new migration ```knex migrate:make newtables```, configure knex table (see migraiton folder for exmaples or visit knex website), then migrate ```knex migrate:latest```
7. Change relevant seed files, models, routes and controllers
8. Write tests in the test folder and run mocha in terminal to test files

## Deploy to Heorku
Terminal commands
```
heroku create name_of_your_unique_app
git push heroku master
heroku addons:create heroku-postgresql:hobby-dev
heroku open
```

To find out the postgresql database details run the following terminal command which will output the dbname, host, user and password. Then in you can connect to your psql database with your favourite GUI, I prefer Postico
```
heroku pg:credentials DATABASE
=>
Connection info string:
   "dbname=[xxx] host=[xxx].compute-1.amazonaws.com port=5432 user=[xxx] password=[xxx] sslmode=require"
```

##Author and License
Howie_Burger
MIT (sharing is caring)
