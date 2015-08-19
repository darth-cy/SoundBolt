# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Genre.create!(name: "Ambiance", genre_color: "blue");
Genre.create!(name: "Jazz", genre_color: "royalblue");
Genre.create!(name: "Urban", genre_color: "lightslategrey");
Genre.create!(name: "Remix", genre_color: "orangered");
Genre.create!(name: "Pop", genre_color: "lightseagreen");

Genre.create!(name: "OST", genre_color: "purple");
Genre.create!(name: "New Age", genre_color: "teal");
Genre.create!(name: "Latin", genre_color: "seagreen");
Genre.create!(name: "Country", genre_color: "maroon");
Genre.create!(name: "Rock", genre_color: "mediumvioletred");

Genre.create!(name: "Vocal", genre_color: "olive");
Genre.create!(name: "Electro", genre_color: "gold");
Genre.create!(name: "Classics", genre_color: "crimson");
Genre.create!(name: "Blue", genre_color: "navy");
Genre.create!(name: "Punk", genre_color: "darkmagenta"); #15

User.create!(username: "Demony", password: "demo123", email: "demo@soundbolt.co", description: "Demony is Soundbolt's demo wizard that allows guest users to experience the features of this site. Sign up for an account to view full features!", image_url: "https://www.filepicker.io/api/file/ASwd6wBST4a5C2o1S4Jt/convert?crop=0,0,4987,4987")
  Following.create!(following_user_id: 1, followed_user_id: 3)
  Following.create!(following_user_id: 1, followed_user_id: 4)
  Following.create!(following_user_id: 1, followed_user_id: 5)

User.create!(username: "JeffSpeed68", password: "stefan123", email: "stefanKart@gmail.com", description: "Songwriter and producer musician since 1977. Old school recording since the early 80s.", image_url: "https://www.filepicker.io/api/file/2clUGSL7SNOXzZ7uJuAV/convert?crop=0,0,93,93")
  Following.create!(following_user_id: 2, followed_user_id: 3)
  Following.create!(following_user_id: 2, followed_user_id: 5)
Track.create!(user_id: 2 , title: "Jass Walker", description: "Experimental neo jazz track with light instrumental adaption. Flew into New York on Sunday night and felt doing some light things.", image_url: "https://www.filepicker.io/api/file/2clUGSL7SNOXzZ7uJuAV/convert?crop=0,0,93,93", trackfile_url: "https://www.filepicker.io/api/file/sPkApkaDS6nFvZOSoDDG")
  Chategorization.create!(track_id: 1, genre_id: 4)
Track.create!(user_id: 2, title: "Letting it Go", description: "Back on San Francisco's main street. One of my good friend thought we might do a road trip themed album and this is the first single that we came up with.", image_url: "https://www.filepicker.io/api/file/2clUGSL7SNOXzZ7uJuAV/convert?crop=0,0,93,93", trackfile_url: "https://www.filepicker.io/api/file/RDn4zhQIRKeJWXszfQh7")
  Chategorization.create!(track_id: 2, genre_id: 1)
  Chategorization.create!(track_id: 2, genre_id: 5)

User.create!(username: "Cinematrik", password: "cinema123", email: "cinematrik@gmail.com", description: "I’ve been doing electronic music for a while now. I have remixes out on Proton, Chillin, Magnatune, and more.", image_url: "https://www.filepicker.io/api/file/17hmc8QQO6mYaUyW1xOO/convert?crop=88,0,194,194")
  Following.create!(following_user_id: 3, followed_user_id: 4)
  Following.create!(following_user_id: 3, followed_user_id: 5)
Track.create!(user_id: 3, title: "Ana", description: "Medium tempo electronica with vocal line mixed in. I designed the drum pattern to be mono so the sound has some lazy drag to it.", image_url: "https://www.filepicker.io/api/file/17hmc8QQO6mYaUyW1xOO/convert?crop=88,0,194,194", trackfile_url: "https://www.filepicker.io/api/file/eteTrzRdSbriNLSPN4cQ")
  Chategorization.create!(track_id: 3, genre_id: 2)
  Chategorization.create!(track_id: 3, genre_id: 4)
  Chategorization.create!(track_id: 3, genre_id: 7)
Track.create!(user_id: 3, title: "Revolve", description: "Upbeat urban remix. I was working for a production company that designs light lounge mixes and I mixed up this track for a nice rooftop place in downtown San Fran. I now also have a website. Check it out at http://www.hisboyelroymusic.com.", image_url: "https://www.filepicker.io/api/file/17hmc8QQO6mYaUyW1xOO/convert?crop=88,0,194,194", trackfile_url: "https://www.filepicker.io/api/file/VJQmDi2uQvuK4zTkDS12")
  Chategorization.create!(track_id: 4, genre_id: 2)
  Chategorization.create!(track_id: 4, genre_id: 3)

