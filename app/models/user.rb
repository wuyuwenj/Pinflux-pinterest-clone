class User < ApplicationRecord
  validates :username, 
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  has_secure_password

  before_validation :ensure_session_token

  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    session_token
  end

  private

 
  
  def generate_unique_session_token
    # in a loop:
      # use SecureRandom.base64 to generate a random token
      # use `User.exists?` to check if this `session_token` is already in use
      # if already in use, continue the loop, generating a new token
      # if not in use, return the token
    loop do
    # Generate a new token using SecureRandom.base64
    token = SecureRandom.base64(24)

    # Check if the token is already in use
    unless User.exists?(session_token: token)
      # If the token is not in use, return it
      return token
    end
  end
  end

  def ensure_session_token
    # If the session token is already present, leave it be
    return unless session_token.nil?

    # If the session token is nil, set it to a new token
    self.session_token = generate_unique_session_token
  end

 

  def self.find_by_credentials(credential, password)
    if credential.match?(URI::MailTo::EMAIL_REGEXP)
      user = find_by(email: credential)
    else
      user = find_by(username: credential)
    end

    return nil unless user

    if user.authenticate(password)
      return user
    else
      return nil
    end
  end
  
end

u = User.first
old_token = u.session_token
new_token = u.reset_session_token!
u.session_token != old_token
u.session_token == new_token