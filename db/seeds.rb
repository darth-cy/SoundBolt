# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# ALL GENRE CREATION
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
Genre.create!(name: "Blues", genre_color: "navy");
Genre.create!(name: "Punk", genre_color: "darkmagenta"); #15

# ALL USER CREATION
User.create!(username: "Demony", password: "demo123", email: "demo@soundbolt.co", description: "Demony is Soundbolt's demo wizard that allows guest users to experience the features of this site. Sign up for an account to view full features!", image_url: "https://www.filepicker.io/api/file/lc6BtULrShyJ2LP696yX/convert?crop=75,16,266,266")
User.create!(username: "PokemonXY", password: "pokemon123", email: "pokemon@nintendo.com", description: "Pokémon (ポケモン) is a media franchise owned by The Pokémon Company and created by Satoshi Tajiri in 1995.It is centered on fictional creatures called Pokémon, which humans capture and train to fight each other for sport.", image_url: "https://www.filepicker.io/api/file/4LEeYvWHRsOt6afz2dgq/convert?crop=319,0,320,320")
User.create!(username: "Cinematrik", password: "cinema123", email: "cinematrik@gmail.com", description: "I’ve been doing electronic music for a while now. I have remixes out on Proton, Chillin, Magnatune, and more.", image_url: "https://www.filepicker.io/api/file/17hmc8QQO6mYaUyW1xOO/convert?crop=88,0,194,194")
User.create!(username: "Lancefield", password: "nop123", email: "nop@gmail.com", description: "A music lover. Studio One + Reason + plug-ins. Older than I look.", image_url: "https://www.filepicker.io/api/file/vhJrPqoFRwfCLq6ZowUB/convert?crop=656,77,1280,1280")
User.create!(username: "Scomber", password: "scomber123", email: "scomber@gmail.com", description: "Singermuso/songwriter/producer nut from Sydney Australia who believes that free music is a right for any person born with ears to listen. Love challenging myself musically and personally. Peace x.", image_url: "https://www.filepicker.io/api/file/eqSNIiWqTxiI51GFErG4/convert?crop=301,0,1200,1200")

User.create!(username: "JeffSpeed68", password: "stefan123", email: "stefanKart@gmail.com", description: "Songwriter and producer musician since 1977. Old school recording since the early 80s.", image_url: "https://www.filepicker.io/api/file/HozYEoAaTIKu1g2YyIdp/convert?crop=251,0,768,768")
User.create!(username: "PokemonBW", password: "PokemonBW", email: "pokemonBW@nintendo.com", description: "Pokémon (ポケモン) is a media franchise owned by The Pokémon Company and created by Satoshi Tajiri in 1995.It is centered on fictional creatures called Pokémon, which humans capture and train to fight each other for sport.", image_url: "https://www.filepicker.io/api/file/MtGEw19RJm1N5OlKWUQP/convert?crop=45,0,426,426")
User.create!(username: "HansAtom", password: "hans123", email: "hansatom@gmail.com", description: "Rock, punk centered creator here. I'm from New England. You can checkout my work at http://hans-atom.de.", image_url: "https://www.filepicker.io/api/file/uaT2RT4zT6IrHrdgQrKH/convert?crop=452,0,1696,1696")
User.create!(username: "RadioTime", password: "radio123", email: "radio@gmail.com", description: "Sound Designer and composer for TV and film", image_url: "https://www.filepicker.io/api/file/L5soYuwSuuyWE7C2zAsb/convert?crop=0,0,93,93")

