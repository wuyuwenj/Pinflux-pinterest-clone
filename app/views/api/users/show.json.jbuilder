
json.extract! @user, :id, :email, :username

created_pins_array = []
User.retrieve_created_pins(@user.id).each do |pin|
  created_pins_array << pin.id
end
json.created_pins created_pins_array

saved_pins_array = []
User.retrieve_saved_pins(@user.id).each do |pin|
  saved_pins_array << pin.id
end
json.saved_pins saved_pins_array


followers_array = []
@user.followers.each do |follower|

  followers_array << follower.followee_id
end
json.followers followers_array

followees_array = []
@user.followings.each do |followee|

  followees_array << followee.follower_id
end
json.followings followees_array