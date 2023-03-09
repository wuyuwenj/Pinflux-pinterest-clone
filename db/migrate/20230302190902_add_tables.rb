class AddTables < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.string :body, null: false
      t.boolean :private, null: false
      t.references :owner, null: false, foreign_key: { to_table: :users }
      t.timestamps
    end


    create_table :pins do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.string :alt_text
      t.string :destination_link
      t.references :author, null: false, foreign_key: { to_table: :users }
      t.references :board, null: false, foreign_key: { to_table: :boards }
      t.timestamps
    end

  

    create_table :saved_pins do |t|
      t.references :user, null: false, foreign_key: { to_table: :users }
      t.references :pin, null: false, foreign_key: true
      t.timestamps null: false
    end
  end
end
