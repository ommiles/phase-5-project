class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :header, :subheader, :description, :image, :type
  has_one :creator
  has_one :subscription
end
