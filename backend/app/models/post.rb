class Post < ApplicationRecord
  belongs_to :user
  belongs_to :subscription
  has_many :comments
end
