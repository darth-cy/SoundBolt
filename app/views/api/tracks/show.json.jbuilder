json.(@track, :id, :user_id, :title, :description, :trackfile_url, :image_url)

json.username @track.user.username

json.comments @track.comments do |comment|
  json.id comment.id
  json.user_id comment.user_id

  json.username comment.user.username

  json.content comment.content
  json.timeline_position comment.timeline_position
  json.updated_at comment.updated_at
end
