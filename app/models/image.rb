# == Schema Information
#
# Table name: images
#
#  id           :integer          not null, primary key
#  url          :string
#  thumb_url    :string
#  imageable_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Image < ActiveRecord::Base
  belongs_to :imageable, polymorphic: true
end
