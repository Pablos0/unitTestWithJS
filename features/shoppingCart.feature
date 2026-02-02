Feature: Buying products from ToolShop pages

@smoke
Scenario: Adding products to the shopping cart
Given the user click on "Thor Hammer" product
When select plus button to select two hammers
And click Add to cart button
Then should see "You can only have one Thor Hammer in the cart" error message

Scenario: Filtering tools
Given the user is looking for Drills and he is in the home page 
When the user do click on Categories and power tools
And the user select "Drill" checkbox 
Then the first displayed drill must be "Cordless Drill 20V"

@important
Scenario: Deleting products from the shopping cart
Given the user add to the cart an incorrect tool 
When the user go to the cart page to delete the product 
And he click on the X button to remove the product
Then the shopping cart page should have the message "The cart is empty. Nothing to display."

@wip
Scenario: Adding tools to favorites
Given the user is in Home Page and desired add a product to favorites 
When the user select "Combination Pliers" tool
And the user do click on Add to favorites button 
Then the "Unauthorized, can not add product to your favorite list." message must appears 
