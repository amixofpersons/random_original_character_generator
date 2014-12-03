require 'faker'
#READ
get '/random' do
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

get '/character_bio/:id' do
  if request.xhr?
  erb :'generator/character_bio'
  else
    @character = OriginalCharacter.find(params[:id])
    erb :'generator/character_bio'
  end
end

#DELETE
delete'/character_bio/:id' do
  character = OriginalCharacter.find(params[:id])
  character.destroy
  redirect('/')
end
