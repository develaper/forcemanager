require 'faker'

FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    quote  { Faker::Movies::Lebowski.quote }
    email { Faker::Internet.email }
  end
end
