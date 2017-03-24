Given(/^"([^"]*)" and "([^"]*)"$/) do |num1, num2|
  @num1 = num1.to_i
  @num2 = num2.to_i
end

Then(/^the sum should be "([^"]*)"$/) do |sum|
  expect((@num1 + @num2) == sum.to_i)
end
