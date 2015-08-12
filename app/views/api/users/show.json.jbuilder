json.(@user, :id, :username, :email, :description)

json.tracks @user.tracks do |track|
  json.id track.id
  json.user_id track.user_id
  json.title track.title
  json.description track.description
  # json.trackfile_file_name track.trackfile_file_name
  # json.trackfile_content_type track.trackfile_content_type
  # json.trackfile_file_size track.trackfile_file_size
  # json.trackfile_updated_at track.trackfile_updated_at
end

json.streams @user.streams do |stream|
  json.id stream.id
  json.user_id stream.user_id
  json.title stream.title
  json.description stream.description
end
