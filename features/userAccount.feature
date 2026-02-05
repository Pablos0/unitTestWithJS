Feature: Customer Account

Background: 
    Given user is on the Practice Software Testing website 

@smoke
Scenario: A Customer try to log into his account with wrong credentials
    When the user select signIn to his account 
    And the user log in with email "john.doe@test.com" and password "12345x"
    And press LogIn button
    Then user should received "Invalid email or password" message

Scenario: Customer try to log in from his cart without his password
    When  a combination pliers has been added to the cart and user proceed to checkout
    And the user select the LogIn option and type his email "john.doe@test.com", but no password
    Then should received "Password is required" error message

Scenario: Language change to French
    When the user select the little globe icon at the top right to change the language
    And select FR as preferred language 
    Then the page should change the language to French