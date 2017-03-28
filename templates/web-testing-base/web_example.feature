Feature: Web example feature file
    Scenario: Verify
      Given I navigate to "http://www.tapqa.com"
      Then the element "#fusion-standard-logo" should exist

    Scenario: Web
      Given I navigate to "http://www.tapqa.com"
      And I click on "Strategy for Scaling Development & Quality" by link text
      Then the current url should be the expected "http://www.tapqa.com/solutions/tapstrategy/"