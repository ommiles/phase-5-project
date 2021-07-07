class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :bio, :avatar, :latitude, :longitude, :bio_video, :bio_image, :banner, :page_name, :is_creator
end
