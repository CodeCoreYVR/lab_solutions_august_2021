# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
Product.destroy_all
Tag.destroy_all

15.times do
    Tag.create(
      name: Faker::ProgrammingLanguage.name
    )
  end
  
  tags = Tag.all
50.times do 
    created_at = Faker::Date.backward(days: 365 * 2)
    p = Product.create(
        title: Faker::Company.name,
        description: Faker::Company.industry,
        price: rand(1000),
        created_at: created_at,
        updated_at: created_at
    )
    if p.valid?
        rand(1..5).times do 
            Review.create(rating:3,body:Faker::Company.name,product:p)
        end
        p.tags = tags.shuffle.slice(0, rand(tags.count / 2))
    end
    
end

reviews = Review.all
products = Product.all
puts reviews.count
puts products.count
puts tags.count