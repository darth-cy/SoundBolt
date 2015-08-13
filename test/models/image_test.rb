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

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
