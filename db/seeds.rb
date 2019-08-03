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

User.create!(username:"HomerSimpson@nuclearplant.jpg", password: "123456")
User.create!(username:"GobBluth@magicians.com", password: "123456")
User.create!(username:"George@pensiero.com", password: "123456")
User.create!(username:"demo@demo.com", password: "password")

story1 = Story.create!(title: "But Margeee, the chili", body: "heyheyhey", author_id: User.first.id)
file = open('https://atmosphere-aa-seeds.s3.amazonaws.com/homer.jpg')
story1.photo.attach(io: file, filename: 'homer.jpg')
story2 = Story.create!(title: "Yoda's magic tricks explained by an expert magician", body: "may the force be with you", author_id: User.second.id)
file2 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/magicians_alliance.png')
story2.photo.attach(io: file2, filename: 'magicians_alliance.png')
story3 = Story.create!(title: "Hey Dawg", body: "schwifty", author_id: User.third.id)
file3 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/schwifty.jpeg')
story3.photo.attach(file3)
Story.create!(title: "This is the demo story", body: "demoman gotta demo", author_id: User.fourth.id)
Story.create!(title: "Got your nose, got your wallet", body: "doh", author_id: User.first.id)
Story.create!(title: "I've made a terrible mistake", body: "I've made a terrible mistake", author_id: User.second.id)
Story.create!(title: "How i learned to make chicken noises", body: "kawkawkawkawkaw", author_id: User.second.id)