require 'faker'
require 'yaml'


n = 100000

results = {}
n.times do
  x = Faker::Hacker.say_something_smart
  results[x] = true
  p x
end


File.write('say_something_smart.yml', results.to_yaml)
# p results.keys

