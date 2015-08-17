class CreateGenres < ActiveRecord::Migration
  def change
    create_table :genres do |t|
      t.string :name, null: false
      t.string :genre_color, null: false

      t.timestamps null: false
    end
  end
end
