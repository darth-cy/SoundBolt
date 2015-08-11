# == Schema Information
#
# Table name: followings
#
#  id                :integer          not null, primary key
#  following_user_id :integer          not null
#  followed_user_id  :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Following < ActiveRecord::Base
  belongs_to(
    :followed_user,
    foreign_key: :followed_user_id,
    class_name: 'User'
  )

  belongs_to(
    :following_user,
    foreign_key: :following_user_id,
    class_name: 'User'
  )

end
