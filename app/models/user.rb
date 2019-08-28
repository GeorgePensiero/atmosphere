# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#

class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :stories,
        foreign_key: :author_id

    has_many :responses,
        foreign_key: :author_id

    has_many :following_relations,
        foreign_key: :follower_id,
        class_name: :Follow
        
    has_many :following,
        through: :following_relations,
        source: :followed

    has_many :followed_relations,
        foreign_key: :followed_id,
        class_name: :Follow

    has_many :followers,
        through: :followed_relations,
        source: :follower
    
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def follow(user)
        self.following << user
    end

    def unfollow(user)
        self.following.delete(user)
    end

    private
    
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
