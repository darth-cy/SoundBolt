class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :following_user_id, null: false
      t.integer :followed_user_id, null: false

      t.timestamps null: false
    end

    add_index :followings, :following_user_id
    add_index :followings, :followed_user_id
  end
end
