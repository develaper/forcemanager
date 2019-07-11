# README

Basic RoR+React & postgresql App that allows to add, edit and remove users information.
* You can find a live demo here: https://ancient-mesa-89743.herokuapp.com/

* Ruby version: 2.6.3

* Rails version: 5.2.1

* System dependencies: There are no extraordinary dependencies and it should run out of the box.

* Cloning, Installing and Configuration: After cloning the repo in your local machine cd into your new folder, probably named forcemanager.
Here you can use docker by running : $ docker-compose up --build
  * If you are not going to use docker some changes must be done in the database configuration.

* Database creation : docker-compose run --rm web rails db:create

* Database initialization : docker-compose run --rm web rails db:migrate  db:seed

* How to run the test suite:
    * Remember to migrate the test database before running the test suite by executing: $ docker-compose run --rm db:migrate RAILS_ENV=test
    * And now you can run: $ docker-compose run --rm web rake

* You can find a coverage report in coverage/index.html

* Deployment (to Heroku) instructions
  * Rename to Dockerfile and use Dockerfile.heroku
  * $ heroku create
  * $ heroku container:login
  * $ heroku container:push web
  * $ heroku container:release web
  * Next, since Heroku doesn’t assume our application type (since it’s just a Docker image), we need to setup a postgres database manually using: $ heroku addons:create heroku-postgresql:hobby-dev
  * $ heroku config:set RAILS_ENV=production SECRET_KEY_BASE=supersecret RAILS_LOG_TO_STDOUT=true
  * $ heroku run RAILS_ENV=production bundle exec rake assets:precompile
  * And now we only need to create, migrate and populate our new brand data base running: $ heroku run rails db:create db:seed db:migrate
