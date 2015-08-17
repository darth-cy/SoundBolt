json.array! @tracks do |track|
  json.id track.id
  json.user_id track.user_id
  json.title track.title
  json.description track.description
  json.trackfile_url track.trackfile_url
  json.image_url track.image_url
end
