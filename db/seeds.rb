# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
#   puts "Destroying tables..."
#   # Unnecessary if using `rails db:seed:replant`
#   User.destroy_all

#   puts "Resetting primary keys..."
#   # For easy testing, so that after seeding, the first `User` has `id` of 1
#   ApplicationRecord.connection.reset_pk_sequence!('users')

#   puts "Creating users..."
#   # Create one user with an easy to remember username, email, and password:
#   User.create!(
#     username: 'Demo-lition', 
#     email: 'demo@user.io', 
#     password: 'password'
#   )

#   # More users
#   10.times do 
#     User.create!({
#       username: Faker::Internet.unique.username(specifier: 3),
#       email: Faker::Internet.unique.email,
#       password: 'password'
#     }) 
#   end

#   puts "Done!"
# end


require 'open-uri'
Board.destroy_all
SavedPin.destroy_all
Pin.destroy_all
User.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('pins')
  ApplicationRecord.connection.reset_pk_sequence!('boards')
  ApplicationRecord.connection.reset_pk_sequence!('pin_board_relations')
    ApplicationRecord.connection.reset_pk_sequence!('users')



demo_user = User.create!({username: "DemoUser1", email:"DemoUser1@email.com", password: "password"})
user2 = User.create!({username: "James", email:"James@email.com", password: "password"})
user3 = User.create!({username: "Mo", email:"Momo@email.com", password: "password"})

pin_1 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:demo_user.id})
pin_2 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:demo_user.id})
pin_3 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:user2.id})
pin_4 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:demo_user.id})
pin_5 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:demo_user.id})
pin_6 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:user2.id})
pin_7 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:demo_user.id})
pin_8 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:user3.id})
pin_9 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:user2.id})
pin_10 = Pin.create!({title: "CHICKEN DINNER", body: "chicken", alt_text: "chicks", author_id:demo_user.id})

pin_11 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_12 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_13 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_14 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_15 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_16 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:user3.id})
pin_17 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_18 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_19 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_20 = Pin.create!({title: "SALMON DINNER", body: "SALMON", alt_text: "SALMON", author_id:user3.id})


pin_21 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_22 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_23 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_24 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_25 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_26 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user3.id})
pin_27 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_28 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_29 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_30 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user3.id})

pin_31 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_32 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_33 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_34 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_35 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_36 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user3.id})
pin_37 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_38 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user2.id})
pin_39 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:demo_user.id})
pin_40 = Pin.create!({title: "random DINNER", body: "SALMON", alt_text: "SALMON", author_id:user3.id})

# image_1 = URI.open("https://pinflux-seeds.s3.us-west-1.amazonaws.com/chicken1.jpg")
# pin_1.image.attach(io: image_1, filename:"chicken1.jpg")
# DemoUser.save!


Pin.first(10).each_with_index do |chicken, index|
  chicken.image.attach(
    # The string passed to URI.open should be the URL of the image in its bucket.
    # This sample assumes the bucket name is `benchbnb-seeds`.
    io: URI.open("https://pinflux-seeds.s3.us-west-1.amazonaws.com/chicken#{index + 1}.jpg"), 
    filename: "chicken#{index + 1}.jpg"
  )
end
Pin.limit(10).each_with_index do |salmon, index|
  # puts index
  salmon.image.attach(
    # The string passed to URI.open should be the URL of the image in its bucket.
    # This sample assumes the bucket name is `benchbnb-seeds`.
    io: URI.open("https://pinflux-seeds.s3.us-west-1.amazonaws.com/salmon#{index + 1}.jpg"), 
    filename: "salmon#{index + 1}.jpg"
  )
end

Pin.limit(20).each_with_index do |dinner, index|
  dinner.image.attach(
    # The string passed to URI.open should be the URL of the image in its bucket.
    # This sample assumes the bucket name is `benchbnb-seeds`.
    io: URI.open("https://pinflux-seeds.s3.us-west-1.amazonaws.com/dinner#{index + 1}.jpg"), 
    filename: "dinner#{index + 1}.jpg"
  )
