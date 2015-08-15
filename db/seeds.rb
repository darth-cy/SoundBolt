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
User.create(username: 'Billy Joel', email: 'billy@gmail.io', password: 'aaron123', description: "The absolute R&R master.")
User.create(username: 'Elder Scroll', email: 'escroll@gmail.com', password: 'escroll123', description: "Soundtracks from the massively popular game.")

Track.create(user_id: 1, title: 'Battle Frontier', description: 'You hear this when you are an accomplished trainer.', trackfile_url: 'https://s3.amazonaws.com/soundbolt-appacademy-2015/music-streams/131+Battle+Maison.mp3')
Track.create(user_id: 1, title: 'Pokemon Title', description: 'The most exciting track in the series!', trackfile_url: 'https://s3.amazonaws.com/soundbolt-appacademy-2015/music-streams/01+Title+Screen.mp3')
Track.create(user_id: 2, title: 'Radioactive', description: "Let's experience the apocalypse.", trackfile_url: 'https://s3.amazonaws.com/soundbolt-appacademy-2015/music-streams/10.+Trancemission+-+Radioactive.mp3')
Track.create(user_id: 3, title: "It's Still R&R to Me", description: "One of Billy Joel's best hits!", trackfile_url: 'https://s3.amazonaws.com/soundbolt-appacademy-2015/music-streams/03+It%27s+Still+Rock+%26+Roll+to+Me.mp3')
Track.create(user_id: 4, title: 'Steel on Steel', description: 'Go forth with a blade in hand.', trackfile_url: 'https://s3.amazonaws.com/soundbolt-appacademy-2015/music-streams/16+Jeremy+Soule+-+Steel+on+Steel.mp3')
Track.create(user_id: 4, title: 'Masser', description: 'Hear it in the hall of Arcons.', trackfile_url: 'https://s3.amazonaws.com/soundbolt-appacademy-2015/music-streams/12+Jeremy+Soule+-+Masser.mp3')

# Track.create(user_id: 1, title: 'Until Night Runs Out', description: 'First track. Made during night.')
# Track.create(user_id: 2, title: 'Until We Pass Out', description: 'Second track. Made before passing out.')
# Track.create(user_id: 2, album_id: 1, title: 'Until Nothing Left', description: 'Third track. Made before apocalypse.')
#
# Comment.create(user_id: 1, track_id: 2, content: 'Aaron sings well!', timeline_position: 12.56)
# Comment.create(user_id: 2, track_id: 1, content: 'Raymond is great!', timeline_position: 76.89)
#