User.create!(username: "Lancefield", password: "nop123", email: "nop@gmail.com", description: "A music lover. Studio One + Reason + plug-ins. Older than I look.", image_url: "https://www.filepicker.io/api/file/vhJrPqoFRwfCLq6ZowUB/convert?crop=656,77,1280,1280")
  Following.create!(following_user_id: 4, followed_user_id: 3)
  Following.create!(following_user_id: 4, followed_user_id: 4)
  Following.create!(following_user_id: 4, followed_user_id: 5)
Track.create!(user_id: 4, title: "Don't Get Twisted", description: "Man, getting messed up on Thursday night is so lame. I was doing mixes in the studio and my mate talked me into doing some hardcore stuff. Anyway, now this track sounds like weird combo of hip-hop and jazz.", image_url: "https://www.filepicker.io/api/file/vhJrPqoFRwfCLq6ZowUB/convert?crop=656,77,1280,1280", trackfile_url: "https://www.filepicker.io/api/file/9LJsCf9FTrqoWDTKFSVK")
  Chategorization.create!(track_id: 5, genre_id: 2)
  Chategorization.create!(track_id: 5, genre_id: 9)
  Chategorization.create!(track_id: 5, genre_id: 8)
Track.create!(user_id: 4, title: "Occupied Mind", description: "Let's get mindy. Usually I don't do light mixes, but feel sentimental this morning.", image_url: "https://www.filepicker.io/api/file/vhJrPqoFRwfCLq6ZowUB/convert?crop=656,77,1280,1280", trackfile_url: "https://www.filepicker.io/api/file/rYu52qlCRXKgRzozM1V1")
  Chategorization.create!(track_id: 6, genre_id: 7)
  Chategorization.create!(track_id: 6, genre_id: 3)

User.create!(username: "Scomber", password: "scomber123", email: "scomber@gmail.com", description: "Singermuso/songwriter/producer nut from Sydney Australia who believes that free music is a right for any person born with ears to listen. Love challenging myself musically and personally. Peace x.", image_url: "https://www.filepicker.io/api/file/VRJywvrjQ4SuhKcRzTMr/convert?crop=0,0,93,93")
  Following.create!(following_user_id: 5, followed_user_id: 3)
  Following.create!(following_user_id: 5, followed_user_id: 4)
  Following.create!(following_user_id: 5, followed_user_id: 7)
Track.create!(user_id: 5, title: "Clarity", description: "Rogue mix! I'm always against dry talking track on a mix but I thought maybe just do it for the heck of it. Not that dramatic per say.", image_url: "https://www.filepicker.io/api/file/VRJywvrjQ4SuhKcRzTMr/convert?crop=0,0,93,93", trackfile_url: "https://www.filepicker.io/api/file/h7Ow6MOnQtWNCQr9a2lv")
  Chategorization.create!(track_id: 7, genre_id: 4)
  Chategorization.create!(track_id: 7, genre_id: 2)
Track.create!(user_id: 5, title: "Lady Ethanol", description: "Super excited to corporate with my friend flying in from Gold Coast. This bunch is funny!", image_url: "https://www.filepicker.io/api/file/VRJywvrjQ4SuhKcRzTMr/convert?crop=0,0,93,93", trackfile_url: "https://www.filepicker.io/api/file/QRA6AIFyTl2kSELI1C86")
  Chategorization.create!(track_id: 8, genre_id: 4)
Track.create!(user_id: 5, title: "Slow Cooker", description: "Blue and lounge themed. My dad's friend thought I might do a song for his next barbecue party lol. Maybe this is not exactly what fits. I'm still proud of it tho.", image_url: "https://www.filepicker.io/api/file/VRJywvrjQ4SuhKcRzTMr/convert?crop=0,0,93,93", trackfile_url: "https://www.filepicker.io/api/file/W0pO9kh1S6gCMnTCFBvw")
  Chategorization.create!(track_id: 9, genre_id: 1)
  Chategorization.create!(track_id: 9, genre_id: 8)

# Seed prototypes
# Track.create!(user_id: , title: "", description: "", image_url: "", trackfile_url: "")
# User.create!(username: "", password: "", email: "", description: "", image_url: "")
# Following.create!(following_user_id: , followed_uer_id: )
# Chategorization.create!(track_id: , genre_id: )
# Chategorization.create!(track_id: , genre_id: )
# Chategorization.create!(track_id: , genre_id: )
# Genre.create!(name: "", genre_color: "");
