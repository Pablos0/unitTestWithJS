Feature: Customer Account

Scenario: A Customer log in to his account
Given user wants to log in to his customer profile
When customer type his "email" in Email address field
And leave Password field in blank
And press "Login" button
Then user should received "Password is required" message

Scenario: Customer log in from his cart
Given User click in "cart" icon
And do click in "Proceed to checkout" button
When User click on Login button "without his credentials"
Then should received "Email is required" error message

Scenario: Language change
Given the user speaks just French
When user "click" in button with the little globe
And select "FR" as prefered language 
Then the page page should change the language to French