end
board_1 = Board.create({name: 'chicken_board', body: 'chicken dinner!',private:false, owner_id: demo_user.id})
board_2 = Board.create({name: 'board2', body: 'board', private:false, owner_id: demo_user.id})
board_3 = Board.create({name: 'board3', body: 'board', private:false, owner_id: user2.id})
board_4 = Board.create({name: 'board4', body: 'board', private:false, owner_id: demo_user.id})
board_5 = Board.create({name: 'board5', body: 'board', private:false, owner_id: user2.id})
board_6 = Board.create({name: 'board6', body: 'board', private:false, owner_id: demo_user.id})
board_7 = Board.create({name: 'board5', body: 'board', private:false, owner_id: user2.id})
board_8 = Board.create({name: 'board6', body: 'board', private:false, owner_id: demo_user.id})
board_9 = Board.create({name: 'board5', body: 'board', private:false, owner_id: user3.id})
board_10 = Board.create({name: 'board6', body: 'board', private:false, owner_id: user3.id})


# board_3 = Board.create({name: 'pie', user_id: user_1.id})
# board_4 = Board.create({name: 'sunsets', user_id: user_1.id})
# board_5 = Board.create({name: 'trees', user_id: demo_user.id})

saved_pin1 = SavedPin.create({user_id: demo_user.id, pin_id: pin_1.id})
saved_pin2 = SavedPin.create({user_id: demo_user.id, pin_id: pin_3.id})

pin_board_relations1 = PinBoardRelation.create({board_id: board_1.id, pin_id: pin_1.id})
pin_board_relations2 = PinBoardRelation.create({board_id: board_2.id, pin_id: pin_2.id})
pin_board_relations3 = PinBoardRelation.create({board_id: board_3.id, pin_id: pin_3.id})
pin_board_relations4 = PinBoardRelation.create({board_id: board_4.id, pin_id: pin_4.id})
pin_board_relations5 = PinBoardRelation.create({board_id: board_5.id, pin_id: pin_5.id})
pin_board_relations6 = PinBoardRelation.create({board_id: board_6.id, pin_id: pin_6.id})
pin_board_relations7 = PinBoardRelation.create({board_id: board_7.id, pin_id: pin_7.id})
pin_board_relations8 = PinBoardRelation.create({board_id: board_8.id, pin_id: pin_8.id})
pin_board_relations9 = PinBoardRelation.create({board_id: board_9.id, pin_id: pin_9.id})
pin_board_relations10 = PinBoardRelation.create({board_id: board_10.id, pin_id: pin_10.id})
pin_board_relations11 = PinBoardRelation.create({board_id: board_1.id, pin_id: pin_11.id})
pin_board_relations12 = PinBoardRelation.create({board_id: board_5.id, pin_id: pin_12.id})
pin_board_relations13 = PinBoardRelation.create({board_id: board_2.id, pin_id: pin_13.id})
pin_board_relations14 = PinBoardRelation.create({board_id: board_3.id, pin_id: pin_14.id})
pin_board_relations15 = PinBoardRelation.create({board_id: board_6.id, pin_id: pin_15.id})

pin_board_relations16 = PinBoardRelation.create({board_id: board_3.id, pin_id: pin_16.id})
pin_board_relations17 = PinBoardRelation.create({board_id: board_4.id, pin_id: pin_17.id})
pin_board_relations18 = PinBoardRelation.create({board_id: board_2.id, pin_id: pin_18.id})
pin_board_relations19 = PinBoardRelation.create({board_id: board_2.id, pin_id: pin_19.id})
pin_board_relations20 = PinBoardRelation.create({board_id: board_4.id, pin_id: pin_20.id})


pin_board_relations21 = PinBoardRelation.create({board_id: board_5.id, pin_id: pin_21.id})
pin_board_relations22 = PinBoardRelation.create({board_id: board_6.id, pin_id: pin_22.id})
pin_board_relations23 = PinBoardRelation.create({board_id: board_7.id, pin_id: pin_23.id})
pin_board_relations24 = PinBoardRelation.create({board_id: board_8.id, pin_id: pin_24.id})
pin_board_relations25 = PinBoardRelation.create({board_id: board_9.id, pin_id: pin_25.id})
pin_board_relations26 = PinBoardRelation.create({board_id: board_10.id, pin_id: pin_26.id})
pin_board_relations27 = PinBoardRelation.create({board_id: board_1.id, pin_id: pin_27.id})
pin_board_relations28 = PinBoardRelation.create({board_id: board_2.id, pin_id: pin_28.id})
pin_board_relations29 = PinBoardRelation.create({board_id: board_3.id, pin_id: pin_29.id})
pin_board_relations30 = PinBoardRelation.create({board_id: board_4.id, pin_id: pin_30.id})