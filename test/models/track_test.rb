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

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
