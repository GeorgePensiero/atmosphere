# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Story.destroy_all

User.create!(username:"HomerSimpson@nuclearplant.jpg", password: "hunter2")
User.create!(username:"GobBluth@magicians.com", password: "hunter2")
User.create!(username:"George@pensiero.com", password: "hunter2")
User.create!(username:"demo@demo.com", password: "hunter2")
User.create!(username:Faker::Internet.email, password: "hunter2")
story1 = Story.create!(title: "But Margeee, the chili", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: User.first.id)
file = open('https://atmosphere-aa-seeds.s3.amazonaws.com/homer.jpg')
story1.photo.attach(io: file, filename: 'homer.jpg')
story2 = Story.create!(title: "Yoda's magic tricks explained by an expert magician", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: User.second.id)
file2 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/magicians_alliance.png')
story2.photo.attach(io: file2, filename: 'magicians_alliance.png')
story3 = Story.create!(title: "Hey Dawg", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: User.third.id)
file3 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/schwifty.jpeg')
story3.photo.attach(io: file3, filename: 'schwifty.jpg')
story4 = Story.create!(title: "This is the demo story", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: User.fourth.id)
file4 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/demoman.jpg')
story4.photo.attach(io: file4, filename: 'demoman.jpg')
story5 = Story.create!(title: "Got your nose, got your wallet", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: User.first.id)
file5 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/psyduck.jpeg')
story5.photo.attach(io: file5, filename: 'psyduck.jpg')