# ALL TRACK CREATION
Track.create!(user_id: 8, title: "Only Love", description: "This is the second time I make a single with Emily. She did all the beats and the vocals. She's awsome and her drum arrangement sounds very natural.", image_url: "https://www.filepicker.io/api/file/uaT2RT4zT6IrHrdgQrKH/convert?crop=452,0,1696,1696", trackfile_url: "https://www.filepicker.io/api/file/NZ08IbBTRzyf0h3Vr0Ga")
Track.create!(user_id: 3, title: "Revolve", description: "Upbeat urban remix. I was working for a production company that designs light lounge mixes and I mixed up this track for a nice rooftop place in downtown San Fran. I now also have a website. Check it out at http://www.hisboyelroymusic.com.", image_url: "https://www.filepicker.io/api/file/17hmc8QQO6mYaUyW1xOO/convert?crop=88,0,194,194", trackfile_url: "https://www.filepicker.io/api/file/VJQmDi2uQvuK4zTkDS12")
Track.create!(user_id: 4, title: "Don't Get Twisted", description: "Man, getting messed up on Thursday night is so lame. I was doing mixes in the studio and my mate talked me into doing some hardcore stuff. Anyway, now this track sounds like weird combo of hip-hop and jazz.", image_url: "https://www.filepicker.io/api/file/vhJrPqoFRwfCLq6ZowUB/convert?crop=656,77,1280,1280", trackfile_url: "https://www.filepicker.io/api/file/9LJsCf9FTrqoWDTKFSVK")
Track.create!(user_id: 2, title: "Route 4", description: "Route 4 is a route in central Kalos, connecting Santalune City and Lumiose City.", image_url: "https://www.filepicker.io/api/file/4LEeYvWHRsOt6afz2dgq/convert?crop=319,0,320,320", trackfile_url: "https://www.filepicker.io/api/file/HI1NdhejRQm98WAxVFW3")
Track.create!(user_id: 5, title: "Clarity", description: "Rogue mix! I'm always against dry talking track on a mix but I thought maybe just do it for the heck of it. Not that dramatic per say.", image_url: "https://www.filepicker.io/api/file/eqSNIiWqTxiI51GFErG4/convert?crop=301,0,1200,1200", trackfile_url: "https://www.filepicker.io/api/file/h7Ow6MOnQtWNCQr9a2lv")

Track.create!(user_id: 2, title: "Battle Mansion", description: "The track accompanying you in the battle frontier. You hear this when you're an accomplished trainer.", image_url: "https://www.filepicker.io/api/file/4LEeYvWHRsOt6afz2dgq/convert?crop=319,0,320,320", trackfile_url: "https://www.filepicker.io/api/file/Q4eVWdTTae2yfNgneJyY")
Track.create!(user_id: 9, title: "A Simple Understanding", description: "I missed doing 80ish sounds from last summer. I made this at a very small studio in Denver last year and throught I can save it for later.", image_url: "https://www.filepicker.io/api/file/L5soYuwSuuyWE7C2zAsb/convert?crop=0,0,93,93", trackfile_url: "https://www.filepicker.io/api/file/iV4UtG3TfaSk1g396FFf")
Track.create!(user_id: 2, title: "Pokemon Title", description: "Pokemon title is the first song in any pokemon OST series. It always accompanies a fore-story that anchors the story line of the game release.", image_url: "https://www.filepicker.io/api/file/4LEeYvWHRsOt6afz2dgq/convert?crop=319,0,320,320", trackfile_url: "https://www.filepicker.io/api/file/xwnOSn31S8upOxnyuxuG")
Track.create!(user_id: 5, title: "Lady Ethanol", description: "Super excited to corporate with my friend flying in from Gold Coast. This bunch is funny!", image_url: "https://www.filepicker.io/api/file/eqSNIiWqTxiI51GFErG4/convert?crop=301,0,1200,1200", trackfile_url: "https://www.filepicker.io/api/file/QRA6AIFyTl2kSELI1C86")
Track.create!(user_id: 8, title: "Here Comes Snow", description: "Extra credit to Brian! He's a creator from Florida and he does slow rock productions. He also has a studio in Orlando.", image_url: "https://www.filepicker.io/api/file/uaT2RT4zT6IrHrdgQrKH/convert?crop=452,0,1696,1696", trackfile_url: "https://www.filepicker.io/api/file/fKEhgKyTlO1CbNQdMSyR")

