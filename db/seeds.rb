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

require 'faker'
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


  puts "seeding users..."

demo_user = User.create!({username: "DemoUser1", email:"DemoUser1@email.com", password: "password"})
user2 = User.create!({username: "James", email:"James@email.com", password: "password"})
user3 = User.create!({username: "Mo", email:"Momo@email.com", password: "password"})
user4 = User.create!({
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password"
})

user5 = User.create!({
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password"
})

user6 = User.create!({
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password"
})

user7 = User.create!({
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password"
})

user8 = User.create!({
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password"
})

user9 = User.create!({
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password"
})

user10 = User.create!({
  username: Faker::Internet.username,
  email: Faker::Internet.email,
  password: "password"
})

  puts "seeding pins..."

pin_1 = Pin.create!({title: "Creamy Garlic Chicken", body: "This creamy garlic chicken recipe is perfect for a comforting dinner. Tender chicken breasts are cooked in a creamy garlic sauce that is infused with aromatic herbs and spices for a flavorful and delicious meal.", alt_text: "chicks", author_id:demo_user.id})
pin_2 = Pin.create!({title: "Marry Me Chicken", body: "This chicken dish is so delicious, you'll want to marry it! Juicy chicken breasts are cooked in a creamy tomato sauce that is flavored with garlic, parmesan cheese, and balsamic vinegar for a dish that is savory, tangy, and simply irresistible.", alt_text: "chicks", author_id:demo_user.id})
pin_3 = Pin.create!({title: "One-Pot Chicken Dinner", body: "This easy one-pot chicken dinner is perfect for busy weeknights. Juicy chicken thighs are cooked with tender potatoes and sweet carrots in a rich and flavorful broth that is infused with herbs and spices for a delicious and wholesome meal.", alt_text: "chicks", author_id:user2.id})
pin_4 = Pin.create!({title: "Crispy Baked Chicken", body: "This crispy baked chicken recipe is healthier than fried chicken but just as delicious. Juicy chicken thighs are coated in a seasoned breadcrumb mixture and baked until golden brown and crispy. Serve with your favorite sides for a family-friendly meal.", alt_text: "chicks", author_id:demo_user.id})
pin_5 = Pin.create!({title: "Spicy Honey Mustard Chicken", body: "This spicy honey mustard chicken recipe is sweet, tangy, and packed with flavor. Tender chicken breasts are coated in a spicy honey mustard sauce and baked until juicy and flavorful. Serve with a fresh salad or steamed vegetables for a wholesome meal.", alt_text: "chicks", author_id:demo_user.id})
pin_6 = Pin.create!({title: "Sheet Pan Chicken Dinner", body: "This easy sheet pan chicken dinner is a weeknight game-changer. Tender chicken thighs are roasted with potatoes, green beans, and cherry tomatoes for a complete meal that is easy to make and clean up. Perfect for busy nights when you don't want to spend hours in the kitchen.", alt_text: "chicks", author_id:user2.id})
pin_7 = Pin.create!({title: "Healthy Chicken Bowl", body: "This healthy chicken bowl recipe is perfect for a light and nutritious meal. Tender chicken breasts are grilled and served with quinoa, roasted vegetables, and a tangy vinaigrette dressing for a meal that is packed with protein and flavor.", alt_text: "chicks", author_id:demo_user.id})
pin_8 = Pin.create!({title: "Lemon Herb Chicken Skewers", body: "These lemon herb chicken skewers are perfect for grilling season. Tender chicken breasts are marinated in a tangy lemon and herb sauce, then threaded onto skewers with colorful bell peppers and grilled to perfection. Serve with a fresh salad for a healthy and delicious meal.", alt_text: "chicks", author_id:user3.id})
pin_9 = Pin.create!({title: "Chicken Alfredo Pasta", body: "This classic chicken Alfredo pasta is a crowd-pleaser. Tender chicken breasts are cooked with fettuccine pasta and a rich and creamy Alfredo sauce that is flavored with parmesan cheese, garlic, and herbs. Serve with a side salad for a complete meal.", alt_text: "chicks", author_id:user2.id})
pin_10 = Pin.create!({title: "Chicken Alfredo Pasta", body: "This classic chicken Alfredo pasta is a crowd-pleaser. Tender chicken breasts are cooked with fettuccine pasta and a rich and creamy Alfredo sauce that is flavored with parmesan cheese, garlic, and herbs. Serve with a side salad for a complete meal.", alt_text: "chicks", author_id:user2.id})

