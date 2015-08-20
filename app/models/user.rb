# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string           not null
#  description     :string
#  image_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :image_url, presence: { message: " should be present." }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  has_many :tracks
  has_many :albums
  has_many :comments

  has_many(
    :followings_followed, # NOTE: The current model is followed entity in this association.
    foreign_key: :followed_user_id,
    primary_key: :id,
    class_name: 'Following'
  )

  has_many(
    :followings_following, # NOTE: The current model is the following entity in this association.
    foreign_key: :following_user_id,
    primary_key: :id,
    class_name: 'Following'
  )

  has_many(
    :followed_users, # NOTE: The current model is the following entity in this association.
    through: :followings_following,
    source: :followed_user
  )

  has_many(
    :following_users, # NOTE: The current model is the followed entity in this association.
    through: :followings_followed,
    source: :following_user
  )

  has_many(
    :streams,
    through: :followed_users,
    source: :tracks
  )

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def confirm=(confirm)
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

  def self.find_by_credentials(email, password)
    @user = User.find_by_email(email)
    (@user && @user.is_password?(password)) ? @user : nil
  end
end
