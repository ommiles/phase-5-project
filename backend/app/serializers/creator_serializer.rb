class CreatorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :page_name, :avatar, :bio, :bio_video, :bio_image, :banner
end
