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

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
