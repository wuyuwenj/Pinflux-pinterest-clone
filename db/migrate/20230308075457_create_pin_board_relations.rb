class CreatePinBoardRelations < ActiveRecord::Migration[7.0]
  def change
    create_table :pin_board_relations do |t|
      t.references :board, null: false, foreign_key: { to_table: :boards }
      t.references :pin, null: false, foreign_key: true
      t.timestamps
    end
  end
end
