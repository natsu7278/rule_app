class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :ruleId
      t.integer :useId

      t.timestamps
    end
  end
end
