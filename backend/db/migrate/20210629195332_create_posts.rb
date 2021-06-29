class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :creator, null: false, foreign_key: true
      t.string :title
      t.string :header
      t.string :subheader
      t.text :description
      t.string :image
      t.string :type
      t.references :membership_level, null: false, foreign_key: true

      t.timestamps
    end
  end
end