pin_11 = Pin.create!({title: "Grilled Salmon with Lemon and Herbs", body: "This Grilled Salmon with Lemon and Herbs recipe is a perfect balance of smoky and bright flavors. The salmon fillets are seasoned with herbs and lemon, then grilled to perfection. It's a healthy and delicious dinner option that's ready in just 20 minutes!", alt_text: "Grilled Salmon with Lemon and Herbs", author_id:demo_user.id})
pin_12 = Pin.create!({title: "Maple Mustard Glazed Salmon", body: "This Maple Mustard Glazed Salmon is sweet, savory, and packed with flavor. The salmon is coated with a tangy mustard and maple glaze, then baked to perfection. Serve it over a bed of rice or with a side of roasted vegetables for a complete and satisfying meal.", alt_text: "Maple Mustard Glazed Salmon", author_id:user2.id})
pin_13 = Pin.create!({title: "Salmon Poke Bowl", body: "This Salmon Poke Bowl is a fresh and flavorful way to enjoy salmon. The salmon is marinated in a mixture of soy sauce, sesame oil, and lime juice, then served over a bed of rice and topped with avocado, cucumber, and other delicious toppings. It's a healthy and satisfying meal that's perfect for lunch or dinner.", alt_text: "Salmon Poke Bowl", author_id:user4.id})
pin_14 = Pin.create!({title: "Smoked Salmon Bagel", body: "This Smoked Salmon Bagel is a classic breakfast dish that's simple to make and packed with flavor. The bagel is toasted and topped with cream cheese, smoked salmon, and other delicious toppings. It's a perfect on-the-go breakfast or weekend brunch dish.", alt_text: "Smoked Salmon Bagel", author_id:user5.id})
pin_15 = Pin.create!({title: "Salmon Cakes with Lemon Garlic Aioli", body: "These Salmon Cakes with Lemon Garlic Aioli are a delicious and easy way to enjoy salmon. The cakes are made with fresh salmon, breadcrumbs, and seasonings, then pan-fried until golden brown. Serve them with a tangy and creamy lemon garlic aioli for the perfect flavor combination.", alt_text: "Salmon Cakes with Lemon Garlic Aioli", author_id:user2.id})
pin_16 = Pin.create!({title: "Grilled Salmon Skewers with Mango Salsa", body: "These Grilled Salmon Skewers with Mango Salsa are a perfect summertime meal. The salmon is skewered with colorful bell peppers, then grilled to perfection. Serve them with a fresh and fruity mango salsa for a burst of tropical flavor.", alt_text: "Grilled Salmon Skewers with Mango Salsa", author_id:user3.id})
pin_17 = Pin.create!({title: "Teriyaki Glazed Salmon", body: "This Teriyaki Glazed Salmon is a delicious and easy way to enjoy salmon. The salmon is marinated in a homemade teriyaki sauce, then baked to perfection. Serve it over a bed of rice with a side of steamed vegetables for a healthy and satisfying meal.", alt_text: "Teriyaki Glazed Salmon", author_id:user6.id})
pin_18 = Pin.create!({title: "Grilled Salmon with Lemon and Garlic", body: "This grilled salmon recipe is perfect for a summer barbecue! The fish is marinated in a mixture of lemon juice, garlic, and olive oil, which adds a delicious flavor to the fish. Then it's grilled to perfection and served with a fresh green salad on the side.", alt_text: "Grilled Salmon with Lemon and Garlic", author_id: user2.id})
pin_19 = Pin.create!({title: "Honey Mustard Glazed Salmon", body: "This honey mustard glazed salmon recipe is a quick and easy meal that is perfect for busy weeknights. The fish is seasoned with salt and pepper, then coated with a sweet and tangy honey mustard glaze. It's then baked in the oven until cooked through and served with a side of roasted vegetables.", alt_text: "Honey Mustard Glazed Salmon", author_id: user7.id})
pin_20 = Pin.create!({title: "Asian-inspired Salmon Bowl", body: "This Asian-inspired salmon bowl recipe is a healthy and flavorful meal that is easy to make. The salmon is marinated in a mixture of soy sauce, ginger, garlic, and sesame oil, then grilled until cooked through. It's then served with a bed of rice, steamed broccoli, and a drizzle of sriracha mayo.", alt_text: "Asian-inspired Salmon Bowl", author_id: user3.id})

