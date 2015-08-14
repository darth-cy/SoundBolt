json.(@user, :id, :username, :email, :description)

json.followings_followed @user.followings_followed do |following_followed|
  json.id following_followed.id
  json.followed_id following_followed.followed_user_id
  json.following_id following_followed.following_user_id
end

json.tracks @user.tracks do |track|
  json.id track.id
  json.user_id track.user_id
  json.title track.title
  json.description track.description
end

json.streams @user.streams do |stream|
  json.id stream.id
  json.user_id stream.user_id
  json.title stream.title
  json.description stream.description
end
