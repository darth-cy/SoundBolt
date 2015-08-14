json.array! @users do |user|

  json.id user.id
  json.username user.username
  json.email user.email
  json.description user.description

  json.tracks user.tracks do |track|
    json.id track.id
    json.user_id track.user_id
    json.title track.title
    json.description track.description
  end
end
