class CreateCreators < ActiveRecord::Migration[6.1]
  def change
    create_table :creators do |t|
      t.string :first_name
      t.string :last_name
      t.string :page_name
      t.string :avatar
      t.text :bio
      t.string :bio_video
      t.string :bio_image
      t.string :banner

      t.timestamps
    end
  end
end
