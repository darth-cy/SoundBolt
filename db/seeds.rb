# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'PokemonXY', email: 'pokemon@nintendo.com', password: 'pokemon123', description: 'Recent OST releases of Pokemon game series.')
User.create(username: 'Razynoir', email: 'qg231@nyu.edu', password: 'Sieg0718', description: "The ultimate master of this site and the universe it represents.")
User.create(username: 'Aaron', email: 'aaron@appacademy.io', password: 'aaron123', description: "The lab assistant that Raymond had a crush on.")
User.create(username: 'James Blake', email: 'jblake@gmail.com', password: 'jblake123', description: "New York State's sensational neo-pop artist.")

# Track.create(user_id: 1, title: 'Until Night Runs Out', description: 'First track. Made during night.')
# Track.create(user_id: 2, title: 'Until We Pass Out', description: 'Second track. Made before passing out.')
# Track.create(user_id: 2, album_id: 1, title: 'Until Nothing Left', description: 'Third track. Made before apocalypse.')
#
# Comment.create(user_id: 1, track_id: 2, content: 'Aaron sings well!', timeline_position: 12.56)
# Comment.create(user_id: 2, track_id: 1, content: 'Raymond is great!', timeline_position: 76.89)
#
