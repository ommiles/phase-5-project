class CreateMembershipLevels < ActiveRecord::Migration[6.1]
  def change
    create_table :membership_levels do |t|
      t.integer :cost
      t.string :title
      t.string :img_url
      t.references :creator, null: false, foreign_key: true
      t.string :type

      t.timestamps
    end
  end
end
