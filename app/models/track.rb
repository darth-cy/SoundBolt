# == Schema Information
#
# Table name: tracks
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  title         :string           not null
#  description   :text
#  image_url     :string
#  trackfile_url :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Track < ActiveRecord::Base
  validates :user, :title, :description, presence: true
  validates :image_url, presence: { message: " should be present." }

  # RAZYNOIR-TEST: For testing purpose, the track can be blank.
  # validates :trackfile_url, presence: { message: " should be provided." }

  validates :chategorizations, length: { maximum: 3, message: " can't exceed 3 items." }
  has_many :comments
  belongs_to :user
  belongs_to :album

  has_many :chategorizations

  has_many(
    :genres,
    through: :chategorizations,
    source: :genre
  )
end
