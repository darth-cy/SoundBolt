# == Schema Information
#
# Table name: genres
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  genre_color :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Genre < ActiveRecord::Base
  validates :name, :genre_color, presence: true

  has_many :chategorizations

  has_many(
    :tracks,
    through: :chategorizations,
    source: :track
  )
end
