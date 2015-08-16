json.array! @users do |user|

  json.id user.id
  json.username user.username
  json.email user.email
  json.description user.description
  json.image_url user.image_url

  json.followings_followed user.followings_followed do |following_followed|
    json.id following_followed.id
    json.followed_id following_followed.followed_user_id
    json.following_id following_followed.following_user_id
  end

  json.tracks user.tracks do |track|
    json.id track.id
    json.user_id track.user_id
    json.title track.title
    json.description track.description
    json.trackfile_url track.trackfile_url
    json.image_url track.image_url
  end
end
