class PostSerializer < ActiveModel::Serializer
  attributes :id, :type, :image, :title, :header, :description, :subheader
  has_one :user
  has_one :subscription
end
