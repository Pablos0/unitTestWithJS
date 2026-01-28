Feature: Buying products from ToolShoop pages

Scenario: Adding products to the shopping cart
Given the user click on "Thor Hammer" products
When select "+" button to add two hammers
And click "Add to cart" button
Then should see "Product added to the shopping cart" message at the top right of the pages

@smoke
Scenario: Filtering tools
Given the user is looking for Drills
When the user do click on "Categories" and "power tools"
And the user select "Drill" checkbox 
Then the page should "reload" automatically within the next 3 seconds

@wip
Scenario: Deleting products from the shopping cart
Given the user is in "shopping cart" page
When he click on the "X" button to remove the hammer
And  user receive "Product deleted" message 
Then the shopping cart page should have the message "The cart is empty. Nothing to display."

@important
Scenario: Adding tools to favorites
Given the user is not allowed to Add Favorites
When the user select "Combination Pliers" tool
And the user click on "Add to favorites" button 
Then the "Unauthorized, can not add product to your favorite list." message must appears 
