json.(@user, :id, :username, :email, :description, :image_url)

json.followings_followed @user.followings_followed do |following_followed|
  json.id following_followed.id
  json.followed_id following_followed.followed_user_id
  json.following_id following_followed.following_user_id
end

json.followings_following @user.followings_following do |following_following|
  json.id following_following.id
  json.followed_id following_following.followed_user_id
  json.following_id following_following.following_user_id
end

json.tracks @user.tracks do |track|
  json.id track.id
  json.user_id track.user_id

  json.username track.user.username

  json.title track.title
  json.description track.description
  json.trackfile_url track.trackfile_url
  json.image_url track.image_url

  json.genres track.genres do |genre|
    json.id genre.id
    json.name genre.name
    json.genre_color genre.genre_color
  end
end

json.streams @user.streams do |stream|
  json.id stream.id
  json.user_id stream.user_id

  json.username stream.user.username

  json.title stream.title
  json.description stream.description
  json.trackfile_url stream.trackfile_url
  json.image_url stream.image_url

  json.genres stream.genres do |genre|
    json.id genre.id
    json.name genre.name
    json.genre_color genre.genre_color
  end
end
