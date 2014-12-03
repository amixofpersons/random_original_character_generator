require 'faker'
#READ
get '/random' do
  $random_character = OriginalCharacter.create(title: Faker::Name.title,
              name: Faker::Name.name, age: Faker::Number.number(2),
              hair_color: Faker::Commerce.color,
              eye_color: Faker::Commerce.color,
              personality: Faker::Hacker.adjective,
              user_id: session[:user_id])

  erb :random
end

get '/character_bio/:id' do
  @character = OriginalCharacter.find(params[:id])
  erb :character_bio
end

#CREATE
post '/random' do
redirect('/user/')
end
