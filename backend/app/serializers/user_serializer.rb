class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :password_digest, :bio, :avatar, :latitude, :longitude, :float, :bio_video, :bio_image, :banner, :page_name, :is_creator
end
