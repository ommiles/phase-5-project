class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    # these are creators:
    has_many :subscribed_users, foreign_key: :subscriber_id, class_name: 'Subscription'
    has_many :subscribees, through: :subscribed_users
    # these are subscribers:
    has_many :subscribing_users, foreign_key: :subscribee_id, class_name: 'Subscription'
    has_many :subscribers, through: :subscribing_users
    # has_secure_pasword
end
