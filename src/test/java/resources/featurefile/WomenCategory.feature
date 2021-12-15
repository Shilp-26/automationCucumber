Feature: Women Category Page Test
  User should be able to use the functionalities of the women category page

  @Smoke @Regression
  Scenario: User should be able to navigate to women category page
    Given User is on Homepage
    When User clicks on Women tab
    Then User can see the women page displayed with message "Women"

  @Regression
  Scenario Outline: user should add product to the cart successfully
    Given User is on Homepage
    When User clicks on Women tab
    And User clicks on the product "<product>"
    And User changes the quantity "<quantity>"
    And User selects size "<size>"
    And User selects colour "<colour>"
    And User clicks on add to cart button
    And User can see popup message displayed "Product successfully added to your shopping cart"
    Then user can close the popup

    Examples:
      | product                                | quantity | size | colour |
      | Blouse                                 | 2        | M    | White  |
      | Printed Dress                          | 3        | L    | Orange |
      | Printed Chiffon Dress                  | 4        | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2        | M    | Blue   |