class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    # these are creators:
    has_many :subscribed_users, foreign_key: :subscriber_id, class_name: 'Subscription'
    has_many :subscribees, through: :subscribed_users
    # these are subscribers:
    has_many :subscribing_users, foreign_key: :subscribee_id, class_name: 'Subscription'
    has_many :subscribers, through: :subscribing_users

    validates :first_name, presence: true
    validates :last_name, presence: true

    validates :username, presence: true, uniqueness: { case_sensitive: true }
    validates :email, presence: true, uniqueness: { case_sensitive: false }

    validates :password, length: { minimum: 3, maximum: 20 }, allow_nil: true

    has_secure_password
end
