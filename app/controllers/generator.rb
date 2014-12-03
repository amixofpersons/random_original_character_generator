require 'faker'

#READ
get '/random' do
  #could this have gone in a post?
  $random_character = OriginalCharacter.create(title: Faker::Name.title,
              name: Faker::Name.name, age: Faker::Number.number(2),
              hair_color: Faker::Commerce.color,
              eye_color: Faker::Commerce.color,
              personality: Faker::Hacker.adjective,
              user_id: session[:user_id])

  erb :'generator/random'
end

get '/character_bio' do
  @characters = OriginalCharacter.all
  erb :'generator/all'
end

get '/character_bio/:id' do |id|
  if request.xhr?
  erb :'generator/character_bio'
  else
    @character = OriginalCharacter.find(id)
    erb :'generator/character_bio'
  end
end

#DELETE
delete'/character_bio/:id' do |id|
  if request.xhr?
    character = OriginalCharacter.find(id)
    character.destroy
  else
    character = OriginalCharacter.find(id)
    character.destroy
    redirect back
  end
end
