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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
