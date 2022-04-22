class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.int :id
      t.string :name
      t.str :ruleId
      t.int :useId

      t.timestamps
    end
  end
end
