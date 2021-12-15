Feature: Sign in page Test
  User should be able to use the functionalities of the sign in page

  @Smoke @Regression
  Scenario: User should be able to sign in successfully
    Given User is on Homepage
    When User clicks on sign in link
    Then User can see the message "Authentication"

  @Sanity @Regression
  Scenario Outline: User should not be able to log in with invalid credentials
    Given User is on Homepage
    When User clicks on sign in link
    And User enters username "<username>"
    And User enters password "<password>"
    And User clicks on sign in button
    Then User can see the error message "<errorMsg>"

    Examples:
      | username       | password | errorMsg                   |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  @Regression
  Scenario:User should be able to log in with valid credentials
    Given User is on Homepage
    When User clicks on sign in link
    And User enters username "prime256@gmail.com"
    And User enters password "Prime456"
    And User clicks on sign in button
    Then User should be able to see sign out link

  @Regression
  Scenario: user should logout successfully
    Given User is on Homepage
    When User clicks on sign in link
    And User enters username "prime256@gmail.com"
    And User enters password "Prime456"
    And User clicks on sign in button
    And User clicks on sign out link
    Then User can see the sign in link displayed