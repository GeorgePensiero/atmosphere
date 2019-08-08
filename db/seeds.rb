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

andy = User.create!(username:"Not Andy Samberg", password: "hunter2")
b = User.create!(username:"Ant Pensi", password: "hunter2")
c = User.create!(username:"Liana Hotte", password: "hunter2")
d = User.create!(username:"George Pensiero", password: "hunter2")
e = User.create!(username: "Fox Mcloud", password: "hunter2")
f = User.create!(username: "Spore Frog", password: "hunter2")
g = User.create!(username: "Rich Sheik", password: "hunter2")
h = User.create!(username: "John Bellamy", password: "hunter2")
i = User.create!(username: "Fantasic Mr. Ram", password: "hunter2")
j = User.create!(username: "Justin Anderson", password: "hunter2")
k = User.create!(username: "Tim Mckenna", password: "hunter2")
l = User.create!(username: "Jeff Riley", password: "hunter2")
m = User.create!(username: "Ken O' Brien", password: "hunter2")
n = User.create!(username: "Joe Namath", password: "hunter2")
o = User.create!(username: "Curtis Martin", password: "hunter2")
p = User.create!(username: "Patrick Ewing", password: "hunter2")
q = User.create!(username: "Ben Jangles", password: "hunter2")
r = User.create!(username: "Maroni Lucena", password: "hunter2")
s = User.create!(username: "Kent Clark", password: "hunter2")
t = User.create!(username: "Donkey Kong", password: "hunter2")
story1 = Story.create!(title: "How do i tell my gf im not andy samberg", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: andy.id)
file = open('https://atmosphere-aa-seeds.s3.amazonaws.com/andysamberg.png')
story1.photo.attach(io: file, filename: 'olympics.png')
story2 = Story.create!(title: "10 reasons psyduck is the best", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: andy.id)
file2 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/psyduck.jpeg')
story2.photo.attach(io: file2, filename: 'psyduck.png')
story3 = Story.create!(title: "Porkchop sandwiches and why they are bad for you", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: d.id)
file3 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/iguana.jpeg')
story3.photo.attach(io: file3, filename: 'iguana.png')
story4 = Story.create!(title: "Taking pictures of cacti", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: b.id)
file4 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/cactus.jpeg')
story4.photo.attach(io: file4, filename: 'cactus.jpg')
story5 = Story.create!(title: "Balloon smART: The do's and dont's of the magic industry", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: c.id)
file5 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/magicians_alliance.png')
story5.photo.attach(io: file5, filename: 'magiciansalliance.jpg')
story6 = Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: d.id)
file6 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/burningapartment.jpeg')
story6.photo.attach(io: file6, filename: 'burningapartment.jpeg')
story7 = Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: d.id)
file7 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/levitate.jpeg')
story7.photo.attach(io: file7, filename: 'levitate.jpeg')
story8 = Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: e.id)
file8 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/doglick.jpeg')
story8.photo.attach(io: file8, filename: 'doglick.jpeg')
story9 = Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: e.id)
story10 = Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: f.id)
story11 = Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: f.id)
story12 = Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: g.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: g.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: h.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: h.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: h.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: i.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: i.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: j.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: j.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: k.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: k.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: l.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: l.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: m.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: m.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: n.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: n.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: o.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: o.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: p.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: p.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: q.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: q.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: r.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: r.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: s.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: s.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: t.id)
Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: t.id)

