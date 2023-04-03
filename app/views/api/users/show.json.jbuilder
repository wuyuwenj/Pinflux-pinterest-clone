
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