pin_21 = Pin.create!({title: "Grilled Salmon with Lemon Butter Sauce", body: "This delicious grilled salmon is served with a tangy and rich lemon butter sauce that perfectly complements the delicate flavor of the fish.", alt_text: "Grilled Salmon with Lemon Butter Sauce", author_id:user5.id})
pin_22 = Pin.create!({title: "Pan-Seared Salmon with Garlic and Herbs", body: "This pan-seared salmon is seasoned with garlic and herbs for a flavorful and healthy dinner option.", alt_text: "Pan-Seared Salmon with Garlic and Herbs", author_id:user2.id})
pin_23 = Pin.create!({title: "Baked Lemon Pepper Salmon", body: "This baked salmon is seasoned with zesty lemon and black pepper, making it a quick and easy weeknight dinner option.", alt_text: "Baked Lemon Pepper Salmon", author_id:user6.id})
pin_24 = Pin.create!({title: "Grilled Teriyaki Salmon", body: "This grilled salmon is marinated in a sweet and savory teriyaki sauce for a flavorful and healthy dinner option.", alt_text: "Grilled Teriyaki Salmon", author_id:user7.id})
pin_25 = Pin.create!({title: "Blackened Salmon with Avocado Salsa", body: "This blackened salmon is served with a fresh and tangy avocado salsa for a delicious and healthy dinner option.", alt_text: "Blackened Salmon with Avocado Salsa", author_id:user8.id})
pin_26 = Pin.create!({title: "Salmon Cakes with Dill Sauce", body: "These salmon cakes are made with fresh salmon and served with a creamy dill sauce for a tasty and healthy dinner option.", alt_text: "Salmon Cakes with Dill Sauce", author_id:user9.id})
pin_27 = Pin.create!({title: "Grilled Cajun Salmon", body: "This Cajun-style grilled salmon is seasoned with spicy and smoky flavors for a delicious and healthy dinner option.", alt_text: "Grilled Cajun Salmon", author_id:user10.id})
pin_28 = Pin.create!({title: "Salmon and Broccoli Stir-Fry", body: "This stir-fry features tender salmon and fresh broccoli in a flavorful sauce, making it a healthy and quick dinner option.", alt_text: "Salmon and Broccoli Stir-Fry", author_id:user2.id})
pin_29 = Pin.create!({title: "Smoked Salmon and Cream Cheese Toast", body: "This toast features creamy cream cheese and smoked salmon for a delicious and easy breakfast or snack option.", alt_text: "Smoked Salmon and Cream Cheese Toast", author_id:user5.id})
pin_30 = Pin.create!({title: "Salmon and Asparagus Foil Packs", body: "These foil packs are filled with tender salmon and fresh asparagus, making it a quick and easy dinner option with minimal cleanup.", alt_text: "Salmon and Asparagus Foil Packs", author_id:user6.id})

