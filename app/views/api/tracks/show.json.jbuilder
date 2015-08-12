json.(@track, :id, :user_id, :title, :description)

json.comments @track.comments do |comment|
  json.id comment.id
  json.user_id comment.user_id
  json.content comment.content
  json.timeline_position comment.timeline_position
end
