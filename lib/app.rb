require 'sinatra'
require 'sinatra/reloader' if development?
require 'pry-byebug'
require 'faker'

get '/' do
  @sentence = Faker::Hacker.say_something_smart
  erb :home
end

post '/buttonclick' do
  # params[]
  redirect '/'
end
