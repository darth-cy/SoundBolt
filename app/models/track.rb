# == Schema Information
#
# Table name: tracks
#
#  id                     :integer          not null, primary key
#  user_id                :integer          not null
#  album_id               :integer
#  title                  :string           not null
#  description            :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  trackfile_file_name    :string
#  trackfile_content_type :string
#  trackfile_file_size    :integer
#  trackfile_updated_at   :datetime
#

class Track < ActiveRecord::Base
  validates :user, :title, presence: true
  has_many :comments
  belongs_to :user
  belongs_to :album
  has_attached_file :trackfile, storage: :s3
end
