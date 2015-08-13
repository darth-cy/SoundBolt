class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :user_id, null: false
      t.integer :album_id
      t.string :title, null: false
      t.text :description

      t.string :image_url
      t.string :trackfile_url

      t.timestamps null: false
    end

    add_index :tracks, :user_id
  end
end
