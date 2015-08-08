# Schema Information

## Schema Graph
![schema-graph]

## Album
+ Albums are optional for a track. They are used merely for organization.
+ Albums can have a front cover image.

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
title       | string    | not null
img_filename| string    | not null, default: "default_album.jpg"

## Comments
+ timeline_position is used to indicate when to flash the comment.
+ timeline_position is logged as percentage in 100. (i.e. 56 => 56%).

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
track_id    | integer   | not null, foreign key (references trackss)
content     | string    | not null
timeline_position | integer | not null, range: 0 - 100

## Tracks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
album_id    | integer   | not null, foreign key (references albums)
title       | string    | not null
description | string    | not null
track_filename| string  | not null

## Followings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
following_user_id| integer   | not null, foreign key (references users)
followed_user_id| integer   | not null, foreign key (references users)

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
description     | string    |
img_filename    | string    | not null, default: "guest_user.jpg"
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

[schema-graph]: ./models/models.jpg
