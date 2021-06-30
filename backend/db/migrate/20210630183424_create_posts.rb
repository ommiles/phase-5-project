class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :type
      t.string :image
      t.string :title
      t.string :header
      t.text :description
      t.string :subheader
      t.integer :membership_level
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
