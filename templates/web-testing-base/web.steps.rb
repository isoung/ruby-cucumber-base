Given(/^I navigate to "([^"]*)"$/) do |url|
  visit(url)
end

Given(/^I click on "([^"]*)"$/) do |element|
  page.click_on(element)
end

Given(/^I click on "([^"]*)" by xpath$/) do |element|
  find(:xpath, element).click
end

Given(/^I click on "([^"]*)" by link text$/) do |link|
  find_link(link).click
end

Then(/^the element "([^"]*)" should exist$/) do |element|
  page.has_selector?(element)
end

Then(/^the element by xpath "([^"]*)" should exist$/) do |element|
  page.has_selector?(:xpath, element)
end

Then(/^the element by css "([^"]*)" should exist$/) do |css|
  page.has_css?(css)
end

Then(/^the current url should be the expected "([^"]*)"$/) do |url|
  expect(current_url).to(eq(url))
end
