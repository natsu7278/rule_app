class CreateRules < ActiveRecord::Migration[6.0]
  def change
    create_table :rules do |t|
      t.int :ruleId
      t.int :limitPeople
      t.str :deadline
      t.str :content

      t.timestamps
    end
  end
end
