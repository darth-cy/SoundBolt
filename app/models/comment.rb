# == Schema Information
#
# Table name: comments
#
#  id                :integer          not null, primary key
#  user_id           :integer          not null
#  track_id          :integer          not null
#  content           :string(50)
#  timeline_position :float            not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :user, :track, :timeline_position, presence: true
  validates :timeline_position, { minimum: 0.0, maximum: 100.0}
  belongs_to :user
  belongs_to :track
end