pin_32 = Pin.create!({title: "Delicious Veggie Burger", body: "This is the best veggie burger recipe you'll ever find. It's made with fresh veggies, quinoa, and black beans, and it's seasoned to perfection. Serve it with your favorite toppings and enjoy!", alt_text: "Delicious Veggie Burger", author_id:user10.id})
pin_33 = Pin.create!({title: "Healthy Smoothie Bowl", body: "Looking for a healthy breakfast option? Try this smoothie bowl recipe made with frozen fruits, almond milk, and a variety of toppings such as chia seeds, granola, and fresh fruit. It's easy to make and tastes delicious!", alt_text: "Healthy Smoothie Bowl", author_id:user9.id})
pin_34 = Pin.create!({title: "Easy Chicken Stir Fry", body: "This chicken stir fry is quick and easy to make, and it's packed with flavor. It's made with fresh veggies, chicken, and a tasty sauce that's made from soy sauce, honey, and garlic. Serve it over rice and enjoy!", alt_text: "Easy Chicken Stir Fry", author_id:user8.id})
pin_35 = Pin.create!({title: "Vegetarian Pad Thai", body: "This vegetarian Pad Thai recipe is a healthier take on the classic dish. It's made with fresh veggies, tofu, and a flavorful sauce that's made from lime juice, soy sauce, and peanut butter. It's easy to make and tastes delicious!", alt_text: "Vegetarian Pad Thai", author_id:user7.id})
pin_36 = Pin.create!({title: "Creamy Tomato Soup", body: "Looking for a cozy soup recipe? Try this creamy tomato soup recipe made with fresh tomatoes, cream, and a variety of spices. Serve it with a grilled cheese sandwich and enjoy!", alt_text: "Creamy Tomato Soup", author_id:user6.id})
pin_37 = Pin.create!({title: "Pesto Pasta Salad", body: "This pesto pasta salad recipe is perfect for a summer picnic or barbecue. It's made with fresh veggies, pasta, and a tasty pesto sauce that's made from basil, pine nuts, and Parmesan cheese. It's easy to make and tastes delicious!", alt_text: "Pesto Pasta Salad", author_id:user5.id})
pin_38 = Pin.create!({title: "Homemade Pizza", body: "Looking for a fun and easy dinner recipe? Try making your own pizza! This recipe shows you how to make a delicious pizza crust from scratch, and you can top it with your favorite toppings. It's a fun activity to do with friends or family!", alt_text: "Homemade Pizza", author_id:user2.id})
pin_39 = Pin.create!({title: "Spicy Shrimp Tacos", body: "These spicy shrimp tacos are the perfect weeknight dinner recipe. They're made with fresh shrimp, spices, and a variety of toppings such as avocado, lime, and cilantro. Serve them with your favorite hot sauce and enjoy!", alt_text: "Spicy Shrimp Tacos", author_id:user4.id})
pin_40 = Pin.create!({title: "Healthy Greek Salad", body: "Looking for a healthy lunch option? Try this Greek salad recipe made with fresh veggies, feta cheese, and a tasty Greek dressing. It's easy to make and tastes delicious!", alt_text: "Healthy Greek Salad", author_id:user3.id})



Pin.first(40).each_with_index do |pin, index|
  if index < 10
    pin.image.attach(
      io: URI.open("https://pinflux-seeds.s3.us-west-1.amazonaws.com/chicken#{index + 1}.jpg"), 
      filename: "chicken#{index + 1}.jpg"
    )
  elsif index < 20
    pin.image.attach(
      io: URI.open("https://pinflux-seeds.s3.us-west-1.amazonaws.com/salmon#{index - 9}.jpg"), 
      filename: "salmon#{index - 9}.jpg"
    )
  elsif index < 40
    pin.image.attach(
      io: URI.open("https://pinflux-seeds.s3.us-west-1.amazonaws.com/dinner#{index - 19}.jpg"), 
      filename: "dinner#{index - 19}.jpg"
    )
  end
end
  puts "seeding boards..."

board_1 = Board.create({name: 'Chicken Recipes', body: 'A collection of delicious chicken recipes to try at home!', private:false, owner_id: demo_user.id})
board_2 = Board.create({name: 'Weeknight Meals', body: 'Quick and easy meal ideas for busy weeknights', private:false, owner_id: demo_user.id})
board_3 = Board.create({name: 'Healthy Eats', body: 'Healthy and nutritious meal ideas to fuel your body', private:false, owner_id: user2.id})
board_4 = Board.create({name: 'International Cuisine', body: 'A board dedicated to exploring and trying out new cuisines from around the world', private:false, owner_id: user5.id})
board_5 = Board.create({name: 'Vegetarian/Vegan Recipes', body: 'A collection of delicious meat-free recipes', private:false, owner_id: user8.id})
board_6 = Board.create({name: 'Sweet Treats', body: 'Indulge your sweet tooth with these dessert recipes', private:false, owner_id: user7.id})
board_7 = Board.create({name: 'Appetizers and Snacks', body: 'Perfect for entertaining or as a quick bite', private:false, owner_id: user9.id})
board_8 = Board.create({name: 'Holiday Recipes', body: 'Recipes to celebrate the holidays with family and friends', private:false, owner_id: user10.id})
board_9 = Board.create({name: 'Comfort Food', body: 'Cozy and comforting recipes for those chilly nights', private:false, owner_id: user6.id})
board_10 = Board.create({name: 'Fav Dinner', body: '!!!!!!!!!!!', private:false, owner_id: demo_user.id})
board_11 = Board.create({name: 'Fav Salmon Recipe', body: 'SALMON!!!', private:false, owner_id: demo_user.id})
board_12 = Board.create({name: 'Fav FOOD', body: 'FAVOURATE FOOD', private:false, owner_id: demo_user.id})
board_13 = Board.create({name: 'TOP5', body: 'MY TOP 5', private:false, owner_id: demo_user.id})


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

