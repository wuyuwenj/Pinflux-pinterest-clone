class SavedPin < ApplicationRecord
    validates :user_id, :pin_id, presence: true

    belongs_to :user
    belongs_to :pin

end
