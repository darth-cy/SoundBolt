json.(@track, :id, :user_id, :title, :description, :trackfile_url, :image_url)

json.username @track.user.username
json.user_image_url @track.user.image_url

json.comments @track.comments do |comment|
  json.id comment.id
  json.user_id comment.user_id

  json.username comment.user.username
  json.user_image_url comment.user.user_image_url

  json.content comment.content
  json.timeline_position comment.timeline_position
  json.updated_at comment.updated_at
end

json.genres @track.genres do |genre|
  json.id genre.id
  json.name genre.name
  json.genre_color genre.genre_color
end
