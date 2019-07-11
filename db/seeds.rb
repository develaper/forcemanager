# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
3.times { User.create(name: Faker::Movies::BackToTheFuture.character, quote: Faker::Movies::BackToTheFuture.quote, email: Faker::Internet.email) }
4.times { User.create(name: Faker::GreekPhilosophers.name, quote: Faker::GreekPhilosophers.quote, email: Faker::Internet.email) }
4.times { User.create(name: Faker::Movies::StarWars.character, quote: Faker::Movies::StarWars.quote, email: Faker::Internet.email) }
4.times { User.create(name: Faker::Movies::Lebowski.character, quote: Faker::Movies::Lebowski.quote, email: Faker::Internet.email) }
