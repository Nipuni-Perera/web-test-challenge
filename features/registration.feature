@register
Feature: As a non-registered user I should be able to create an account successfully

  Scenario: Verify the user registration functionality
    Given I am on the homepage

    Then I should see the login form in the homepage
    Then I should see create account link
    When I click on create account link
    Then I should redirect to the sign up page with url contains 'signup'

    Then I should see first name field
    Then I should see last name field
    Then I should see email field input
    Then I should see password field input

    When I click on first name field and fill the first name with "Mike"
    When I click on last name field and fill the last name with "Tester"

    When I click on email field and fill a non-registered email address with "<email>"
    
    When I click on password field and fill a non-registered password with "<password>"

    Then I should see create account button
    When I click on create account button
    Then I should redirect to the activation page with url contains 'activation'



