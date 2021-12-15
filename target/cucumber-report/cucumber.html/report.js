$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create account page test",
  "description": "User should be able to create an account successfully",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9129499500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to create account",
  "description": "",
  "id": "create-account-page-test;user-should-be-able-to-create-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User fills out all the mandatory fields: \"John\",\"Johnson\",\"Prime258\",\"John\",\"Johnson\",\"43 London rd\",\"London\",\"Idaho\",\"90987\",\"07572537467\",\"Home\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User can see the message \"My Account\" appear",
  "keyword": "And "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 280341500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInLink()"
});
formatter.result({
  "duration": 1825309300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.userEntersEmailAddress()"
});
formatter.result({
  "duration": 179263100,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.userClicksOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 119673100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 42
    },
    {
      "val": "Johnson",
      "offset": 49
    },
    {
      "val": "Prime258",
      "offset": 59
    },
    {
      "val": "John",
      "offset": 70
    },
    {
      "val": "Johnson",
      "offset": 77
    },
    {
      "val": "43 London rd",
      "offset": 87
    },
    {
      "val": "London",
      "offset": 102
    },
    {
      "val": "Idaho",
      "offset": 111
    },
    {
      "val": "90987",
      "offset": 119
    },
    {
      "val": "07572537467",
      "offset": 127
    },
    {
      "val": "Home",
      "offset": 141
    }
  ],
  "location": "CreateAccountSteps.userFillsOutAllTheMandatoryFields(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3091143700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.userClicksOnRegisterButton()"
});
formatter.result({
  "duration": 1703365200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 26
    }
  ],
  "location": "CreateAccountSteps.userCanSeeTheMessageAppear(String)"
});
formatter.result({
  "duration": 116800,
  "status": "passed"
});
formatter.after({
  "duration": 911759700,
  "status": "passed"
});
formatter.uri("SignInPage.feature");
formatter.feature({
  "line": 1,
  "name": "Sign in page Test",
  "description": "User should be able to use the functionalities of the sign in page",
  "id": "sign-in-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5409393100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to sign in successfully",
  "description": "",
  "id": "sign-in-page-test;user-should-be-able-to-sign-in-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User can see the message \"Authentication\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 103200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInLink()"
});
formatter.result({
  "duration": 1895340700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication",
      "offset": 26
    }
  ],
  "location": "SignInSteps.userCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 81103600,
  "status": "passed"
});
formatter.after({
  "duration": 970566500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should not be able to log in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can see the error message \"\u003cerrorMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMsg"
      ],
      "line": 20,
      "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 21,
      "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 22,
      "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 23,
      "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 24,
      "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5921007100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not be able to log in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can see the error message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInLink()"
});
formatter.result({
  "duration": 2456895100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 111895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 135245700,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 1244084200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 43235700,
  "status": "passed"
});
formatter.after({
  "duration": 839628300,
  "status": "passed"
});
formatter.before({
  "duration": 4744049600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should not be able to log in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can see the error message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 48900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInLink()"
});
formatter.result({
  "duration": 1759541800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 148138500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 111338200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 1324585600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 46099900,
  "status": "passed"
});
formatter.after({
  "duration": 872925200,
  "status": "passed"
});
formatter.before({
  "duration": 5612545900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should not be able to log in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters username \"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can see the error message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 30400,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInLink()"
});
formatter.result({
  "duration": 2016050100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 225831200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 206581000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 918559100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 49014600,
  "status": "passed"
});
formatter.after({
  "duration": 780506400,
  "status": "passed"
});
formatter.before({
  "duration": 5094347200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should not be able to log in with invalid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-not-be-able-to-log-in-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters username \"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can see the error message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 40900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInLink()"
});
formatter.result({
  "duration": 2160859300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 252032300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 181153200,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 1257009200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 32
    }
  ],
  "location": "SignInSteps.userCanSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 54728000,
  "status": "passed"
});
formatter.after({
  "duration": 920167800,
  "status": "passed"
});
formatter.before({
  "duration": 6059856600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to log in with valid credentials",
  "description": "",
  "id": "sign-in-page-test;user-should-be-able-to-log-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enters username \"prime256@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters password \"Prime456\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should be able to see sign out link",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInLink()"
});
formatter.result({
  "duration": 2456380400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime256@gmail.com",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 213773700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime456",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 243528300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 1939188300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userShouldBeAbleToSeeSignOutLink()"
});
formatter.result({
  "duration": 86946700,
  "status": "passed"
});
formatter.after({
  "duration": 917554200,
  "status": "passed"
});
formatter.before({
  "duration": 5406432400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "user should logout successfully",
  "description": "",
  "id": "sign-in-page-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User clicks on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User enters username \"prime256@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enters password \"Prime456\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User clicks on sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User can see the sign in link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 44500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInLink()"
});
formatter.result({
  "duration": 2043894500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime256@gmail.com",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersUsername(String)"
});
formatter.result({
  "duration": 227557700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime456",
      "offset": 22
    }
  ],
  "location": "SignInSteps.userEntersPassword(String)"
});
formatter.result({
  "duration": 234748500,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignInButton()"
});
formatter.result({
  "duration": 2522189300,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClicksOnSignOutLink()"
});
formatter.result({
  "duration": 2252306100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userCanSeeTheSignInLinkDisplayed()"
});
formatter.result({
  "duration": 67619200,
  "status": "passed"
});
formatter.after({
  "duration": 955964700,
  "status": "passed"
});
formatter.uri("WomenCategory.feature");
formatter.feature({
  "line": 1,
  "name": "Women Category Page Test",
  "description": "User should be able to use the functionalities of the women category page",
  "id": "women-category-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5287243400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to navigate to women category page",
  "description": "",
  "id": "women-category-page-test;user-should-be-able-to-navigate-to-women-category-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User can see the women page displayed with message \"Women\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnWomenTab(String)"
});
formatter.result({
  "duration": 483000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.automation.cucumber.steps.WomenCategorySteps.userClicksOnWomenTab(String) in file:/C:/Users/shilp/IdeaProjects/automation-practice-cucumber/target/test-classes/\u0027 with pattern [^User clicks on Women tab$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: When User clicks on Women tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Women",
      "offset": 52
    }
  ],
  "location": "WomenCategorySteps.userCanSeeTheWomenPageDisplayedWithMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1889007200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User changes the quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User selects colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User can see popup message displayed \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can close the popup",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "size",
        "colour"
      ],
      "line": 23,
      "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 24,
      "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 25,
      "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 26,
      "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 27,
      "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5509277500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User changes the quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User selects colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User can see popup message displayed \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnWomenTab(String)"
});
formatter.result({
  "duration": 223000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.automation.cucumber.steps.WomenCategorySteps.userClicksOnWomenTab(String) in file:/C:/Users/shilp/IdeaProjects/automation-practice-cucumber/target/test-classes/\u0027 with pattern [^User clicks on Women tab$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: When User clicks on Women tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 28
    }
  ],
  "location": "WomenCategorySteps.userClicksOnTheProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userChangesTheQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.userSelectsSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.userSelectsColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 38
    }
  ],
  "location": "WomenCategorySteps.userCanSeePopupMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.userCanCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1865976100,
  "status": "passed"
});
formatter.before({
  "duration": 5455802600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User changes the quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User selects colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User can see popup message displayed \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnWomenTab(String)"
});
formatter.result({
  "duration": 175700,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.automation.cucumber.steps.WomenCategorySteps.userClicksOnWomenTab(String) in file:/C:/Users/shilp/IdeaProjects/automation-practice-cucumber/target/test-classes/\u0027 with pattern [^User clicks on Women tab$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: When User clicks on Women tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 28
    }
  ],
  "location": "WomenCategorySteps.userClicksOnTheProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userChangesTheQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.userSelectsSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.userSelectsColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 38
    }
  ],
  "location": "WomenCategorySteps.userCanSeePopupMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.userCanCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1830916200,
  "status": "passed"
});
formatter.before({
  "duration": 5899920800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User changes the quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User selects colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User can see popup message displayed \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnWomenTab(String)"
});
formatter.result({
  "duration": 172000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.automation.cucumber.steps.WomenCategorySteps.userClicksOnWomenTab(String) in file:/C:/Users/shilp/IdeaProjects/automation-practice-cucumber/target/test-classes/\u0027 with pattern [^User clicks on Women tab$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: When User clicks on Women tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 28
    }
  ],
  "location": "WomenCategorySteps.userClicksOnTheProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userChangesTheQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.userSelectsSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.userSelectsColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 38
    }
  ],
  "location": "WomenCategorySteps.userCanSeePopupMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.userCanCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2063732400,
  "status": "passed"
});
formatter.before({
  "duration": 6750146100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "user should add product to the cart successfully",
  "description": "",
  "id": "women-category-page-test;user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User changes the quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User selects size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User selects colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User clicks on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User can see popup message displayed \"Product successfully added to your shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user can close the popup",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnWomenTab(String)"
});
formatter.result({
  "duration": 161300,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.automation.cucumber.steps.WomenCategorySteps.userClicksOnWomenTab(String) in file:/C:/Users/shilp/IdeaProjects/automation-practice-cucumber/target/test-classes/\u0027 with pattern [^User clicks on Women tab$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: When User clicks on Women tab\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 28
    }
  ],
  "location": "WomenCategorySteps.userClicksOnTheProduct(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "WomenCategorySteps.userChangesTheQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 19
    }
  ],
  "location": "WomenCategorySteps.userSelectsSize(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 21
    }
  ],
  "location": "WomenCategorySteps.userSelectsColour(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.userClicksOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 38
    }
  ],
  "location": "WomenCategorySteps.userCanSeePopupMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WomenCategorySteps.userCanCloseThePopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3679036800,
  "status": "passed"
});
});