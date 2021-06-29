class MembershipLevelSerializer < ActiveModel::Serializer
  attributes :id, :cost, :title, :img_url, :type
  has_one :creator
end
