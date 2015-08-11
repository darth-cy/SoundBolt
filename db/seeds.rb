# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'Raymond', email: 'qg231@nyu.edu', password: 'Sieg0718')
User.create(username: 'Aaron', email: 'aaron@appacademy.com', password: 'aaron123')

Album.create(user_id: 2, title: 'Until', description: 'Until is a new album of Aaron.')

Track.create(user_id: 1, title: 'Until Night Runs Out', descriptoin: 'First track. Made during night.')
Track.create(user_id: 2, title: 'Until We Pass Out', description: 'Second track. Made before passing out.')
Track.create(user_id: 2, album_id: 1, title: 'Until Nothing Left', description: 'Third track. Made before apocalypse.')

Comment.create(user_id: 1, track_id: 2, content: 'Aaron sings well!', timeline_position: 12.56)
Comment.create(user_id: 2, track_id: 1, content: 'Raymond is great!', timeline_position: 76.89)

Following.create(following_user_id: 1, followed_user_id: 2)
Follwoing.create(following_user_id: 2, followed_user_id: 1)
