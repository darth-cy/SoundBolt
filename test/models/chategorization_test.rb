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

require 'test_helper'

class ChategorizationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
