# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ActiveRecord::Base
  validates :user, :title, presence: true
  belongs_to :user
  has_many :tracks
  has_attached_file :cover, styles: { thumb: '100x100>', square: '200x200#' }, storage: :s3
end
