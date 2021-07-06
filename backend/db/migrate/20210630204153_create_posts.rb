class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :post_type
      t.string :image
      t.string :title
      t.string :post_content
      t.string :subheader
      t.integer :membership_level
      t.string :listing
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