Track.create!(user_id: 2, title: "Kalos Region Theme", description: "Kalos (カロス地方) is a region of the Pokémon world. It is the setting of Pokémon X and Y. It is based on the northern part of France.", image_url: "https://www.filepicker.io/api/file/4LEeYvWHRsOt6afz2dgq/convert?crop=319,0,320,320", trackfile_url: "https://www.filepicker.io/api/file/jdGT0y1xRsqa8CGaunNA")
Track.create!(user_id: 9, title: "Shepherds", description: "Some boy band stuff I did before doing television composing.", image_url: "https://www.filepicker.io/api/file/L5soYuwSuuyWE7C2zAsb/convert?crop=0,0,93,93", trackfile_url: "https://www.filepicker.io/api/file/X0Nbm0j6SNm7HVaeJGDb")
Track.create!(user_id: 4, title: "Occupied Mind", description: "Let's get mindy. Usually I don't do light mixes, but feel sentimental this morning.", image_url: "https://www.filepicker.io/api/file/vhJrPqoFRwfCLq6ZowUB/convert?crop=656,77,1280,1280", trackfile_url: "https://www.filepicker.io/api/file/rYu52qlCRXKgRzozM1V1")
Track.create!(user_id: 7, title: "Battle Theme", description: "PokemonBW battle theme against wild pokemon. Somehow the quality is not very good in this track.", image_url: "https://www.filepicker.io/api/file/MtGEw19RJm1N5OlKWUQP/convert?crop=45,0,426,426", trackfile_url: "https://www.filepicker.io/api/file/wO3wF2ytStiHwAJ8r3Da")
Track.create!(user_id: 3, title: "Ana", description: "Medium tempo electronica with vocal line mixed in. I designed the drum pattern to be mono so the sound has some lazy drag to it.", image_url: "https://www.filepicker.io/api/file/17hmc8QQO6mYaUyW1xOO/convert?crop=88,0,194,194", trackfile_url: "https://www.filepicker.io/api/file/eteTrzRdSbriNLSPN4cQ")

Track.create!(user_id: 6, title: "Letting it Go", description: "Back on San Francisco's main street. One of my good friend thought we might do a road trip themed album and this is the first single that we came up with.", image_url: "https://www.filepicker.io/api/file/HozYEoAaTIKu1g2YyIdp/convert?crop=251,0,768,768", trackfile_url: "https://www.filepicker.io/api/file/RDn4zhQIRKeJWXszfQh7")
Track.create!(user_id: 5, title: "Slow Cooker", description: "Blue and lounge themed. My dad's friend thought I might do a song for his next barbecue party lol. Maybe this is not exactly what fits. I'm still proud of it tho.", image_url: "https://www.filepicker.io/api/file/eqSNIiWqTxiI51GFErG4/convert?crop=301,0,1200,1200", trackfile_url: "https://www.filepicker.io/api/file/W0pO9kh1S6gCMnTCFBvw")
Track.create!(user_id: 6 , title: "Jass Walker", description: "Experimental neo jazz track with light instrumental adaption. Flew into New York on Sunday night and felt doing some light things.", image_url: "https://www.filepicker.io/api/file/HozYEoAaTIKu1g2YyIdp/convert?crop=251,0,768,768", trackfile_url: "https://www.filepicker.io/api/file/sPkApkaDS6nFvZOSoDDG")
Track.create!(user_id: 8, title: "Triggernometry", description: "Alan with a bunch of other fun folks showed up at the beach concert last night. We had a really nice time! Enjoy my new light mix.", image_url: "https://www.filepicker.io/api/file/uaT2RT4zT6IrHrdgQrKH/convert?crop=452,0,1696,1696", trackfile_url: "https://www.filepicker.io/api/file/PA8dehf0Q669eVqxcPkX")

