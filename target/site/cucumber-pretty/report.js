$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("reg1.feature");
formatter.feature({
  "line": 1,
  "name": "user Reg",
  "description": "",
  "id": "user-reg",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "102341 - Verify space data",
  "description": "",
  "id": "user-reg;102341---verify-space-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@space"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launched broeser with this URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered valid us pwd and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShopingStepdefination.i_call_the_space_data_service()"
});
formatter.result({
  "duration": 19315684200,
  "status": "passed"
});
formatter.match({
  "location": "ShopingStepdefination.i_entered_valid_us_pwd_and_click_on_login_button()"
});
formatter.result({
  "duration": 1419070400,
  "status": "passed"
});
formatter.match({
  "location": "ShopingStepdefination.i_should_navigate_to_home_page()"
});
formatter.result({
  "duration": 367141100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "102341 - Verify space data",
  "description": "",
  "id": "user-reg;102341---verify-space-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@space"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launched broeser with this URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I entered valid us pwd and click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShopingStepdefination.i_call_the_space_data_service()"
});
formatter.result({
  "duration": 5397221300,
  "status": "passed"
});
formatter.match({
  "location": "ShopingStepdefination.i_entered_valid_us_pwd_and_click_on_login_button()"
});
formatter.result({
  "duration": 1453312300,
  "status": "passed"
});
formatter.match({
  "location": "ShopingStepdefination.i_should_navigate_to_home_page()"
});
formatter.result({
  "duration": 266307100,
  "status": "passed"
});
});