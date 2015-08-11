# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  email               :string           not null
#  description         :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :avatar, attachment_size: { less_than: 2.megabytes }

  has_attached_file :avatar, styles: { thumb: '100x100>', square: '200x200#' }, storage: :s3
  after_initialize :ensure_session_token
  has_many :tracks
  has_many :albums

  has_many(
    :followings_followed,
    foreign_key: :followed_user_id,
    primary_key: :id,
    class_name: 'Following'
  )

  has_many(
    :followings_following,
    foreign_key: :following_user_id,
    primary_key: :id,
    class_name: 'Following'
  )

  has_many(
    :followed_users,
    through: :followings_followed,
    source: :followed_user
  )

  has_many(
    :following_users,
    through: :followings_following,
    source: :following_user
  )

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    return self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
