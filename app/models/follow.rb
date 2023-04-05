class Follow < ApplicationRecord
    validates :follower_id, uniqueness: { scope: :followee_id }
    validates :follower_id, :followee_id, presence: true
    belongs_to :follower, 
    class_name: :User

    belongs_to :followee, 
    class_name: :User

   
end
