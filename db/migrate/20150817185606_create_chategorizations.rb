class CreateChategorizations < ActiveRecord::Migration
  def change
    create_table :chategorizations do |t|
      t.integer :track_id, null: false
      t.integer :genre_id, null: false

      t.timestamps null: false
    end
  end
end
