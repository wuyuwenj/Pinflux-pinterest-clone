# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  body       :string           not null
#  private    :boolean          not null
#  owner_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Board < ApplicationRecord
    validates :name, uniqueness: { scope: :owner_id}

    belongs_to :owner,
        class_name: :User,
        foreign_key: :owner_id

    has_many :pin_board_relations,
    dependent: :destroy

    has_many :pins,
    through: :pin_board_relations


    
end
