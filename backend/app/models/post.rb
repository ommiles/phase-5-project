class Post < ApplicationRecord
  belongs_to :creator
  belongs_to :membership_level
end
