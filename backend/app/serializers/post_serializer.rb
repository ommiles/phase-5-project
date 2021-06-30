class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_type, :image, :title, :header, :description, :subheader, :membership_level, :listing
  has_one :user
end