# ALL CHATERGORIZATION CREATION
Chategorization.create!(track_id: 1, genre_id: 1)
Chategorization.create!(track_id: 1, genre_id: 3)
Chategorization.create!(track_id: 1, genre_id: 6)

Chategorization.create!(track_id: 2, genre_id: 7)
Chategorization.create!(track_id: 2, genre_id: 6)

Chategorization.create!(track_id: 3, genre_id: 3)
Chategorization.create!(track_id: 3, genre_id: 6)

Chategorization.create!(track_id: 4, genre_id: 11)
Chategorization.create!(track_id: 4, genre_id: 4)
Chategorization.create!(track_id: 4, genre_id: 6)

Chategorization.create!(track_id: 5, genre_id: 2)
Chategorization.create!(track_id: 5, genre_id: 4)
Chategorization.create!(track_id: 5, genre_id: 7)

Chategorization.create!(track_id: 6, genre_id: 2)
Chategorization.create!(track_id: 6, genre_id: 3)

Chategorization.create!(track_id: 7, genre_id: 2)
Chategorization.create!(track_id: 7, genre_id: 9)
Chategorization.create!(track_id: 7, genre_id: 8)

Chategorization.create!(track_id: 8, genre_id: 7)
Chategorization.create!(track_id: 8, genre_id: 3)

Chategorization.create!(track_id: 9, genre_id: 4)
Chategorization.create!(track_id: 9, genre_id: 2)

Chategorization.create!(track_id: 10, genre_id: 4)

Chategorization.create!(track_id: 11, genre_id: 1)
Chategorization.create!(track_id: 11, genre_id: 8)

Chategorization.create!(track_id: 12, genre_id: 4)

Chategorization.create!(track_id: 13, genre_id: 1)
Chategorization.create!(track_id: 13, genre_id: 5)

Chategorization.create!(track_id: 14, genre_id: 5)
Chategorization.create!(track_id: 14, genre_id: 2)

Chategorization.create!(track_id: 15, genre_id: 8)
Chategorization.create!(track_id: 15, genre_id: 4)
Chategorization.create!(track_id: 15, genre_id: 12)

Chategorization.create!(track_id: 16, genre_id: 7)
Chategorization.create!(track_id: 16, genre_id: 11)

Chategorization.create!(track_id: 13, genre_id: 12)
Chategorization.create!(track_id: 14, genre_id: 2)
Chategorization.create!(track_id: 14, genre_id: 9)

Chategorization.create!(track_id: 17, genre_id: 15)
Chategorization.create!(track_id: 17, genre_id: 13)
Chategorization.create!(track_id: 17, genre_id: 4)

Chategorization.create!(track_id: 18, genre_id: 8)
Chategorization.create!(track_id: 18, genre_id: 6)
Chategorization.create!(track_id: 18, genre_id: 10)

Chategorization.create!(track_id: 19, genre_id: 11)
Chategorization.create!(track_id: 19, genre_id: 14)
Chategorization.create!(track_id: 19, genre_id: 12)

# ALL FOLLOWING CREATION
Following.create!(following_user_id: 1, followed_user_id: 8)
Following.create!(following_user_id: 1, followed_user_id: 2)
Following.create!(following_user_id: 1, followed_user_id: 3)

Following.create!(following_user_id: 2, followed_user_id: 5)
Following.create!(following_user_id: 2, followed_user_id: 6)

Following.create!(following_user_id: 3, followed_user_id: 4)
Following.create!(following_user_id: 3, followed_user_id: 5)
Following.create!(following_user_id: 3, followed_user_id: 6)
Following.create!(following_user_id: 3, followed_user_id: 2)
Following.create!(following_user_id: 3, followed_user_id: 9)
Following.create!(following_user_id: 3, followed_user_id: 7)

Following.create!(following_user_id: 4, followed_user_id: 3)
Following.create!(following_user_id: 4, followed_user_id: 7)
Following.create!(following_user_id: 4, followed_user_id: 5)

