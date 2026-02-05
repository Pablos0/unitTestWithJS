Feature: Buying products from ToolShop pages

Background: 
    Given user is on the Practicing Software Testing website 

@smoke
Scenario: Adding products to the shopping cart
    When the user select the "Thor Hammer" product
    And select plus option to select two hammers
    And select Add to cart button
    Then should see "You can only have one Thor Hammer in the cart." error message

Scenario: Filtering tools
    When the user go to Categories and power tools options at the navigation bar
    And the user select Drill checkbox 
    Then the first displayed drill must be "Cordless Drill 20V"

@important
Scenario: Deleting products from the shopping cart
    When the user add to the cart an incorrect tool 
    When the user go to the cart page to delete the product 
    And he select the X button to remove the product
    Then the shopping cart page should have the message "The cart is empty. Nothing to display."

@wip
Scenario: Adding tools to favorites
    When the user wants to add "Combination Pliers" tool to favorites
    And the user request Add to favorites option 
    Then the "Unauthorized, can not add product to your favorite list." message must appears 
