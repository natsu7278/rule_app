class CreateRules < ActiveRecord::Migration[6.0]
  def change
    create_table :rules do |t|
      t.integer :ruleId
      t.integer :limitPeople
      t.string :deadline
      t.string :content

      t.timestamps
    end
  end
end
