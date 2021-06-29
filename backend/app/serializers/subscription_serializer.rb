class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :cost, :title, :img_url, :type, :membership_level, :subscription_status
  has_one :user
  has_one :creator
end
