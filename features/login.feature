@login
Feature: As a registered user I should be able to login successfully

  Scenario: Verify the login functionality
    Given I open the homepage

    Then I should see the login form
    Then I should see email field
    Then I should see password field
    
    When I click on email field and fill the registered email address "miketester@gmail.com"
    When I click on password field and fill the registered password "11111111"
  
    Then I should see sign in button

    When I click on signin button
    Then I should redirect to the settings page with url contains 'settings'