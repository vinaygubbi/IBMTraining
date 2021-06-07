$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity1_1.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "First Test",
  "description": "I want to use this template for my feature file",
  "id": "first-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@activity1_1"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Opening a webpage using Selenium",
  "description": "",
  "id": "first-test;opening-a-webpage-using-selenium",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on Google Home Page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#    And some other precondition"
    }
  ],
  "line": 27,
  "name": "User types in Cheese and hits ENTER",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#    And some other action"
    },
    {
      "line": 29,
      "value": "#    And yet another action"
    }
  ],
  "line": 30,
  "name": "Show how many search results were shown",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearchSteps.userIsOnGooglePage()"
});
formatter.result({
  "duration": 10875857600,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.userTypesInCheeseAndHitsENTER()"
});
formatter.result({
  "duration": 261140200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.showHowManySearchResultsWereShown()"
});
formatter.result({
  "duration": 1769853300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.closeTheBrowser()"
});
formatter.result({
  "duration": 1250038300,
  "status": "passed"
});
formatter.uri("Activity1_2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login Test",
  "description": "I want to use this template for my feature file",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@activity1_2"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 23,
      "value": "#  @tag1"
    }
  ],
  "line": 24,
  "name": "Testing Login",
  "description": "",
  "id": "login-test;testing-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#    And some other precondition"
    }
  ],
  "line": 27,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 28,
      "value": "#    And some other action"
    },
    {
      "line": 29,
      "value": "#    And yet another action"
    }
  ],
  "line": 30,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.loginPage()"
});
formatter.result({
  "duration": 8751319700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.enterCredentials()"
});
formatter.result({
  "duration": 431741700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.readTitleAndHeading()"
});
formatter.result({
  "duration": 133005500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1159327400,
  "status": "passed"
});
formatter.uri("Activity1_3.feature");
formatter.feature({
  "line": 2,
  "name": "Testing with Tags",
  "description": "",
  "id": "testing-with-tags",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity1_3"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Test for Simple Alert",
  "description": "",
  "id": "testing-with-tags;test-for-simple-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SimpleAlert"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks the Simple Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Read the text from it and print it",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the alert",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 9090816500,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openSimpleAlert()"
});
formatter.result({
  "duration": 103030800,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 9393600,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 6598100,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlert()"
});
formatter.result({
  "duration": 42811500,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1263080100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test for Confirm Alert",
  "description": "",
  "id": "testing-with-tags;test-for-confirm-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@ConfirmAlert"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User clicks the Confirm Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Read the text from it and print it",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Close the alert with Cancel",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 11033310000,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openConfirmAlert()"
});
formatter.result({
  "duration": 90529200,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 4312900,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 4097600,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlertWithCAncel()"
});
formatter.result({
  "duration": 39868300,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1051135500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Test for Prompt Alert",
  "description": "",
  "id": "testing-with-tags;test-for-prompt-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@PromptAlert"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User clicks the Prompt Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Read the text from it and print it",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Write a custom message in it",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Close the alert",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "AlertTestSteps.openPage()"
});
formatter.result({
  "duration": 11729914700,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.openPromptAlert()"
});
formatter.result({
  "duration": 119317500,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.switchFocus()"
});
formatter.result({
  "duration": 4890700,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.readAlert()"
});
formatter.result({
  "duration": 9923200,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.writeToPrompt()"
});
formatter.result({
  "duration": 20244200,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeAlert()"
});
formatter.result({
  "duration": 43509100,
  "status": "passed"
});
formatter.match({
  "location": "AlertTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1250697500,
  "status": "passed"
});
formatter.uri("Activity2_4.feature");
formatter.feature({
  "line": 2,
  "name": "Data driven test without Example",
  "description": "",
  "id": "data-driven-test-without-example",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity2_4"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Testing with Data from Scenario",
  "description": "",
  "id": "data-driven-test-without-example;testing-with-data-from-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"admin\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.loginPage()"
});
formatter.result({
  "duration": 11114733100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "LoginTestSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 434116500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.readTitleAndHeading()"
});
formatter.result({
  "duration": 83691300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1162831500,
  "status": "passed"
});
formatter.uri("Activity2_5.feature");
formatter.feature({
  "line": 2,
  "name": "Data driven test with Example",
  "description": "",
  "id": "data-driven-test-with-example",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity2_5"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testing with Data from Scenario",
  "description": "",
  "id": "data-driven-test-with-example;testing-with-data-from-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cUsernames\u003e\" and \"\u003cPasswords\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "data-driven-test-with-example;testing-with-data-from-scenario;",
  "rows": [
    {
      "cells": [
        "Usernames",
        "Passwords"
      ],
      "line": 11,
      "id": "data-driven-test-with-example;testing-with-data-from-scenario;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 12,
      "id": "data-driven-test-with-example;testing-with-data-from-scenario;;2"
    },
    {
      "cells": [
        "adminUser",
        "Password"
      ],
      "line": 13,
      "id": "data-driven-test-with-example;testing-with-data-from-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Testing with Data from Scenario",
  "description": "",
  "id": "data-driven-test-with-example;testing-with-data-from-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@activity2_5"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"admin\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.loginPage()"
});
formatter.result({
  "duration": 8344817200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "LoginTestSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 447640000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.readTitleAndHeading()"
});
formatter.result({
  "duration": 106552900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1496887600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Testing with Data from Scenario",
  "description": "",
  "id": "data-driven-test-with-example;testing-with-data-from-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@activity2_5"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"adminUser\" and \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.loginPage()"
});
formatter.result({
  "duration": 7846922300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminUser",
      "offset": 13
    },
    {
      "val": "Password",
      "offset": 29
    }
  ],
  "location": "LoginTestSteps.user_enters_and(String,String)"
});
formatter.result({
  "duration": 494435500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.readTitleAndHeading()"
});
formatter.result({
  "duration": 128675300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 1167314600,
  "status": "passed"
});
});