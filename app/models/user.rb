# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
  
  before_validation :ensure_session_token

  has_many :pins,
  class_name: :Pin,
  foreign_key: :author_id,
  dependent: :destroy

  has_many :boards,
  class_name: :Board,
  foreign_key: :owner_id,
  dependent: :destroy

  has_many :savedpins_relations,
  class_name: :SavedPin,
  foreign_key: :user_id,
  dependent: :destroy

  has_many :savedpins,
  through: :savedpins_relations,
  source: :pin

  has_many :followings,
  class_name: :Follow,
  foreign_key: :followee_id,
  dependent: :destroy

  has_many :followers,
  class_name: :Follow,
  foreign_key: :follower_id,
  dependent: :destroy

  def remove_following(follower)
    followings.find_by(follower_id: follower.id).destroy
  end
  
    def self.retrieve_created_pins(user_id)
        Pin.with_attached_image
            .select("pins.id, pins.title, pins.body, pins.created_at")
            .order("pins.created_at DESC")
            .where("pins.author_id = (?)", user_id)
    end

    def self.retrieve_saved_pins(user_id)
        Pin.with_attached_image
            .select("pins.id, pins.title, pins.body, pins.created_at, saved_pins.user_id")
            .joins(:savedpins_relations)
            .order("pins.created_at DESC")
            .where("saved_pins.user_id = (?)", user_id)
    end
    
  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
