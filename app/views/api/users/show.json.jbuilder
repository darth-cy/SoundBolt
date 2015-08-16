json.(@user, :id, :username, :email, :description, :image_url)

json.followings_followed @user.followings_followed do |following_followed|
  json.id following_followed.id
  json.followed_id following_followed.followed_user_id
  json.following_id following_followed.following_user_id
end

json.tracks @user.tracks do |track|
  json.id track.id
  json.user_id track.user_id

  json.username track.user.username

  json.title track.title
  json.description track.description
  json.trackfile_url track.trackfile_url
  json.image_url track.image_url
end

json.streams @user.streams do |stream|
  json.id stream.id
  json.user_id stream.user_id

  json.username stream.user.username

  json.title stream.title
  json.description stream.description
  json.trackfile_url stream.trackfile_url
  json.image_url stream.image_url
end
