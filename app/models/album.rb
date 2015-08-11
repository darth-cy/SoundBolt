# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  description        :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  cover_file_name    :string
#  cover_content_type :string
#  cover_file_size    :integer
#  cover_updated_at   :datetime
#

class Album < ActiveRecord::Base
  validates :user, :title, presence: true
  belongs_to :user
  has_many :tracks
end