pin_board_relations41 = PinBoardRelation.create({board_id: board_13.id, pin_id: pin_11.id})
pin_board_relations42 = PinBoardRelation.create({board_id: board_13.id, pin_id: pin_12.id})
pin_board_relations43 = PinBoardRelation.create({board_id: board_13.id, pin_id: pin_13.id})
pin_board_relations44 = PinBoardRelation.create({board_id: board_13.id, pin_id: pin_14.id})
pin_board_relations45 = PinBoardRelation.create({board_id: board_13.id, pin_id: pin_15.id})
pin_board_relations46 = PinBoardRelation.create({board_id: board_12.id, pin_id: pin_26.id})
pin_board_relations47 = PinBoardRelation.create({board_id: board_12.id, pin_id: pin_27.id})
pin_board_relations48 = PinBoardRelation.create({board_id: board_12.id, pin_id: pin_28.id})
pin_board_relations49 = PinBoardRelation.create({board_id: board_12.id, pin_id: pin_29.id})
pin_board_relations40 = PinBoardRelation.create({board_id: board_12.id, pin_id: pin_30.id})

pin_board_relations51 = PinBoardRelation.create({board_id: board_11.id, pin_id: pin_21.id})
pin_board_relations52 = PinBoardRelation.create({board_id: board_11.id, pin_id: pin_22.id})
pin_board_relations53 = PinBoardRelation.create({board_id: board_11.id, pin_id: pin_23.id})
pin_board_relations54 = PinBoardRelation.create({board_id: board_11.id, pin_id: pin_24.id})
pin_board_relations55 = PinBoardRelation.create({board_id: board_11.id, pin_id: pin_25.id})
pin_board_relations56 = PinBoardRelation.create({board_id: board_10.id, pin_id: pin_27.id})
pin_board_relations57 = PinBoardRelation.create({board_id: board_2.id, pin_id: pin_12.id})
pin_board_relations58 = PinBoardRelation.create({board_id: board_2.id, pin_id: pin_29.id})
pin_board_relations59 = PinBoardRelation.create({board_id: board_1.id, pin_id: pin_29.id})
pin_board_relations50 = PinBoardRelation.create({board_id: board_1.id, pin_id: pin_30.id})

  puts "seeding follows..."

follow1=Follow.create({followee_id:demo_user.id, follower_id:user2.id})
follow2=Follow.create({followee_id:user2.id, follower_id:user3.id})
follow3=Follow.create({followee_id:user3.id, follower_id:demo_user.id})
follow4=Follow.create({followee_id:user4.id, follower_id:demo_user.id})
follow5=Follow.create({followee_id:user6.id, follower_id:user9.id})
follow6=Follow.create({followee_id:user7.id, follower_id:demo_user.id})
follow7=Follow.create({followee_id:user8.id, follower_id:user4.id})
follow8=Follow.create({followee_id:user9.id, follower_id:demo_user.id})
follow9=Follow.create({followee_id:user10.id, follower_id:demo_user.id})
follow10=Follow.create({followee_id:demo_user.id, follower_id:user10.id})
follow11=Follow.create({followee_id:user5.id, follower_id:user9.id})
follow12=Follow.create({followee_id:demo_user.id, follower_id:user8.id})
follow13=Follow.create({followee_id:user8.id, follower_id:user7.id})
follow14=Follow.create({followee_id:demo_user.id, follower_id:user6.id})
follow15=Follow.create({followee_id:demo_user.id, follower_id:user5.id})
follow16=Follow.create({followee_id:user5.id, follower_id:user4.id})
follow17=Follow.create({followee_id:demo_user.id, follower_id:user3.id})