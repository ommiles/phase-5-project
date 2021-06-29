class CreateSubscriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :subscriptions do |t|
      t.string :type
      t.integer :cost
      t.string :title
      t.string :img_url
      t.integer :membership_level
      t.boolean :subscription_status
      t.integer :subscriber_id
      t.integer :subcribee_id

      t.timestamps
    end
  end
end
