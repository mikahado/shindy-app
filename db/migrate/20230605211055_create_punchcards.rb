class CreatePunchcards < ActiveRecord::Migration[7.0]
  def change
    create_table :punchcards do |t|
      t.integer :count
      t.string :reward
      t.references :user, null: false, foreign_key: true
      t.references :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
