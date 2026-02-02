Feature: Customer Account

@smoke
Scenario: A Customer try to log into his account with wrong credentials
Given the user navigates to Practing Software web page 
When the user click on sign in button 
And the user log in with email "john.doe@test.com" and password "12345x"
And press Login button
Then user should received "Invalid email or password" message

Scenario: Customer try to log in from his cart without his password
Given the user add a combination pliers to the cart
When do click in cart icon and Proceed to checkout button
And the user click on log in with his email "john.doe@test.com", but no password
Then should received "Password is required" error message

Scenario: Language change to French
Given the user needs to change the language page to french from the home page
When the user click in button with the little globe
And select FR as prefered language 
Then the page should change the language to French