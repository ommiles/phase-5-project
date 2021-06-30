class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.text :bio
      t.string :avatar
      t.float :latitude
      t.string :longitude
      t.string :float
      t.string :bio_video
      t.string :bio_image
      t.string :banner
      t.string :page_name
      t.boolean :is_creator

      t.timestamps
    end
  end
end
