class DropPinBoardRelationTable < ActiveRecord::Migration[7.0]
  def change
      drop_table :pin_board_relation

  end
end
