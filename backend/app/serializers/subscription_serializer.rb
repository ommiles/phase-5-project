class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :cost, :title, :img_url, :membership_level, :subscription_status, :subscriber_id, :subscribee_id
end
