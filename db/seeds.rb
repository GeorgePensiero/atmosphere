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

a = User.create!(username:"HomerSimpson@nuclearplant.jpg", password: "hunter2")
b = User.create!(username:"GobBluth@magicians.com", password: "hunter2")
c = User.create!(username:"George@pensiero.com", password: "hunter2")
d = User.create!(username:"demo@demo.com", password: "hunter2")
e = User.create!(username:Faker::Internet.email, password: "hunter2")
f = User.create!(username:Faker::Internet.email, password: "hunter2")
g = User.create!(username:Faker::Internet.email, password: "hunter2")
h = User.create!(username:Faker::Internet.email, password: "hunter2")
i = User.create!(username:Faker::Internet.email, password: "hunter2")
j = User.create!(username:Faker::Internet.email, password: "hunter2")
k = User.create!(username:Faker::Internet.email, password: "hunter2")
l = User.create!(username:Faker::Internet.email, password: "hunter2")
m = User.create!(username:Faker::Internet.email, password: "hunter2")
n = User.create!(username:Faker::Internet.email, password: "hunter2")
o = User.create!(username:Faker::Internet.email, password: "hunter2")
p = User.create!(username:Faker::Internet.email, password: "hunter2")
q = User.create!(username:Faker::Internet.email, password: "hunter2")
r = User.create!(username:Faker::Internet.email, password: "hunter2")
s = User.create!(username:Faker::Internet.email, password: "hunter2")
t = User.create!(username:Faker::Internet.email, password: "hunter2")
story1 = Story.create!(title: "Ice Cream Party!", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: d.id)
file = open('https://atmosphere-aa-seeds.s3.amazonaws.com/doubleicecream.png')
story1.photo.attach(io: file, filename: 'teafarm.png')
story2 = Story.create!(title: "ljk;fsdjaljsdalk;fjl;dsajfsadl;", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: d.id)
file2 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/cherrybonnet.png')
story2.photo.attach(io: file2, filename: 'magicians_alliance.png')
story3 = Story.create!(title: "f;lkdsajfl;kaewjgkl;ewjfkl;djsglkeaw", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: d.id)
file3 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/gelato.jpg')
story3.photo.attach(io: file3, filename: 'schwifty.jpg')
story4 = Story.create!(title: "sdfajkjfl;kewjgl;erawjgkl;erajlg;", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: b.id)
file4 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/jimmies.jpg')
story4.photo.attach(io: file4, filename: 'demoman.jpg')
story5 = Story.create!(title: "Got your nose, got your wallet, a tale of growing up in Soviet Russia", body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: c.id)
file5 = open('https://atmosphere-aa-seeds.s3.amazonaws.com/psyduck.jpeg')
story5.photo.attach(io: file5, filename: 'psyduck.jpg')
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: d.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: d.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: e.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: e.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: f.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: f.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: g.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: g.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: h.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: h.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: h.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: i.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: i.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: j.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: j.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: k.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: k.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: l.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: l.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: m.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: m.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: n.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: n.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: o.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: o.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: p.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: p.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: q.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: q.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: r.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: r.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: s.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: s.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: t.id)
# Story.create!(title: Faker::Quote.famous_last_words, body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false), author_id: t.id)

