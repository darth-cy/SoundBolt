json.(@track, :id, :user_id, :title, :description, :trackfile_url, :image_url)

json.username @track.user.username

json.genres @track.genres do |genre|
  json.id genre.id
  json.name genre.name
  json.genre_color genre.genre_color
end
