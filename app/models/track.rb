# == Schema Information
#
# Table name: tracks
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  album_id      :integer
#  title         :string           not null
#  description   :text
#  image_url     :string
#  trackfile_url :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Track < ActiveRecord::Base
  validates :user, :title, presence: true
  has_many :comments
  belongs_to :user
  belongs_to :album

  has_many :chategorizations

  has_many(
    :genres,
    through: :chategorizations,
    source: :genre
  )
  # has_one :image, as: :imageable
  # has_attached_file :trackfile, storage: :s3
end
