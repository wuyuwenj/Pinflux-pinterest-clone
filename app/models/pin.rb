# == Schema Information
#
# Table name: pins
#
#  id               :bigint           not null, primary key
#  title            :string           not null
#  body             :string           not null
#  alt_text         :string
#  destination_link :string
#  author_id        :bigint           not null
#  board_id         :bigint           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Pin < ApplicationRecord
    has_one_attached :image

    has_many :pin_board_relations,
    dependent: :destroy

    has_many :boards,
    through: :pin_board_relations

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    has_many :savedpins_relations,
    class_name: :SavedPin,
    foreign_key: :pin_id,
    dependent: :destroy

    has_many :usersaved,
    through: :savedpins_relations,
    source: :user
    
end
