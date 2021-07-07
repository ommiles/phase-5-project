class PostSerializer < ActiveModel::Serializer
  attributes :id, :post_type, :image, :title, :post_content, :subheader, :membership_level, :listing
  has_one :user
end
