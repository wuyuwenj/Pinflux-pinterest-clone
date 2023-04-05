
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :username
        followers_array = []
          user.followers.each do |follower|
            followers_array << follower.followee_id
          end
        json.followers followers_array

        followings_array = []
          user.followings.each do |following|
            followings_array << following.follower_id
          end
        json.followings followings_array
    end
  end

