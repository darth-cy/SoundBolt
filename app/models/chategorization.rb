# == Schema Information
#
# Table name: chategorizations
#
#  id         :integer          not null, primary key
#  track_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chategorization < ActiveRecord::Base
  validates :track_id, :genre_id, presence: true

  belongs_to :track
  belongs_to :genre
end