Following.create!(following_user_id: 5, followed_user_id: 9)
Following.create!(following_user_id: 5, followed_user_id: 4)
Following.create!(following_user_id: 5, followed_user_id: 7)

Following.create!(following_user_id: 6, followed_user_id: 3)
Following.create!(following_user_id: 6, followed_user_id: 5)

Following.create!(following_user_id: 7, followed_user_id: 1)
Following.create!(following_user_id: 7, followed_user_id: 3)
Following.create!(following_user_id: 7, followed_user_id: 5)

Following.create!(following_user_id: 8, followed_user_id: 2)
Following.create!(following_user_id: 8, followed_user_id: 3)
Following.create!(following_user_id: 8, followed_user_id: 4)
Following.create!(following_user_id: 8, followed_user_id: 7)

Following.create!(following_user_id: 9, followed_user_id: 3)
Following.create!(following_user_id: 9, followed_user_id: 4)
Following.create!(following_user_id: 9, followed_user_id: 5)
Following.create!(following_user_id: 9, followed_user_id: 8)
Following.create!(following_user_id: 9, followed_user_id: 2)

# ALL COMMENTS CREATION
comments = [
  "This part is very natural!",
  "Weeeeeee!",
  "Awsome!",
  "I can listen to this all day.",
  "I've loved this since childhood.",
  "What a nice track.",
  "This part is very fun!",
  "The beats are good.",
  "Hope you can create more of these",
  "When are you back in the city?",

  "Do you make tours?",
  "Come to our city!!",
  "There's so much talent showing here.",
  "Do you do remixes?",
  "This part sounds smooth!",
  "Where do you record?",
  "Are you releasing the next album?",
  "5 starts out of 5.",
  "Amazing!",
  "Very good organization here.",

  "Bravo!!",
  "Well done.",
  "Creators like this are hard to find.",
  "I've never heard a track like this.",
  "You are a natural!",
  "Your other works are good too!",
  "Fantastic!",
  "That's dope man.",
  "Yeah!",
  "Yea!",

  "yo yo yo",
  "High and fly",
  "Right on!",
  "This is so good.",
  "I love you.",
  "Marry me.",
  "Why is this so nice.",
  "Greatest track ever",
  "Best artist ever",
  "Nothing compares to this.",

  "unbelievable!",
  "Unreal!",
  "More than a track.",
  "Very intricute.",
  "Some nice techniques here.",
  "Way to go!",
  "Very relaxing too.",
  "Go rocky go.",
  "Best song ever.",
  "Curiously engaging!"
]

song_time = [290,250,190,140,170,  70,200,50,200,200,  80,110,210,110,260,  310,210,270,260]

(1..19).each do |track_num|
  (1..20).each do |comment_num|
    Comment.create!(user_id: (rand(9) + 1).floor, track_id: track_num, content: comments.sample, timeline_position: rand(song_time[track_num - 1]))
  end
end

# User.create!(username: "WinterChill", password: "winter123", email: "winter@gmail.com", description: "winter things", image_url: "https://www.filepicker.io/api/file/OxKrtQZRpacubokrXu4f/convert?crop=0,0,1200,1200")
# User.create!(username: "BrensonK", password: "brenson123", email: "brenson@gmail.com", description: "Hey I'm brenson and live in New England. I sometimes go to night clubs to listen to some good blues and you can find me in the bars a lot.", image_url: "")

# Seed prototypes
# Track.create!(user_id: , title: "", description: "", image_url: "", trackfile_url: "")
# User.create!(username: "", password: "", email: "", description: "", image_url: "")
# Following.create!(following_user_id: , followed_uer_id: )
# Chategorization.create!(track_id: , genre_id: )
# Chategorization.create!(track_id: , genre_id: )
# Chategorization.create!(track_id: , genre_id: )
# Genre.create!(name: "", genre_color: "");
