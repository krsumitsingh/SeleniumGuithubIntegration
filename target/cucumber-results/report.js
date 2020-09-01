$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1_Estimates.feature");
formatter.feature({
  "line": 2,
  "name": "Estimates Features Test Cases",
  "description": "",
  "id": "estimates-features-test-cases",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create Customer For Using it throughout",
  "description": "",
  "id": "estimates-features-test-cases;create-customer-for-using-it-throughout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Common.CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"CRM.NewCustomerBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify \"CRM.CustomerLabel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"RandomNumber\" in \"Customer Code:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cCustomer_Name\u003e\" in \"Customer Name:Common.InputField\" then store as \"CustomerName\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"\u003cAddress_1\u003e\" in \"Address 1:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"\u003cAddress_2\u003e\" in \"Address 2:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"\u003cAddress_3\u003e\" in \"Address 3:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cCity\u003e\" in \"City:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"\u003cST_Prov\u003e\" in \"ST/Prov:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"\u003cZip_Postal\u003e\" in \"Zip/Postal:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"\u003cEmail\u003e\" in \"Email:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"CRM.AccountWarningMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "estimates-features-test-cases;create-customer-for-using-it-throughout;",
  "rows": [
    {
      "cells": [
        "Customer_Name",
        "Address_1",
        "Address_2",
        "Address_3",
        "City",
        "ST_Prov",
        "Zip_Postal",
        "Email"
      ],
      "line": 27,
      "id": "estimates-features-test-cases;create-customer-for-using-it-throughout;;1"
    },
    {
      "cells": [
        "Raul Da Vinci",
        "21st Malay Street",
        "Prinston Avenue",
        "Fairfield",
        "Boston",
        "VA",
        "96352",
        "SM@redrass.com"
      ],
      "line": 28,
      "id": "estimates-features-test-cases;create-customer-for-using-it-throughout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4804734600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Create Customer For Using it throughout",
  "description": "",
  "id": "estimates-features-test-cases;create-customer-for-using-it-throughout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Common.CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"CRM.NewCustomerBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify \"CRM.CustomerLabel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"RandomNumber\" in \"Customer Code:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"Raul Da Vinci\" in \"Customer Name:Common.InputField\" then store as \"CustomerName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"21st Malay Street\" in \"Address 1:Common.InputField\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"Prinston Avenue\" in \"Address 2:Common.InputField\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"Fairfield\" in \"Address 3:Common.InputField\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Boston\" in \"City:Common.InputField\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"VA\" in \"ST/Prov:Common.InputField\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"96352\" in \"Zip/Postal:Common.InputField\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"SM@redrass.com\" in \"Email:Common.InputField\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"CRM.AccountWarningMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 4458073300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8579652700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067068600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.CRM",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6025827000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CRMSerachLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1070525200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.NewCustomerBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7938048000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CustomerLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067331700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RandomNumber",
      "offset": 9
    },
    {
      "val": "Customer Code:Common.InputField",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1153597600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raul Da Vinci",
      "offset": 9
    },
    {
      "val": "Customer Name:Common.InputField",
      "offset": 28
    },
    {
      "val": "CustomerName",
      "offset": 76
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1203583100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21st Malay Street",
      "offset": 9
    },
    {
      "val": "Address 1:Common.InputField",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1247407100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prinston Avenue",
      "offset": 9
    },
    {
      "val": "Address 2:Common.InputField",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1229013100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairfield",
      "offset": 9
    },
    {
      "val": "Address 3:Common.InputField",
      "offset": 24
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1223429700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 9
    },
    {
      "val": "City:Common.InputField",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1199080000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VA",
      "offset": 9
    },
    {
      "val": "ST/Prov:Common.InputField",
      "offset": 17
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1209084300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "96352",
      "offset": 9
    },
    {
      "val": "Zip/Postal:Common.InputField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1187959400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SM@redrass.com",
      "offset": 9
    },
    {
      "val": "Email:Common.InputField",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1209799700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.AccountWarningMessage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3233075800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3222868900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CRMSerachLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 2535848000,
  "status": "passed"
});
formatter.after({
  "duration": 1591886700,
  "status": "passed"
});
formatter.before({
  "duration": 3263566300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create Estimate without Selecting Customer",
  "description": "",
  "id": "estimates-features-test-cases;create-estimate-without-selecting-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter \"Auto Estimate 1\" in \"Project:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I veify \"Please select a customer.\" in Alert",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I accept Alert",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on \"Cancel:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 4054016300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8361895100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1080982100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6079630800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067188100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8913875900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1064719600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Auto Estimate 1",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1170944400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3194499600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a customer.",
      "offset": 9
    }
  ],
  "location": "CommonStepDefinitions.i_Veriy_Text_InAlert(String)"
});
formatter.result({
  "duration": 5996000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_Accept_Alert()"
});
formatter.result({
  "duration": 6910600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancel:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3195517100,
  "status": "passed"
});
formatter.after({
  "duration": 1426943500,
  "status": "passed"
});
formatter.before({
  "duration": 3380088200,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Create New Estimate without any services in Department",
  "description": "",
  "id": "estimates-features-test-cases;create-new-estimate-without-any-services-in-department",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter \"DataMap-CustomerName\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 59,
      "value": "#And I enter \"Vivek Ranjan\" in \"Contact:Common.InputField_s\""
    },
    {
      "line": 60,
      "value": "#And I enter \"Sumit Singh\" in \"Sales Rep:Common.InputField_s\""
    }
  ],
  "line": 61,
  "name": "I enter \"Automation Estimate \" in \"Project:Common.InputField\" then store as \"Estimate\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 62,
      "value": "#And I click on \"Cancel:Common.Button\""
    },
    {
      "line": 63,
      "value": "#And I click on \"Common.Prompt_YES\""
    }
  ],
  "line": 64,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify \"Estimates.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I enter \"DataMap-Estimate\" in \"Estimates.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I verify \"DataMap-Estimate:Estimates.EstimateProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click on \"DataMap-Estimate:Estimates.EstimateProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 4190043300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8328580500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1068740100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5785488200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1071900500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8702563500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1075257400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1150148600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3451842600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12020218300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1072711800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3192059000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Estimate ",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 35
    },
    {
      "val": "Estimate",
      "offset": 77
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1198427200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3204166300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.ProjectFilterSearch",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 3234800900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate",
      "offset": 9
    },
    {
      "val": "Estimates.ProjectFilterSearch",
      "offset": 31
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1156469700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate:Estimates.EstimateProjectRow",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067504800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate:Estimates.EstimateProjectRow",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8337787100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1098445500,
  "status": "passed"
});
formatter.after({
  "duration": 1622583500,
  "status": "passed"
});
formatter.before({
  "duration": 3378913700,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Create Estimate with a Service",
  "description": "",
  "id": "estimates-features-test-cases;create-estimate-with-a-service",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I enter \"DataMap-CustomerName\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 85,
      "value": "#And I enter \"Vivek Ranjan\" in \"Contact:Common.InputField_s\""
    }
  ],
  "line": 86,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I enter \"***Automation Estimate***\" in \"Project:Common.InputField\" then store as \"Estimate\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I enter \"1250\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "I enter \"CASS\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 103,
      "value": "#And I click on \"Copies:Common.ServiceOption\""
    },
    {
      "line": 104,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    },
    {
      "line": 105,
      "value": "#\t\tAnd I enter \"222\" in \"0:Common.UnitPriceComboBox\""
    },
    {
      "line": 106,
      "value": "#\t\tThen I wait till \"Common.Loading\" is \"Invisible\""
    },
    {
      "line": 107,
      "value": "#And I enter \"$12.001\" in attribute \"value\" for \"0:Common.UnitPriceComboBox\""
    },
    {
      "line": 108,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    },
    {
      "line": 109,
      "value": "#And I click on \"0:Common.UnitPriceComboBox\""
    },
    {
      "line": 110,
      "value": "#And I wait for \"10\" seconds"
    }
  ],
  "line": 111,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3961803200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8348829100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1064216900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5441504500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061752700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6733754100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1065649300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1157056500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3228665800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12033589200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056735300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3197280500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 164564200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1070609300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3177119000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 178473800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1095095700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3196447200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 183897000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1086247000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3213116400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Automation Estimate***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 40
    },
    {
      "val": "Estimate",
      "offset": 82
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1235432700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1250",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1093560100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3242414200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12026458100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3291586500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12162233600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CASS",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1074073000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12061723300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3333903800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1979105400,
  "status": "passed"
});
formatter.after({
  "duration": 1499732900,
  "status": "passed"
});
formatter.before({
  "duration": 3371500000,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Create Estimate with services-Wizard",
  "description": "",
  "id": "estimates-features-test-cases;create-estimate-with-services-wizard",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 114,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I enter \"DataMap-CustomerName\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 128,
      "value": "#And I enter \"Vivek Ranjan\" in \"Contact:Common.InputField_s\""
    }
  ],
  "line": 129,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I enter \"***Automation Estimate***\" in \"Project:Common.InputField\" then store as \"Estimate\"",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I enter \"12500\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 141,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "I enter \"Address Setup 0\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 145,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 146,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I verified \"Common.WizardServicePopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "I verify \"Hand Match Perfect:Common.WizardServicePopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "I click on \"0:Common.WizardSuccessorSelected\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3794327400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8530775600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1060656600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5499638700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1065312000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6891082300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066828200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1150007500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3462996500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12050623800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067715400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3190598200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 162663500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1069879400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3200421600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 156997600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1067814800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3191508700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 154933900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1082731600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3187752900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Automation Estimate***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 40
    },
    {
      "val": "Estimate",
      "offset": 82
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1214219200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12500",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1144686800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3227976400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12013131000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3263261400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12069416000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Setup 0",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1100898800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999981800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3391127000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WizardServicePopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 60178400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hand Match Perfect:Common.WizardServicePopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056556700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.WizardSuccessorSelected",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3656960800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000243200,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7440500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3187459600,
  "status": "passed"
});
formatter.after({
  "duration": 1729535500,
  "status": "passed"
});
formatter.before({
  "duration": 3303931800,
  "status": "passed"
});
formatter.scenario({
  "line": 156,
  "name": "Open an Estimate and add SWF Calculator",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-add-swf-calculator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 155,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 157,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 158,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 170,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 173,
  "name": "I enter \"_Vehicle Wrap\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 174,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 175,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I verify \"Wide Format Estimate:Common.WideFormatEstimate\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 179,
      "value": "#And I enter \"18 x 24 Yard Sign\" in \"Products:Common.InputField_s\""
    }
  ],
  "line": 180,
  "name": "I click on \"wfEstimateProductType:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I enter \"18 x 24 Yard Sign\" in \"wfEstimateProductType:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I click on \"wideFormatStockId:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I enter \"Canvas60\" in \"wideFormatStockId:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I click on \"Common.WFMessageEditor\"",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "I enter \"Automation Script-Adding comments for simple wide format\" in \"Common.WFMessageEditor\"",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3596613500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8166377600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067865500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5436438400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000112600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058942900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3168239700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000119300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7302300600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12056999000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1069677400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999989900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3237547900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12057022300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3252658100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12021339200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Vehicle Wrap",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 28
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1094810900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999391600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3401250400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 1166062700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format Estimate:Common.WideFormatEstimate",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055684200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wfEstimateProductType:Common.SWFComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3227108400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18 x 24 Yard Sign",
      "offset": 9
    },
    {
      "val": "wfEstimateProductType:Common.SWFComboBox",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1067690900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wideFormatStockId:Common.SWFComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4222861400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canvas60",
      "offset": 9
    },
    {
      "val": "wideFormatStockId:Common.SWFComboBox",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1106499300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000147600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WFMessageEditor",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3270370600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Script-Adding comments for simple wide format",
      "offset": 9
    },
    {
      "val": "Common.WFMessageEditor",
      "offset": 71
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1111858300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3210755200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000006800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3825536100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999839700,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7342300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000526200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3198017400,
  "status": "passed"
});
formatter.after({
  "duration": 1241587400,
  "status": "passed"
});
formatter.before({
  "duration": 3349064900,
  "status": "passed"
});
formatter.scenario({
  "line": 197,
  "name": "Open an Estimate and add AWF Calculator",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-add-awf-calculator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 196,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 198,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 199,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 201,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 202,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 212,
  "name": "I click on \"1:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 214,
  "name": "I enter \"_Banner\" in \"1:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "I click on \"1:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "I click on \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "I clear the text \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I enter \"Vehicle Wrap\" in \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I click on \"Common.Description\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 224,
      "value": "#And I wait for \"5\" seconds"
    }
  ],
  "line": 225,
  "name": "I click on \"Common.CalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 230,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3408398800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8023336400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1060259100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5028861600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000160500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057815700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3173842500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000173600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7626236900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12027900900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066967500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999523300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3256157400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12062381800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3291748300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12047009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Banner",
      "offset": 9
    },
    {
      "val": "1:Common.ServiceComboBox",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1080083000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999832300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3432557200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 646265400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000202500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3269518400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 98901600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000118400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vehicle Wrap",
      "offset": 9
    },
    {
      "val": "Common.AWFTemplateName",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1063769800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Description",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3268356500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.CalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3284311900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000112300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4084784500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000195700,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 5505900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999474500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3189527100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 2521814200,
  "status": "passed"
});
formatter.after({
  "duration": 1489263900,
  "status": "passed"
});
formatter.before({
  "duration": 3440458100,
  "status": "passed"
});
formatter.scenario({
  "line": 235,
  "name": "Open an Estimate and add Print Calculator",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-add-print-calculator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 234,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 236,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 237,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 239,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I click on \"Print:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 249,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 250,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "I enter \".PS\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "I check \"Common.PrintCalculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 256,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 257,
  "name": "I click on \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I clear the text \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I enter \"52\" in \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 261,
      "value": "#And I click on \"Common.Description\""
    }
  ],
  "line": 262,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I click on \"Common.PrintCalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I click on \"Common.PrintCalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 267,
  "name": "I click on \"Common.PrintSubmitButton\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 268,
      "value": "#And I click on \"Common.PrintCancelButton\""
    }
  ],
  "line": 269,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 271,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3343461900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7985595200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066268300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5725110800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999770800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1064153200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3174281600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999473200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7006368000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12032589700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1075251400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999670700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Print:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3253807700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12055733200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3260254300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12039984300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".PS",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1073042700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999415500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3412379900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculator",
      "offset": 9
    }
  ],
  "location": "CommonStepDefinitions.i_check(String)"
});
formatter.result({
  "duration": 3417386800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12893351500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PCTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3363948000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PCTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 67878000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999257500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "52",
      "offset": 9
    },
    {
      "val": "Common.PCTemplateName",
      "offset": 17
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1091175200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 10001023200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3429212200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 9999512800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3315452800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 14457865500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintSubmitButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3338873200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000429600,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 1591150300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000170100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3216765900,
  "status": "passed"
});
formatter.after({
  "duration": 1361457900,
  "status": "passed"
});
formatter.before({
  "duration": 3353392600,
  "status": "passed"
});
formatter.scenario({
  "line": 275,
  "name": "Open an Estimate and add Attachment",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-add-attachment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 274,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 276,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 277,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 279,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 281,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 286,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I click on \"Attachments:Common.HeaderTabs\"",
  "keyword": "Then "
});
formatter.step({
  "line": 289,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 290,
  "name": "I upload an Attachment",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 291,
      "value": "#And I upload \"index4.jpg\""
    }
  ],
  "line": 292,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3597966500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8642465800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059626800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5574545700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000150400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058878800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3179812900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000195700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7938209100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12064290900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1065479400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachments:Common.HeaderTabs",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3195077500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12025116100,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_upload_an_Attachment()"
});
formatter.result({
  "duration": 62256026500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3223573500,
  "status": "passed"
});
formatter.after({
  "duration": 1215438200,
  "status": "passed"
});
formatter.before({
  "duration": 3397793400,
  "status": "passed"
});
formatter.scenario({
  "line": 295,
  "name": "Open an Estimate and Copy it",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-copy-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 294,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 296,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 297,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 299,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I verify \"Estimates.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I enter \"DataMap-Estimate\" in \"Estimates.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "I verify \"DataMap-Estimate:Estimates.EstimateProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "I click on \"DataMap-Estimate:Estimates.EstimateProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "I click on \"Copy:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 308,
      "value": "#And I wait for \"5\" seconds"
    }
  ],
  "line": 309,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I verify \"Estimates.CopyMessageBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "I click on \"Estimates.EstimateCopiedBtnOK\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 313,
      "value": "#And I wait for \"5\" seconds"
    }
  ],
  "line": 314,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3734187600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8468685400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1054269800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5844530800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000185700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.ProjectFilterSearch",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059764200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate",
      "offset": 9
    },
    {
      "val": "Estimates.ProjectFilterSearch",
      "offset": 31
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1186544200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate:Estimates.EstimateProjectRow",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056740300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate:Estimates.EstimateProjectRow",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7718156600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1064905400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999993000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Copy:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3187468800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12022340000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CopyMessageBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1068294300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999703900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateCopiedBtnOK",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7798089500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12044560200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1078423100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3175860100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000174600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4553560100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999782100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3182992200,
  "status": "passed"
});
formatter.after({
  "duration": 1431984400,
  "status": "passed"
});
formatter.before({
  "duration": 3613871800,
  "status": "passed"
});
formatter.scenario({
  "line": 323,
  "name": "Open an Estimate and Export it to an Order",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-export-it-to-an-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 322,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 324,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 325,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 327,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 328,
  "name": "I verify \"Estimates.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I enter \"DataMap-Estimate\" in \"Estimates.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 330,
  "name": "I verify \"DataMap-Estimate:Estimates.EstimateProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "I click on \"DataMap-Estimate:Estimates.EstimateProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "I click on \"Export to Order:Estimates.ExportToOrder\"",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "I verify \"Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "I click on \"Orders.ExportedToOrderOKBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "I verify \"Orders.AccountWarningMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "I click on \"Orders.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3838010600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8489207500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1069172400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5863390800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.ProjectFilterSearch",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066616200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate",
      "offset": 9
    },
    {
      "val": "Estimates.ProjectFilterSearch",
      "offset": 31
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1188756000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate:Estimates.EstimateProjectRow",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1073892900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate:Estimates.EstimateProjectRow",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8149241800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1080515300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Export to Order:Estimates.ExportToOrder",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3196731300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12047297700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1090713900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 10000814900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.ExportedToOrderOKBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 10120665900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 10000039200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.AccountWarningMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1064873900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3227183500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000088900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3212066400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8244787400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999779400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3155184800,
  "status": "passed"
});
formatter.after({
  "duration": 1466719700,
  "status": "passed"
});
formatter.before({
  "duration": 3463479100,
  "status": "passed"
});
formatter.scenario({
  "line": 348,
  "name": "Open an Estimate and Delete it",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-delete-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 347,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 349,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 350,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 353,
  "name": "I verify \"Estimates.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I enter \"DataMap-Estimate\" in \"Estimates.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "I verify \"DataMap-Estimate:Estimates.EstimateProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I click on \"DataMap-Estimate:Estimates.EstimateProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I click on \"Delete:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 361,
      "value": "#And I veify \"Are you sure you want to delete this estimate? \" in Alert"
    }
  ],
  "line": 362,
  "name": "I accept Alert",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 365,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3347623100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8797980600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1063431200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5448271900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.ProjectFilterSearch",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055885200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate",
      "offset": 9
    },
    {
      "val": "Estimates.ProjectFilterSearch",
      "offset": 31
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1173841700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate:Estimates.EstimateProjectRow",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056814300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Estimate:Estimates.EstimateProjectRow",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7687550400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057902600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000960800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3176924200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000516700,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_Accept_Alert()"
});
formatter.result({
  "duration": 4526900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 13084430100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062977700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999249300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3179103100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000526100,
  "status": "passed"
});
formatter.after({
  "duration": 1404469200,
  "status": "passed"
});
formatter.before({
  "duration": 3444679600,
  "status": "passed"
});
formatter.scenario({
  "line": 370,
  "name": "Open an Estimate and create Multiple Quantity and Order Export",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-create-multiple-quantity-and-order-export",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 369,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 371,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 372,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 374,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 375,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 376,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 377,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 378,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I click on \"Multiple Qtys:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 384,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "I enter \"25800\" in \"Estimates.MQTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I click on \"Estimates.MQUpdateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I click on \"Estimates.MQExportToOrder\"",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I verify \"Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "I click on \"Orders.ExportedToOrderOKBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "I verify \"Orders.AccountWarningMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "I click on \"Orders.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 398,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "And "
});
formatter.step({
  "line": 399,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3703660400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8063646900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061321100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5531355600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000173900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1073288300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3200602900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999874700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7292183900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12050459700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067376000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000503800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Multiple Qtys:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3201615300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 9999743900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25800",
      "offset": 9
    },
    {
      "val": "Estimates.MQTextBox",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1108325100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.MQUpdateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3216168800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12052065900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.MQExportToOrder",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3234694100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12008464700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1085765100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000126300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.ExportedToOrderOKBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8696953800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999647200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.AccountWarningMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1073485600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3181973700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999961500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3206009500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7946117300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000277900,
  "status": "passed"
});
formatter.after({
  "duration": 1888529200,
  "status": "passed"
});
formatter.before({
  "duration": 3333473900,
  "status": "passed"
});
formatter.scenario({
  "line": 403,
  "name": "Open an Estimate and Update the expected Qty - \"Yes\"",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-update-the-expected-qty---\"yes\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 402,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 404,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 405,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 407,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 408,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 412,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "I enter \"14580\" in \"Common.UpdateQtyField\"",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I click on \"Update:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I verified \"Common.UpdateQtyPopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "I verify \"Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I click on \"Common.QtyUpdatePopupYesButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 424,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3617032800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9439778600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057171300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5748696800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000387500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057340200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3166271200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999587100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7582638900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12041927500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1069305800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000595400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14580",
      "offset": 9
    },
    {
      "val": "Common.UpdateQtyField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1101573200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3202677800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000136800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UpdateQtyPopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 50568000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1063936400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.QtyUpdatePopupYesButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3258392400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000349200,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 5331300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3190066400,
  "status": "passed"
});
formatter.after({
  "duration": 1181299500,
  "status": "passed"
});
formatter.before({
  "duration": 3362017900,
  "status": "passed"
});
formatter.scenario({
  "line": 427,
  "name": "Open an Estimate and Update the expected Qty - \"No\"",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-update-the-expected-qty---\"no\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 426,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 428,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 429,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 431,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 432,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 433,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 434,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 435,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 438,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "I enter \"7450\" in \"Common.UpdateQtyField\"",
  "keyword": "And "
});
formatter.step({
  "line": 441,
  "name": "I click on \"Update:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 442,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "I verified \"Common.UpdateQtyPopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "I verify \"Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "I click on \"Common.QtyUpdatePopupNoButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 446,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 447,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 448,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3977574600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7896976800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1073596800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5606275900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999633800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1063484800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3181759000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000074600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7595886100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12011541600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1071047600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000676000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7450",
      "offset": 9
    },
    {
      "val": "Common.UpdateQtyField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1110641200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3202053700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000224000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UpdateQtyPopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 52717000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056539100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.QtyUpdatePopupNoButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3255528800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999799200,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 6355000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3184962000,
  "status": "passed"
});
formatter.after({
  "duration": 1264288300,
  "status": "passed"
});
formatter.before({
  "duration": 3383970600,
  "status": "passed"
});
formatter.scenario({
  "line": 451,
  "name": "Open an Estimate and Edit Services Description, Quantity in department tabs",
  "description": "",
  "id": "estimates-features-test-cases;open-an-estimate-and-edit-services-description,-quantity-in-department-tabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 450,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 452,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 453,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 454,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 455,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 456,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 459,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 463,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 465,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 466,
  "name": "I enter \"/Data Services - c21 Customizable Sell Sheet  -\" in \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 468,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 469,
  "name": "I clear the text \"0:Common.QuantityTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 470,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 471,
  "name": "I enter \"588.321\" in \"0:Common.QuantityTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 472,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 473,
  "name": "I click on \"0:Common.UnitPriceTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "I verify \"Keep existing Unit Price?:Common.UnitPricePopUp\"",
  "keyword": "And "
});
formatter.step({
  "line": 475,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 476,
  "name": "I click on \"Common.UnitPriceUpdateNoBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "I wait for \"4\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3712802700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8419318800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067617400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5318514200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000254200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059324500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3179184000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999645100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7504799400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12045178700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1083756500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000137300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3252676900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12025609000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/Data Services - c21 Customizable Sell Sheet  -",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 62
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1245469800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3219430200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12046045000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.QuantityTextBox",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 187045800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999453400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "588.321",
      "offset": 9
    },
    {
      "val": "0:Common.QuantityTextBox",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1065884800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999980300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.UnitPriceTextBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3253769500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep existing Unit Price?:Common.UnitPricePopUp",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1072773200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999182100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UnitPriceUpdateNoBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3238829300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4000227800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3188909200,
  "status": "passed"
});
formatter.after({
  "duration": 1297013500,
  "status": "passed"
});
formatter.uri("2_Orders.feature");
formatter.feature({
  "line": 2,
  "name": "Orders Features Test Cases",
  "description": "",
  "id": "orders-features-test-cases",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create Customer For Using it throughout",
  "description": "",
  "id": "orders-features-test-cases;create-customer-for-using-it-throughout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Common.CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"CRM.NewCustomerBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify \"CRM.CustomerLabel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"RandomNumber\" in \"Customer Code:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cCustomer_Name\u003e\" in \"Customer Name:Common.InputField\" then store as \"CustomerName\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"\u003cAddress_1\u003e\" in \"Address 1:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"\u003cAddress_2\u003e\" in \"Address 2:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"\u003cAddress_3\u003e\" in \"Address 3:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cCity\u003e\" in \"City:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"\u003cST_Prov\u003e\" in \"ST/Prov:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"\u003cZip_Postal\u003e\" in \"Zip/Postal:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"\u003cEmail\u003e\" in \"Email:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"CRM.AccountWarningMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "orders-features-test-cases;create-customer-for-using-it-throughout;",
  "rows": [
    {
      "cells": [
        "Customer_Name",
        "Address_1",
        "Address_2",
        "Address_3",
        "City",
        "ST_Prov",
        "Zip_Postal",
        "Email"
      ],
      "line": 27,
      "id": "orders-features-test-cases;create-customer-for-using-it-throughout;;1"
    },
    {
      "cells": [
        "John Cenna",
        "22nd Jackson Street",
        "Prinston Avenue",
        "Fairfield",
        "Boston",
        "VA",
        "96352",
        "Sam@redrass.com"
      ],
      "line": 28,
      "id": "orders-features-test-cases;create-customer-for-using-it-throughout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3308118900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Create Customer For Using it throughout",
  "description": "",
  "id": "orders-features-test-cases;create-customer-for-using-it-throughout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Common.CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"CRM.NewCustomerBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify \"CRM.CustomerLabel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"RandomNumber\" in \"Customer Code:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"John Cenna\" in \"Customer Name:Common.InputField\" then store as \"CustomerName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"22nd Jackson Street\" in \"Address 1:Common.InputField\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"Prinston Avenue\" in \"Address 2:Common.InputField\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"Fairfield\" in \"Address 3:Common.InputField\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Boston\" in \"City:Common.InputField\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"VA\" in \"ST/Prov:Common.InputField\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"96352\" in \"Zip/Postal:Common.InputField\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"Sam@redrass.com\" in \"Email:Common.InputField\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"CRM.AccountWarningMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3936087800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7041450400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1053342600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.CRM",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5070372500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CRMSerachLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1051278200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.NewCustomerBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7315600100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CustomerLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059224200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RandomNumber",
      "offset": 9
    },
    {
      "val": "Customer Code:Common.InputField",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1153911600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Cenna",
      "offset": 9
    },
    {
      "val": "Customer Name:Common.InputField",
      "offset": 25
    },
    {
      "val": "CustomerName",
      "offset": 73
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1208046900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22nd Jackson Street",
      "offset": 9
    },
    {
      "val": "Address 1:Common.InputField",
      "offset": 34
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1187604800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prinston Avenue",
      "offset": 9
    },
    {
      "val": "Address 2:Common.InputField",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1184308600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairfield",
      "offset": 9
    },
    {
      "val": "Address 3:Common.InputField",
      "offset": 24
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1177923700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 9
    },
    {
      "val": "City:Common.InputField",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1172141800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VA",
      "offset": 9
    },
    {
      "val": "ST/Prov:Common.InputField",
      "offset": 17
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1178932800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "96352",
      "offset": 9
    },
    {
      "val": "Zip/Postal:Common.InputField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1169841100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sam@redrass.com",
      "offset": 9
    },
    {
      "val": "Email:Common.InputField",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1188333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.AccountWarningMessage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3210132700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3191410500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CRMSerachLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1931706600,
  "status": "passed"
});
formatter.after({
  "duration": 1435840500,
  "status": "passed"
});
formatter.before({
  "duration": 3257056800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create Order without Selecting Customer",
  "description": "",
  "id": "orders-features-test-cases;create-order-without-selecting-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I verify \"New Order:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on \"New Order:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#And I enter \"Order Automation_Comments\" in \"Project:Common.InputField\""
    }
  ],
  "line": 40,
  "name": "I enter \"Order Automation_Comments\" in \"Orders.Project\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I veify \"Please select a customer.\" in Alert",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I accept Alert",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on \"Cancel:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3684289700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7669656300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055088500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5359002000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Order:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1060532200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Order:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7953867200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066610000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order Automation_Comments",
      "offset": 9
    },
    {
      "val": "Orders.Project",
      "offset": 40
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1219550200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3185601000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please select a customer.",
      "offset": 9
    }
  ],
  "location": "CommonStepDefinitions.i_Veriy_Text_InAlert(String)"
});
formatter.result({
  "duration": 1940300,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_Accept_Alert()"
});
formatter.result({
  "duration": 2854700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancel:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3188312700,
  "status": "passed"
});
formatter.after({
  "duration": 1513340300,
  "status": "passed"
});
formatter.before({
  "duration": 3463007800,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Create New Order without any services in Department",
  "description": "",
  "id": "orders-features-test-cases;create-new-order-without-any-services-in-department",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I verify \"New Order:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on \"New Order:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter \"DataMap-CustomerName\" in \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I verify \"Account Warning Message::Orders.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter \"Order without any service \" in \"Orders.Project\" then store as \"Order\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I verify \"Orders.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I enter \"DataMap-Order\" in \"Orders.ProjectFilterSearch\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I verify \"DataMap-Order:Orders.OrderProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on \"DataMap-Order:Orders.OrderProjectRow\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3587054100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7652246700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058509400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6009942600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Order:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061653300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Order:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 13737723100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1076871000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Orders.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1181367800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3460169700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12043044000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Orders.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059590000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3190932200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order without any service ",
      "offset": 9
    },
    {
      "val": "Orders.Project",
      "offset": 41
    },
    {
      "val": "Order",
      "offset": 72
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1252689400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3206044100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.ProjectFilterSearch",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 3291912300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Order",
      "offset": 9
    },
    {
      "val": "Orders.ProjectFilterSearch",
      "offset": 28
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1217907700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Order:Orders.OrderProjectRow",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1143170800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-Order:Orders.OrderProjectRow",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8753088400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1085608600,
  "status": "passed"
});
formatter.after({
  "duration": 1367575600,
  "status": "passed"
});
formatter.before({
  "duration": 3452494800,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Create Order with a Service",
  "description": "",
  "id": "orders-features-test-cases;create-order-with-a-service",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I verify \"New Order:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I click on \"New Order:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter \"DataMap-CustomerName\" in \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I verify \"Account Warning Message::Orders.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 82,
      "value": "#And I enter \"Vivek Ranjan\" in \"Contact:Common.InputField_s\""
    }
  ],
  "line": 83,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I enter \"Order with No Action service \" in \"Orders.Project\" then store as \"Order\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I enter \"1250\" in \"Orders.ExpectedQuantity\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "I click on \"0:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "I enter \"CASS\" in \"0:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 100,
      "value": "#And I click on \"Copies:Common.ServiceOption\""
    },
    {
      "line": 101,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    },
    {
      "line": 102,
      "value": "#\t\tAnd I enter \"222\" in \"0:Common.UnitPriceComboBox\""
    },
    {
      "line": 103,
      "value": "#\t\tThen I wait till \"Common.Loading\" is \"Invisible\""
    },
    {
      "line": 104,
      "value": "#And I enter \"$12.001\" in attribute \"value\" for \"0:Common.UnitPriceComboBox\""
    },
    {
      "line": 105,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    },
    {
      "line": 106,
      "value": "#And I click on \"0:Common.UnitPriceComboBox\""
    },
    {
      "line": 107,
      "value": "#And I wait for \"10\" seconds"
    }
  ],
  "line": 108,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3743897800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7684078700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067095100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6101214600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Order:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057110000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Order:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9769217800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1073881000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Orders.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1186029400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3703328500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12135556000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Orders.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061763900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3179246900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 200193500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1081281300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3194193100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 203065900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1075630200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3191587100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 192099000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1088933400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3217084900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order with No Action service ",
      "offset": 9
    },
    {
      "val": "Orders.Project",
      "offset": 44
    },
    {
      "val": "Order",
      "offset": 75
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1267488800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1250",
      "offset": 9
    },
    {
      "val": "Orders.ExpectedQuantity",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1100364000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3292657300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12058931600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Orders.OrderServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3320807300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12111364100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CASS",
      "offset": 9
    },
    {
      "val": "0:Orders.OrderServiceComboBox",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1095596400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12006426400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3347007900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 2990203800,
  "status": "passed"
});
formatter.after({
  "duration": 1455395200,
  "status": "passed"
});
formatter.before({
  "duration": 3542535500,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Create Order with services-Wizard",
  "description": "",
  "id": "orders-features-test-cases;create-order-with-services-wizard",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "I verify \"New Order:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I click on \"New Order:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I enter \"DataMap-CustomerName\" in \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I verify \"Account Warning Message::Orders.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I enter \"Order with Wizard service \" in \"Orders.Project\" then store as \"Order\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I enter \"1250\" in \"Orders.ExpectedQuantity\"",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "I click on \"0:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "I enter \"Address Setup 0\" in \"0:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 142,
      "value": "#And I click on \"Orders.OrderServiceWizard\""
    }
  ],
  "line": 143,
  "name": "I click on \"Common.POTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I verified \"Common.WizardServicePopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I verify \"Hand Match Perfect:Common.WizardServicePopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I click on \"0:Common.WizardSuccessorSelected\"",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3859903200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8645627600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057660800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5564555800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Order:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1060088500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Order:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8544438000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1070573500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Orders.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1176938300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3496114200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12045294400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Orders.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059324200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3191010300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 193351700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1074337200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3201756100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 220275100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1079817900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3208999400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 196894600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1093802400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3216079200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Order with Wizard service ",
      "offset": 9
    },
    {
      "val": "Orders.Project",
      "offset": 41
    },
    {
      "val": "Order",
      "offset": 72
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1312383200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1250",
      "offset": 9
    },
    {
      "val": "Orders.ExpectedQuantity",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1101925000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3284281000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12052531600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Orders.OrderServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3315998700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12443122900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Setup 0",
      "offset": 9
    },
    {
      "val": "0:Orders.OrderServiceComboBox",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1106458000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000286900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.POTextBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3453911600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WizardServicePopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 61881700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hand Match Perfect:Common.WizardServicePopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1052516200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.WizardSuccessorSelected",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3729085000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999599500,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7016600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3203401300,
  "status": "passed"
});
formatter.after({
  "duration": 2708983400,
  "status": "passed"
});
formatter.before({
  "duration": 3491468200,
  "status": "passed"
});
formatter.scenario({
  "line": 152,
  "name": "Open an Order and add SWF Calculator",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-add-swf-calculator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 151,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 153,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 154,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 159,
      "value": "#And I click on \"Common.ClearFilters\""
    },
    {
      "line": 160,
      "value": "#And I wait for \"5\" seconds"
    }
  ],
  "line": 161,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "I click on \"0:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "I enter \"_Vehicle Wrap\" in \"0:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 170,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 171,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 172,
      "value": "#And I click on \"Orders.OrderSimpleWideFormat\""
    }
  ],
  "line": 173,
  "name": "I click on \"Common.POTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "I verify \"Orders.WideFormatLabel\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 176,
      "value": "#And I enter \"18 x 24 Yard Sign\" in \"Products:Common.InputField_s\""
    }
  ],
  "line": 177,
  "name": "I click on \"wfEstimateProductType:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I enter \"18 x 24 Yard Sign\" in \"wfEstimateProductType:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I click on \"wideFormatStockId:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I enter \"Canvas60\" in \"wideFormatStockId:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I click on \"Common.WFMessageEditor\"",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I enter \"Automation Script-Adding comments for simple wide format\" in \"Common.WFMessageEditor\"",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 190,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3664637800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8130423800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062866600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5779972800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999652100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062744400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9323106200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12060269000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1076074400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000420600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3265702900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12036289200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Orders.OrderServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3328001800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12027027900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Vehicle Wrap",
      "offset": 9
    },
    {
      "val": "0:Orders.OrderServiceComboBox",
      "offset": 28
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1132603400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000316100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.POTextBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3405934600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 59508700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.WideFormatLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1241400000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wfEstimateProductType:Common.SWFComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3281908400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18 x 24 Yard Sign",
      "offset": 9
    },
    {
      "val": "wfEstimateProductType:Common.SWFComboBox",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1079553500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000203900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wideFormatStockId:Common.SWFComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4217449100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canvas60",
      "offset": 9
    },
    {
      "val": "wideFormatStockId:Common.SWFComboBox",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1111543100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000127300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WFMessageEditor",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3221369900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Script-Adding comments for simple wide format",
      "offset": 9
    },
    {
      "val": "Common.WFMessageEditor",
      "offset": 71
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1123506100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3220123400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000201900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4010868600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000290200,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 8042800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000082200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3200951300,
  "status": "passed"
});
formatter.after({
  "duration": 1306521100,
  "status": "passed"
});
formatter.before({
  "duration": 3275560700,
  "status": "passed"
});
formatter.scenario({
  "line": 194,
  "name": "Open an Order and add AWF Calculator",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-add-awf-calculator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 193,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 195,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 196,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 198,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 207,
  "name": "I click on \"1:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "I enter \"_Banner\" in \"1:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "I click on \"Common.POTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "I click on \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "I clear the text \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "I enter \"Vehicle Wrap\" in \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "I click on \"Common.Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "I click on \"Common.CalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 224,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3938658100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8091222500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057071300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6082281900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000130200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061565000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9726011100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12007155800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1074036000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000379900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3248317200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12018733900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Orders.OrderServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3321118400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12060511100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Banner",
      "offset": 9
    },
    {
      "val": "1:Orders.OrderServiceComboBox",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1107447300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999463700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.POTextBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3448822500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 1331510600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000733200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3279798300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 98188000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999482300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vehicle Wrap",
      "offset": 9
    },
    {
      "val": "Common.AWFTemplateName",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1064604400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Description",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3253878600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.CalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3210239300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000313400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4244222800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000119900,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7652700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999738100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3200157000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 3459829600,
  "status": "passed"
});
formatter.after({
  "duration": 1542731800,
  "status": "passed"
});
formatter.before({
  "duration": 3243323500,
  "status": "passed"
});
formatter.scenario({
  "line": 229,
  "name": "Open an Order and add Print Calculator",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-add-print-calculator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 228,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 230,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 231,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 233,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 234,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 236,
      "value": "#And I click on \"Common.ClearFilters\""
    },
    {
      "line": 237,
      "value": "#And I wait for \"5\" seconds"
    }
  ],
  "line": 238,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I click on \"Print:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 244,
  "name": "I click on \"0:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 246,
  "name": "I enter \".PS\" in \"0:Orders.OrderServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 248,
  "name": "I click on \"Common.POTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 249,
  "name": "I check \"Common.PrintCalculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 250,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 251,
  "name": "I click on \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 252,
  "name": "I clear the text \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "I enter \"52\" in \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 255,
      "value": "#And I click on \"Common.Description\""
    }
  ],
  "line": 256,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "I click on \"Common.PrintCalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I click on \"Common.PrintCalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 261,
  "name": "I click on \"Common.PrintSubmitButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 264,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3707939600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7811994600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056363100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5303656100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000169800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1096286300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 11056587400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12024744100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1070715900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000192300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Print:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3265587100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12064551300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Orders.OrderServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3355091400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12192513400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".PS",
      "offset": 9
    },
    {
      "val": "0:Orders.OrderServiceComboBox",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1087734000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999664500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.POTextBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3529466400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculator",
      "offset": 9
    }
  ],
  "location": "CommonStepDefinitions.i_check(String)"
});
formatter.result({
  "duration": 3666586700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12302620600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PCTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3378816000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PCTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 68470400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999660600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "52",
      "offset": 9
    },
    {
      "val": "Common.PCTemplateName",
      "offset": 17
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1050642200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 10000492600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3387280800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 9999743500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3311370500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 14962224400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintSubmitButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3339923500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000592400,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 931869400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999729900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3203885900,
  "status": "passed"
});
formatter.after({
  "duration": 1411976000,
  "status": "passed"
});
formatter.before({
  "duration": 3354406700,
  "status": "passed"
});
formatter.scenario({
  "line": 268,
  "name": "Open an Order and add Attachment",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-add-attachment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 267,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 269,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 270,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 272,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 273,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 275,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 279,
  "name": "I click on \"Attachments:Common.HeaderTabs\"",
  "keyword": "Then "
});
formatter.step({
  "line": 280,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 281,
  "name": "I upload an Attachment",
  "keyword": "And "
});
formatter.step({
  "line": 282,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3661637900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7794547200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057635300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5714277500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999600300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1052631900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9871304400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12008138100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1071729800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999595200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attachments:Common.HeaderTabs",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3222987900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12057219100,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_upload_an_Attachment()"
});
formatter.result({
  "duration": 62538706200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3203148300,
  "status": "passed"
});
formatter.after({
  "duration": 1344309500,
  "status": "passed"
});
formatter.before({
  "duration": 3399654900,
  "status": "passed"
});
formatter.scenario({
  "line": 285,
  "name": "Open an Order and Copy it",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-copy-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 284,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 286,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 287,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 289,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 290,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "I click on \"Copy:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I verify \"Orders.CopyMessageBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "I click on \"Orders.OrderCopiedBtnOK\"",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I verify \"Account Warning Message::Orders.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3323039900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7790093900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1060003800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5897279800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000432000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061545600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9210930100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12042660500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1069588800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999493900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Copy:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3211287500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12057905600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CopyMessageBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1069435400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999450400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderCopiedBtnOK",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3209750800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 17474035300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Orders.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1071367500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3232764000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999675800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3261902200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000084000,
  "status": "passed"
});
formatter.after({
  "duration": 1433439000,
  "status": "passed"
});
formatter.before({
  "duration": 3591929300,
  "status": "passed"
});
formatter.scenario({
  "line": 310,
  "name": "Open an Order and Export it to an Estimate",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-export-it-to-an-estimate",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 309,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 311,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 312,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 314,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 315,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "I click on \"Details:Common.HeaderTabs\"",
  "keyword": "Then "
});
formatter.step({
  "line": 322,
  "name": "I click on \"Estimate Export:Orders.ExportToEstimateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I verify \"Orders.ExportedToEstimateSuccessfullyMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I click on \"Orders.ExportedToEsitmateOKBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 330,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 331,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "I click on \"Common.Orders\"",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3298306700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7903500600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062034000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5777050100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999937200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058447400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9003582000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12063303000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1095807100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999953800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Details:Common.HeaderTabs",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3229742700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimate Export:Orders.ExportToEstimateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3200310000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12047894500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.ExportedToEstimateSuccessfullyMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066695500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000265600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.ExportedToEsitmateOKBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3229551300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999523200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062861200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3178514100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000187400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4692107800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4736509700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999527800,
  "status": "passed"
});
formatter.after({
  "duration": 1578289100,
  "status": "passed"
});
formatter.before({
  "duration": 3551731700,
  "status": "passed"
});
formatter.scenario({
  "line": 337,
  "name": "Open an Order and Delete it",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-delete-it",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 336,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 338,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 339,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 341,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 345,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "I click on \"Delete:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "I accept Alert",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3635322100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7778796600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057089000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5717485600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999908400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062564600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8903308700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12056742700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1074960500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000202900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3184905400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999864300,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_Accept_Alert()"
});
formatter.result({
  "duration": 3784400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 13446675300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1050721500,
  "status": "passed"
});
formatter.after({
  "duration": 1519007100,
  "status": "passed"
});
formatter.before({
  "duration": 3490396800,
  "status": "passed"
});
formatter.scenario({
  "line": 356,
  "name": "Open an Order and Update the expected Qty - \"Yes\"",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-update-the-expected-qty---\"yes\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 355,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 357,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 358,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 360,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 361,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I enter \"15890\" in \"Common.UpdateQtyField\"",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I click on \"Update:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "I verified \"Common.UpdateQtyPopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 371,
  "name": "I verify \"Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "I click on \"Common.QtyUpdatePopupYesButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 373,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 374,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 375,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3317333800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6912681900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1076125800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5535472800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000122600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059487300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9545865300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12047784900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1069986800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999423600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15890",
      "offset": 9
    },
    {
      "val": "Common.UpdateQtyField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1131493700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3217379800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000238600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UpdateQtyPopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 49445400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1052940300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.QtyUpdatePopupYesButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3256536300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000392900,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 4891900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3190068000,
  "status": "passed"
});
formatter.after({
  "duration": 2705102300,
  "status": "passed"
});
formatter.before({
  "duration": 3568680500,
  "status": "passed"
});
formatter.scenario({
  "line": 378,
  "name": "Open an Order and Update the expected Qty - \"No\"",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-update-the-expected-qty---\"no\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 377,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 379,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 380,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 382,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 383,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 386,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 387,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "I enter \"4450\" in \"Common.UpdateQtyField\"",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I click on \"Update:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 392,
  "name": "I verified \"Common.UpdateQtyPopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "I verify \"Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "I click on \"Common.QtyUpdatePopupNoButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 395,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 397,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3406649200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7590210600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059947700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5701540900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000496300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1076022700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 10472872600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12016832200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1070508900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000253200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4450",
      "offset": 9
    },
    {
      "val": "Common.UpdateQtyField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1166411100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3253016500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000061000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UpdateQtyPopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 53760400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058377000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.QtyUpdatePopupNoButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3313929400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000316400,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 5284300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3191426600,
  "status": "passed"
});
formatter.after({
  "duration": 3980534400,
  "status": "passed"
});
formatter.before({
  "duration": 3408929100,
  "status": "passed"
});
formatter.scenario({
  "line": 400,
  "name": "Open an Order and Edit Services Description, Quantity in department tabs",
  "description": "",
  "id": "orders-features-test-cases;open-an-order-and-edit-services-description,-quantity-in-department-tabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 399,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 401,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 402,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 404,
  "name": "I click on \"Common.Orders\"",
  "keyword": "When "
});
formatter.step({
  "line": 405,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "I verify \"Orders.OrderSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 407,
  "name": "I click on \"Orders.OrderNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 409,
  "name": "I verify \"Orders.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 412,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I enter \"/Data Services - c21 Customizable Sell Sheet  -\" in \"0:Orders.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "I clear the text \"0:Orders.QuantityTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I enter \"988.321\" in \"0:Orders.QuantityTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "I click on \"0:Orders.UnitPriceTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I verify \"Keep existing Unit Price?:Orders.UnitPricePopUp\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "I click on \"Common.UnitPriceUpdateNoBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 424,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3916037300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8007228500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058176100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Orders",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6186760100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000472100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1073407200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.OrderNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9347264800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12039180000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1074912700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999719400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3254852400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12009016400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/Data Services - c21 Customizable Sell Sheet  -",
      "offset": 9
    },
    {
      "val": "0:Orders.ServiceDescriptionEditBox",
      "offset": 62
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1287939400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3211816300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12056683600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Orders.QuantityTextBox",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 223127200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000163200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "988.321",
      "offset": 9
    },
    {
      "val": "0:Orders.QuantityTextBox",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1073754900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000082300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Orders.UnitPriceTextBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3283747500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep existing Unit Price?:Orders.UnitPricePopUp",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1068667300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000090700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UnitPriceUpdateNoBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3294092100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999870200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3197209500,
  "status": "passed"
});
formatter.after({
  "duration": 2514948100,
  "status": "passed"
});
formatter.uri("4_EstimatesTaxes.feature");
formatter.feature({
  "line": 2,
  "name": "Estimates Taxes Test Cases",
  "description": "",
  "id": "estimates-taxes-test-cases",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create Customer For Using it throughout",
  "description": "",
  "id": "estimates-taxes-test-cases;create-customer-for-using-it-throughout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Common.CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"CRM.NewCustomerBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify \"CRM.CustomerLabel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"RandomNumber\" in \"Customer Code:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cCustomer_Name\u003e\" in \"Customer Name:Common.InputField\" then store as \"CustomerName\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"\u003cAddress_1\u003e\" in \"Address 1:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"\u003cAddress_2\u003e\" in \"Address 2:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"\u003cAddress_3\u003e\" in \"Address 3:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cCity\u003e\" in \"City:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"\u003cST_Prov\u003e\" in \"ST/Prov:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"\u003cZip_Postal\u003e\" in \"Zip/Postal:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"\u003cEmail\u003e\" in \"Email:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"CRM.AccountWarningMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \"CRM.TaxableCheckBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I clear the text \"CRM.TaxJurisdictionComboBox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I enter \"ARKANSAS\" in \"CRM.TaxJurisdictionComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "estimates-taxes-test-cases;create-customer-for-using-it-throughout;",
  "rows": [
    {
      "cells": [
        "Customer_Name",
        "Address_1",
        "Address_2",
        "Address_3",
        "City",
        "ST_Prov",
        "Zip_Postal",
        "Email"
      ],
      "line": 30,
      "id": "estimates-taxes-test-cases;create-customer-for-using-it-throughout;;1"
    },
    {
      "cells": [
        "Jean Claude",
        "23st Malay Street",
        "Richmond Avenue",
        "Fairfield",
        "Boston",
        "VA",
        "96300",
        "JC@redrass.com"
      ],
      "line": 31,
      "id": "estimates-taxes-test-cases;create-customer-for-using-it-throughout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3330446600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Create Customer For Using it throughout",
  "description": "",
  "id": "estimates-taxes-test-cases;create-customer-for-using-it-throughout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    },
    {
      "line": 4,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Common.CRM\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"CRM.NewCustomerBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify \"CRM.CustomerLabel\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"RandomNumber\" in \"Customer Code:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter \"Jean Claude\" in \"Customer Name:Common.InputField\" then store as \"CustomerName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"23st Malay Street\" in \"Address 1:Common.InputField\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"Richmond Avenue\" in \"Address 2:Common.InputField\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"Fairfield\" in \"Address 3:Common.InputField\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Boston\" in \"City:Common.InputField\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"VA\" in \"ST/Prov:Common.InputField\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"96300\" in \"Zip/Postal:Common.InputField\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \"JC@redrass.com\" in \"Email:Common.InputField\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"CRM.AccountWarningMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \"CRM.TaxableCheckBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I clear the text \"CRM.TaxJurisdictionComboBox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I enter \"ARKANSAS\" in \"CRM.TaxJurisdictionComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify \"CRM.CRMSerachLabel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3762366000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7581701800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1090965600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.CRM",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5414618200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CRMSerachLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1060651700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.NewCustomerBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6512009500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CustomerLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059561900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RandomNumber",
      "offset": 9
    },
    {
      "val": "Customer Code:Common.InputField",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1145896800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jean Claude",
      "offset": 9
    },
    {
      "val": "Customer Name:Common.InputField",
      "offset": 26
    },
    {
      "val": "CustomerName",
      "offset": 74
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1212952100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23st Malay Street",
      "offset": 9
    },
    {
      "val": "Address 1:Common.InputField",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1183491400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Richmond Avenue",
      "offset": 9
    },
    {
      "val": "Address 2:Common.InputField",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1189701500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairfield",
      "offset": 9
    },
    {
      "val": "Address 3:Common.InputField",
      "offset": 24
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1176055000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boston",
      "offset": 9
    },
    {
      "val": "City:Common.InputField",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1171741200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VA",
      "offset": 9
    },
    {
      "val": "ST/Prov:Common.InputField",
      "offset": 17
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1165847600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "96300",
      "offset": 9
    },
    {
      "val": "Zip/Postal:Common.InputField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1177200900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JC@redrass.com",
      "offset": 9
    },
    {
      "val": "Email:Common.InputField",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1181633500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.AccountWarningMessage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3213934100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.TaxableCheckBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3179697100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.TaxJurisdictionComboBox",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 199085200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ARKANSAS",
      "offset": 9
    },
    {
      "val": "CRM.TaxJurisdictionComboBox",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1070490000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3211210400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CRM.CRMSerachLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1920630400,
  "status": "passed"
});
formatter.after({
  "duration": 1463257400,
  "status": "passed"
});
formatter.before({
  "duration": 3556879300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "",
  "description": "Create Estimate with customer and service both are taxble and Service is No Launch Action",
  "id": "estimates-taxes-test-cases;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \"DataMap-CustomerName\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter \"***Customer and service both are taxble***\" in \"Project:Common.InputField\" then store as \"Estimate\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter \"1250\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I enter \"CASS\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on \"Common.DateDue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I wait for \"4\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "checked \"182.04\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3536711000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7576356200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058309900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5340963300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056575000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6784062500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067194800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1142807700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3446255600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12035170400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066506800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3174573200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 173767800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1066975800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3177544900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 162484700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1065931900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3170399800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 156327500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1099680200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3185307100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer and service both are taxble***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 57
    },
    {
      "val": "Estimate",
      "offset": 99
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1244207400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1250",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1118374500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3216257300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12045848200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3259215200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12321864500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CASS",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1089390400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000435300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.DateDue",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3367655200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000273400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3196188900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4000192400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "182.04",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1046705500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4697647300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1050862800,
  "status": "passed"
});
formatter.after({
  "duration": 1477461300,
  "status": "passed"
});
formatter.before({
  "duration": 3474689900,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "",
  "description": "Customer and service both are taxable where service is Wizard launch service.",
  "id": "estimates-taxes-test-cases;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 77,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I enter \"DataMap-CustomerName\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 89,
      "value": "#And I enter \"Vivek Ranjan\" in \"Contact:Common.InputField_s\""
    }
  ],
  "line": 90,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I enter \"***Customer and wizard service both are taxble***\" in \"Project:Common.InputField\" then store as \"Estimate\"",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I enter \"4850\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "I enter \"Address Setup 0\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I verified \"Common.WizardServicePopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I verify \"Hand Match Perfect:Common.WizardServicePopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I click on \"0:Common.WizardSuccessorSelected\"",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "I click on \"Common.DateDue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "I wait for \"4\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "checked \"323.74\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3888750800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8431141900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061926400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5332531000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055706200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6948728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059615800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1148537400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3253912800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12007292700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058584800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3174435700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 158597300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1072598000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3201478400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 174950700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1062672200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3163262600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 159232600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1079938500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3211628500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer and wizard service both are taxble***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 64
    },
    {
      "val": "Estimate",
      "offset": 106
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1258032100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4850",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1103416600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3230142900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12049140600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3270842500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12166110500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Setup 0",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1095378700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999692700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3420737700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WizardServicePopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 76579000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hand Match Perfect:Common.WizardServicePopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055361300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.WizardSuccessorSelected",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3611903500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999765300,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7373300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999841900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.DateDue",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3245193100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000048600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3188249000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3999962600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "323.74",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1047127800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4706812400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056460500,
  "status": "passed"
});
formatter.after({
  "duration": 1477903300,
  "status": "passed"
});
formatter.before({
  "duration": 3444563600,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "Customer Taxable and Service No Launch Non Taxable.",
  "description": "",
  "id": "estimates-taxes-test-cases;customer-taxable-and-service-no-launch-non-taxable.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 123,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "I enter \"DataMap-CustomerName\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "I click on \"DataMap-CustomerName:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "I enter \"***Customer taxable and no launch service non taxable***\" in \"Project:Common.InputField\" then store as \"Estimate\"",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "I enter \"3200\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "I enter \"CASS\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "I click on \"Common.DateDue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "I click on \"0:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "I click on \"Common.ServiceInfoTaxableCheckbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 163,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "I wait for \"4\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "checked \"150.00\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3448750700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7333457100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057389500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5070863400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067504600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7431697900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062917800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 35
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1147912000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DataMap-CustomerName:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3291098300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12012553000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059621200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3195488300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 160094500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1064842600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3190098600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 157731600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1067634600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3173929200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 154079800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1090730700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3181402600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer taxable and no launch service non taxable***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 71
    },
    {
      "val": "Estimate",
      "offset": 113
    }
  ],
  "location": "CommonStepDefinitions.iEnterTextAndStore(String,String,String)"
});
formatter.result({
  "duration": 1316234800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3200",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1094611800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3240799900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12064220000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3275917700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12187886400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CASS",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1110302500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12015446600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.DateDue",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3386404400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3236760400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 637241900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1054433900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoTaxableCheckbox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3845562500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000193900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3865485200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000030400,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7292700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12035880100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3236010000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3999675700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150.00",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1052890700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5034790700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056400000,
  "status": "passed"
});
formatter.after({
  "duration": 1328224700,
  "status": "passed"
});
formatter.before({
  "duration": 3456977100,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "Customer Taxable and Service Wizard Non Taxable.",
  "description": "",
  "id": "estimates-taxes-test-cases;customer-taxable-and-service-wizard-non-taxable.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 170,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 175,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 185,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 186,
  "name": "I click on \"1:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "I enter \"Address Setup 0\" in \"1:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "I click on \"1:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "I verified \"Common.WizardServicePopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I verify \"Hand Match Perfect:Common.WizardServicePopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "I click on \"0:Common.WizardSuccessorSelected\"",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "I click on \"1:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 198,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "I click on \"Common.ServiceInfoTaxableCheckbox\"",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 202,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 204,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "I wait for \"4\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "checked \"326.00\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 208,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3621516400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7948424100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061614200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5356104000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000606800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058053100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3177370300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000246200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7317977000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12020400400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066843100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000353600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3245338500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12033038400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3264193100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12486880800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Setup 0",
      "offset": 9
    },
    {
      "val": "1:Common.ServiceComboBox",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1160929600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999955300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3414658300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WizardServicePopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 69343100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hand Match Perfect:Common.WizardServicePopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056749400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.WizardSuccessorSelected",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3662521000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999639900,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 6081200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3281856100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 316761300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1054046700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoTaxableCheckbox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3912527300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999607100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3944235200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000008200,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7329600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12044287900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3205282200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4000272900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "326.00",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1044836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4879013700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058968300,
  "status": "passed"
});
formatter.after({
  "duration": 1413915700,
  "status": "passed"
});
formatter.before({
  "duration": 3386655900,
  "status": "passed"
});
formatter.scenario({
  "line": 213,
  "name": "Customer Non Taxable and Services Taxable",
  "description": "",
  "id": "estimates-taxes-test-cases;customer-non-taxable-and-services-taxable",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 212,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 214,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 215,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 217,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "I enter \"Action Mailing\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "I click on \"Action Mailing:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "I enter \"***Customer non taxable and services taxable***\" in \"Project:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "I click on \"Common.TaxableCheckBox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 238,
  "name": "I enter \"14250\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 240,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "I enter \"CASS\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 245,
  "name": "I click on \"Common.DateDue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 246,
  "name": "I click on \"0:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 249,
      "value": "#And I click on \"Common.ServiceInfoTaxableCheckbox\""
    }
  ],
  "line": 250,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 254,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 255,
  "name": "I click on \"1:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 257,
  "name": "I enter \"Address Setup 0\" in \"1:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "I click on \"1:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "I verified \"Common.WizardServicePopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "I verify \"Hand Match Perfect:Common.WizardServicePopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "I click on \"0:Common.WizardSuccessorSelected\"",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 265,
  "name": "I click on \"1:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 266,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 267,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 268,
      "value": "#And I click on \"Common.ServiceInfoTaxableCheckbox\""
    },
    {
      "line": 269,
      "value": "#And I wait for \"2\" seconds"
    }
  ],
  "line": 270,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 271,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 273,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 274,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 275,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "checked \"997.50\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 277,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 278,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3373281700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7192306900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058009700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5552717500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057068900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7149138700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059883100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1133435800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3197123900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12026183600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056888300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3209311100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 163339500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1068923500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3176471200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 202594300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1065849100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3167138300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 223336000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1166152000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3172588200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer non taxable and services taxable***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 62
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1231748800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.TaxableCheckBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3181250000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12034044200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14250",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1129272800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3247974100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12047579400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3270039800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12859126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CASS",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1077674600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12060618300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.DateDue",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3403842200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3232086400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 390880000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1052885700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000637600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3777766800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999701300,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 4166100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12023632100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3259822800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12042504500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Setup 0",
      "offset": 9
    },
    {
      "val": "1:Common.ServiceComboBox",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1099958300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999815600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3440567800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WizardServicePopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 92075500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hand Match Perfect:Common.WizardServicePopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059360400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.WizardSuccessorSelected",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3643059200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999840200,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7218800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3230756800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 46547900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055555800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3764247400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000284700,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7221300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12016059300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3220285500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000034900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "997.50",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1056891300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5596163100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066499100,
  "status": "passed"
});
formatter.after({
  "duration": 1476938800,
  "status": "passed"
});
formatter.before({
  "duration": 3534448500,
  "status": "passed"
});
formatter.scenario({
  "line": 281,
  "name": "Customer and Services SWF Taxable.",
  "description": "",
  "id": "estimates-taxes-test-cases;customer-and-services-swf-taxable.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 280,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 282,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 283,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 285,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 286,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 288,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 289,
  "name": "I enter \"Action Mailing\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 290,
  "name": "I click on \"Action Mailing:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 293,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 300,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 302,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 303,
  "name": "I enter \"***Customer taxable and SWF services taxable***\" in \"Project:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 304,
      "value": "#Then I click on \"Common.TaxableCheckBox\""
    },
    {
      "line": 305,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 306,
  "name": "I enter \"16800\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 308,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 309,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 311,
  "name": "I enter \"_Yard Sign\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 312,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 313,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 314,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 316,
  "name": "I verify \"Wide Format Estimate:Common.WideFormatEstimate\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 317,
      "value": "#And I enter \"18 x 24 Yard Sign\" in \"Products:Common.InputField_s\""
    }
  ],
  "line": 318,
  "name": "I click on \"wfEstimateProductType:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "I enter \"18 x 24 Yard Sign\" in \"wfEstimateProductType:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 320,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "I click on \"wideFormatStockId:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "I enter \"Canvas60\" in \"wideFormatStockId:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 323,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 324,
  "name": "I click on \"Common.WFMessageEditor\"",
  "keyword": "And "
});
formatter.step({
  "line": 325,
  "name": "I enter \"Automation Script-Adding comments for simple wide format\" in \"Common.WFMessageEditor\"",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 328,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 330,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "I click on \"0:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 334,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 335,
      "value": "#And I click on \"Common.ServiceInfoTaxableCheckbox\""
    },
    {
      "line": 336,
      "value": "#And I wait for \"2\" seconds"
    }
  ],
  "line": 337,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 338,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 339,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 340,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 341,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 342,
  "name": "checked \"221356.80\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 343,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3884663000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 10390302400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1071570900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6123674700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1072999800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7058212400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1063097800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1156136800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3362759000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12039469200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062357900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3301257300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 151957900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1063613700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3202536800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 217333800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1086099000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3498981300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 157187900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1133115800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3194158600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer taxable and SWF services taxable***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 62
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1223306600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16800",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1156105400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3548006400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12060428800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3318226500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12063910800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Yard Sign",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1089179600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000318400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3377243600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 49256300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format Estimate:Common.WideFormatEstimate",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1107451600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wfEstimateProductType:Common.SWFComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3225168700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18 x 24 Yard Sign",
      "offset": 9
    },
    {
      "val": "wfEstimateProductType:Common.SWFComboBox",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1090497500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000219200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wideFormatStockId:Common.SWFComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4189653300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canvas60",
      "offset": 9
    },
    {
      "val": "wideFormatStockId:Common.SWFComboBox",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1095983100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999615400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WFMessageEditor",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3230022000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Script-Adding comments for simple wide format",
      "offset": 9
    },
    {
      "val": "Common.WFMessageEditor",
      "offset": 71
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1122559500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3216267700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000089200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4036796500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000400100,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7335500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000564900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3255037500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 384628100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055650400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3745856900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000249400,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 5613200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3185623200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999902200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "221356.80",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 24
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1049056300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4652782100,
  "status": "passed"
});
formatter.after({
  "duration": 1290155400,
  "status": "passed"
});
formatter.before({
  "duration": 3345449000,
  "status": "passed"
});
formatter.scenario({
  "line": 346,
  "name": "Customer and Services AWF Taxable.",
  "description": "",
  "id": "estimates-taxes-test-cases;customer-and-services-awf-taxable.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 345,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 347,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 348,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 350,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 351,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "I enter \"Action Mailing\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "I click on \"Action Mailing:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 356,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 358,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 360,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 361,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 362,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 366,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 368,
  "name": "I enter \"***Customer taxable and AWF services taxable***\" in \"Project:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 369,
      "value": "#Then I click on \"Common.TaxableCheckBox\""
    },
    {
      "line": 370,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 371,
  "name": "I enter \"1680\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 372,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 373,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 374,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 376,
  "name": "I enter \"_Banner\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 377,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 378,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "I click on \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 382,
  "name": "I clear the text \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "I enter \"Vehicle Wrap\" in \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 385,
  "name": "I click on \"Common.Description\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 386,
      "value": "#And I wait for \"5\" seconds"
    }
  ],
  "line": 387,
  "name": "I click on \"Common.CalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 390,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 392,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "I click on \"0:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 394,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 395,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 396,
      "value": "#And I click on \"Common.ServiceInfoTaxableCheckbox\""
    },
    {
      "line": 397,
      "value": "#And I wait for \"2\" seconds"
    }
  ],
  "line": 398,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 399,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 401,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 402,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 403,
  "name": "checked \"2449.23\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 404,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3593927900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7843858600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1065974600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5605718900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058784100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6630664100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066295800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1129280200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3192571400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12010045200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1071429000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3195559900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 185465300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1093851700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3201845200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 156465500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1067208500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3177060900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 156724500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1124009100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3168931900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer taxable and AWF services taxable***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 62
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1222075800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1680",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1096853200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3268276300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12016209700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3259780700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12009882100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Banner",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1091884900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000354500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3396135000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 965087900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000011300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3281589900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 99173200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000367500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vehicle Wrap",
      "offset": 9
    },
    {
      "val": "Common.AWFTemplateName",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1063635200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Description",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3279830700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.CalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3264196900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999651300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4062707900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000138200,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7915100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999551500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3249758600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 46182500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1049461100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4039291600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999837100,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7444700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3189389400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999933600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2449.23",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1122699300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5072697000,
  "status": "passed"
});
formatter.after({
  "duration": 1608332900,
  "status": "passed"
});
formatter.before({
  "duration": 3473613800,
  "status": "passed"
});
formatter.scenario({
  "line": 407,
  "name": "Open an Estimate and add Print Calculator",
  "description": "",
  "id": "estimates-taxes-test-cases;open-an-estimate-and-add-print-calculator",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 406,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 408,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 409,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 411,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 412,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 415,
  "name": "I enter \"Action Mailing\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 416,
  "name": "I click on \"Action Mailing:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 418,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 419,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 421,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 422,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 423,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 424,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 426,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 427,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 429,
  "name": "I enter \"***Customer taxable and PC services taxable***\" in \"Project:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "I click on \"Common.TaxableCheckBox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 431,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 432,
  "name": "I enter \"9850\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 433,
  "name": "I click on \"Print:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 434,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 435,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 436,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 437,
  "name": "I enter \".PS\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 438,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 440,
  "name": "I check \"Common.PrintCalculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 441,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 442,
  "name": "I click on \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "I clear the text \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 444,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 445,
  "name": "I enter \"52\" in \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 446,
      "value": "#And I click on \"Common.Description\""
    }
  ],
  "line": 447,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "I click on \"Common.PrintCalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 449,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 450,
  "name": "I click on \"Common.PrintCalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 451,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 452,
  "name": "I click on \"Common.PrintSubmitButton\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 453,
      "value": "#And I click on \"Common.PrintCancelButton\""
    }
  ],
  "line": 454,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 455,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 456,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 457,
  "name": "I click on \"0:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 458,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 459,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 460,
      "value": "#And I click on \"Common.ServiceInfoTaxableCheckbox\""
    },
    {
      "line": 461,
      "value": "#And I wait for \"2\" seconds"
    }
  ],
  "line": 462,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 463,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 464,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 465,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 466,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 467,
  "name": "checked \"8170.96\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 468,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 4236160300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8792665400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1056296100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5535878900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057218900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6813283100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059482300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1130952800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3204170100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12018582000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1063796200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3176131800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 168072400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1071501500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3197837000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 155502200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1066570900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3187221200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 158984200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1129800200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3189161000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer taxable and PC services taxable***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 61
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1219623700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.TaxableCheckBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3195057200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12050715100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9850",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1139219300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Print:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3259688300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12008597000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3299710100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12044244300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".PS",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1068406200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000222900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3416045500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculator",
      "offset": 9
    }
  ],
  "location": "CommonStepDefinitions.i_check(String)"
});
formatter.result({
  "duration": 4525143400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 13083449800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PCTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3418381700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PCTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 74642900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000100900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "52",
      "offset": 9
    },
    {
      "val": "Common.PCTemplateName",
      "offset": 17
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1061518200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 9999823400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3428283700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 9999708000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3304650800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 14142382700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintSubmitButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3406863600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999794000,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 879791600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000333800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4255245300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 48614800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057946900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3742379200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999898800,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7219700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3187149800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999882300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8170.96",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1051683500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4625873500,
  "status": "passed"
});
formatter.after({
  "duration": 1447423000,
  "status": "passed"
});
formatter.before({
  "duration": 3403415600,
  "status": "passed"
});
formatter.scenario({
  "line": 471,
  "name": "Customer Non Taxable and Services AWF Taxable.",
  "description": "",
  "id": "estimates-taxes-test-cases;customer-non-taxable-and-services-awf-taxable.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 470,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 472,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 473,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 474,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 475,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 476,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 477,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 479,
  "name": "I enter \"Action Mailing\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "I click on \"Action Mailing:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 483,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 485,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 486,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 487,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 488,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 489,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 490,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 491,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 492,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 493,
  "name": "I enter \"***Customer non taxable and AWF services taxable***\" in \"Project:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 494,
  "name": "I click on \"Common.TaxableCheckBox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 495,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 496,
  "name": "I enter \"9856\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 497,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 498,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 499,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 500,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 501,
  "name": "I enter \"_Banner\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 502,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 503,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 504,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 505,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 506,
  "name": "I click on \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 507,
  "name": "I clear the text \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 508,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 509,
  "name": "I enter \"Vehicle Wrap\" in \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 510,
  "name": "I click on \"Common.Description\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 511,
      "value": "#And I wait for \"5\" seconds"
    }
  ],
  "line": 512,
  "name": "I click on \"Common.CalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 513,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 514,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 515,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 516,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 517,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 518,
  "name": "I click on \"0:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 519,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 520,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 521,
      "value": "#And I click on \"Common.ServiceInfoTaxableCheckbox\""
    },
    {
      "line": 522,
      "value": "#And I wait for \"2\" seconds"
    }
  ],
  "line": 523,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 524,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 525,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 526,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 527,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 528,
  "name": "checked \"13999.55\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 529,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3912221900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7746169400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058090900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5183403700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059767300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7216507400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1072464400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1134377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3507914600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12059349300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1079436900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3178528600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 164469200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1068162100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3180503700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 156486200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1069641300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3170718900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 162105300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1156645400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3186989400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer non taxable and AWF services taxable***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 66
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1280752400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.TaxableCheckBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3185032300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12065102700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9856",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1097359600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3244538500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12048108200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3265763200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12052200200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Banner",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1080134300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999700300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3421113800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 625975900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999891600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3296685100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 118243400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999645000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vehicle Wrap",
      "offset": 9
    },
    {
      "val": "Common.AWFTemplateName",
      "offset": 27
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1061699100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Description",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3284560900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.CalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3205856600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000398800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4141534800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000215700,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7086700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000268900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3241756900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 372133900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1052170300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3799457400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999928900,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 6910500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3182428400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999631600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13999.55",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1149753300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4691672600,
  "status": "passed"
});
formatter.after({
  "duration": 1317528700,
  "status": "passed"
});
formatter.before({
  "duration": 3389034400,
  "status": "passed"
});
formatter.scenario({
  "line": 532,
  "name": "Customer Non Taxable and Services SWF Taxable.",
  "description": "",
  "id": "estimates-taxes-test-cases;customer-non-taxable-and-services-swf-taxable.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 531,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 533,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 534,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 535,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 536,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 537,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 538,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 539,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 540,
  "name": "I enter \"Action Mailing\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 541,
  "name": "I click on \"Action Mailing:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 542,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 543,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 544,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 546,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 547,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 548,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 549,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 550,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 551,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 552,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 553,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 554,
  "name": "I enter \"***Customer non taxable and SWF services taxable***\" in \"Project:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 555,
  "name": "I click on \"Common.TaxableCheckBox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 556,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 557,
  "name": "I enter \"12345\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 558,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 559,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 560,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 561,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 562,
  "name": "I enter \"_Yard Sign\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 563,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 564,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 565,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 566,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 567,
  "name": "I verify \"Wide Format Estimate:Common.WideFormatEstimate\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 568,
      "value": "#And I enter \"18 x 24 Yard Sign\" in \"Products:Common.InputField_s\""
    }
  ],
  "line": 569,
  "name": "I click on \"wfEstimateProductType:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 570,
  "name": "I enter \"18 x 24 Yard Sign\" in \"wfEstimateProductType:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 571,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 572,
  "name": "I click on \"wideFormatStockId:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "I enter \"Canvas60\" in \"wideFormatStockId:Common.SWFComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 574,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 575,
  "name": "I click on \"Common.WFMessageEditor\"",
  "keyword": "And "
});
formatter.step({
  "line": 576,
  "name": "I enter \"Automation Script-Adding comments for simple wide format\" in \"Common.WFMessageEditor\"",
  "keyword": "And "
});
formatter.step({
  "line": 577,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 578,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 579,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 580,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 581,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 582,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 583,
  "name": "I click on \"0:Estimates.ServiceInfoDetailsButton\"",
  "keyword": "Then "
});
formatter.step({
  "line": 584,
  "name": "I verified \"Common.ServiceInfoPage\"",
  "keyword": "When "
});
formatter.step({
  "line": 585,
  "name": "I verify \"Service Information:Common.ServiceInfoLabel\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 586,
      "value": "#And I click on \"Common.ServiceInfoTaxableCheckbox\""
    },
    {
      "line": 587,
      "value": "#And I wait for \"2\" seconds"
    }
  ],
  "line": 588,
  "name": "I click on \"Common.ServiceInfoPageSaveandClose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 589,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 590,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 591,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 592,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 593,
  "name": "checked \"162657.72\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 594,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3593315800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8243868500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1076346200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5566618500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1053904300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6409602600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1063410800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1147458800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3217074100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12035661300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1068606300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3192644000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 165076800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1066795900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3198826700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 157245900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1062604800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3185826100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 172067100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1129368500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3178787800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer non taxable and SWF services taxable***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 66
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1248403500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.TaxableCheckBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3177755000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12033030000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1123344100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3257118900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12058496100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3255878200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12031320900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Yard Sign",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1093602300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000538400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3418820200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 826829700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format Estimate:Common.WideFormatEstimate",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057153400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wfEstimateProductType:Common.SWFComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3261923700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18 x 24 Yard Sign",
      "offset": 9
    },
    {
      "val": "wfEstimateProductType:Common.SWFComboBox",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1086699800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000396200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wideFormatStockId:Common.SWFComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4233318100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Canvas60",
      "offset": 9
    },
    {
      "val": "wideFormatStockId:Common.SWFComboBox",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1102499400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999738300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WFMessageEditor",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3253997600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Script-Adding comments for simple wide format",
      "offset": 9
    },
    {
      "val": "Common.WFMessageEditor",
      "offset": 71
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1138575900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3209754100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999523300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3945622100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000208300,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7227600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000199700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Estimates.ServiceInfoDetailsButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3235967600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPage",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 917666700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Service Information:Common.ServiceInfoLabel",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1053279000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ServiceInfoPageSaveandClose",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3824630200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000361600,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7239800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 10535349100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999833300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "162657.72",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 24
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1051864500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 10489131000,
  "status": "passed"
});
formatter.after({
  "duration": 1282238700,
  "status": "passed"
});
formatter.before({
  "duration": 3372511600,
  "status": "passed"
});
formatter.scenario({
  "line": 597,
  "name": "Customer Non Taxable and Services/Wizard/AWF/PC Taxable.",
  "description": "",
  "id": "estimates-taxes-test-cases;customer-non-taxable-and-services/wizard/awf/pc-taxable.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 596,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 598,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 599,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 600,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 601,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 602,
  "name": "I verify \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 603,
  "name": "I click on \"New Estimate:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 604,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 605,
  "name": "I enter \"Action Mailing\" in \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 606,
  "name": "I click on \"Action Mailing:Common.DropDownOption_td\"",
  "keyword": "And "
});
formatter.step({
  "line": 607,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 608,
  "name": "I verify \"Account Warning Message::Estimates.PromptBoxText\"",
  "keyword": "And "
});
formatter.step({
  "line": 609,
  "name": "I click on \"Common.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 610,
  "name": "I clear the text \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 611,
  "name": "I enter \"Brian Moore\" in \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 612,
  "name": "I click on \"Sales Rep:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 613,
  "name": "I clear the text \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 614,
  "name": "I enter \"Chris Huber\" in \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 615,
  "name": "I click on \"CSR:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 616,
  "name": "I clear the text \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 617,
  "name": "I enter \"Midnight Printing\" in \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 618,
  "name": "I click on \"Company:Common.InputField_s\"",
  "keyword": "And "
});
formatter.step({
  "line": 619,
  "name": "I enter \"***Customer non taxable and no launch,wizard,AWF,PC services taxable***\" in \"Project:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 620,
  "name": "I click on \"Common.TaxableCheckBox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 621,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 622,
  "name": "I enter \"51\" in \"Expected Qty:Common.InputField\"",
  "keyword": "And "
});
formatter.step({
  "line": 623,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 624,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 625,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 626,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 627,
  "name": "I enter \"CASS\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 628,
  "name": "I click on \"Common.DateDue\"",
  "keyword": "Then "
});
formatter.step({
  "line": 629,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 630,
  "name": "I click on \"1:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 631,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 632,
  "name": "I enter \"Address Setup 0\" in \"1:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 633,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 634,
  "name": "I click on \"1:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 635,
  "name": "I verified \"Common.WizardServicePopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 636,
  "name": "I verify \"Hand Match Perfect:Common.WizardServicePopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 637,
  "name": "I click on \"0:Common.WizardSuccessorSelected\"",
  "keyword": "And "
});
formatter.step({
  "line": 638,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 639,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 640,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 641,
  "name": "I click on \"Wide Format:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 642,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 643,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 644,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 645,
  "name": "I enter \"_Banner\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 646,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 647,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 648,
  "name": "I verified \"Common.WideFormatCalculator\"",
  "keyword": "And "
});
formatter.step({
  "line": 649,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 650,
  "name": "I click on \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 651,
  "name": "I clear the text \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 652,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 653,
  "name": "I enter \"Daves Banner Job\" in \"Common.AWFTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 654,
  "name": "I click on \"Common.Description\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 655,
      "value": "#And I wait for \"5\" seconds"
    }
  ],
  "line": 656,
  "name": "I click on \"Common.CalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 657,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 658,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 659,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 660,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 661,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 662,
  "name": "I click on \"Print:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 663,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 664,
  "name": "I click on \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 665,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 666,
  "name": "I enter \".PS\" in \"0:Common.ServiceComboBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 667,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 668,
  "name": "I click on \"0:Common.ServiceDescriptionEditBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 669,
  "name": "I check \"Common.PrintCalculator\"",
  "keyword": "Then "
});
formatter.step({
  "line": 670,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 671,
  "name": "I click on \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 672,
  "name": "I clear the text \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "line": 673,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 674,
  "name": "I enter \"52\" in \"Common.PCTemplateName\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 675,
      "value": "#And I click on \"Common.Description\""
    }
  ],
  "line": 676,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 677,
  "name": "I click on \"Common.PrintCalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 678,
  "name": "I wait for \"10\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 679,
  "name": "I click on \"Common.PrintCalculateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 681,
  "name": "I click on \"Common.PrintSubmitButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "I wait for \"3\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 683,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 684,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 685,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 686,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "checked \"961.81\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 688,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3602801500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9666142900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1057337200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5663533700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1101186000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Estimate:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8045993600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1067723900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing",
      "offset": 9
    },
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 29
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1135463500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Action Mailing:Common.DropDownOption_td",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3522425300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12043670400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Warning Message::Estimates.PromptBoxText",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1060066900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3212048700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 164376900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brian Moore",
      "offset": 9
    },
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1070279500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales Rep:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3171345100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 162973500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chris Huber",
      "offset": 9
    },
    {
      "val": "CSR:Common.InputField_s",
      "offset": 26
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1095009200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CSR:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3187911900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 166349300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Midnight Printing",
      "offset": 9
    },
    {
      "val": "Company:Common.InputField_s",
      "offset": 32
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1127160800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Company:Common.InputField_s",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3187653000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "***Customer non taxable and no launch,wizard,AWF,PC services taxable***",
      "offset": 9
    },
    {
      "val": "Project:Common.InputField",
      "offset": 86
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1389805400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.TaxableCheckBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3208170900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12059585200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "51",
      "offset": 9
    },
    {
      "val": "Expected Qty:Common.InputField",
      "offset": 17
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1087528400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3291145700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12017994900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3309564800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12032850900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CASS",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 19
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1083843900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.DateDue",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3413619000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12007891800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3250997800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12338336400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address Setup 0",
      "offset": 9
    },
    {
      "val": "1:Common.ServiceComboBox",
      "offset": 30
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1100313600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999570100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3439772500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WizardServicePopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 59714700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hand Match Perfect:Common.WizardServicePopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1079477000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.WizardSuccessorSelected",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3669604800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000351900,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7541200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999759500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wide Format:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3199205400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12043590400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3270612300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12034448800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "_Banner",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1092822700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000292600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3393355000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.WideFormatCalculator",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 837960300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 5000028600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3269451800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.AWFTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 107343300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000077100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daves Banner Job",
      "offset": 9
    },
    {
      "val": "Common.AWFTemplateName",
      "offset": 31
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1080391700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Description",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3314411200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.CalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3227895000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999882100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5415059000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000102800,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7309300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000062400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Print:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3248858100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12042662400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3279216100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12020157700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ".PS",
      "offset": 9
    },
    {
      "val": "0:Common.ServiceComboBox",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1067523200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999654700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.ServiceDescriptionEditBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3509218300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculator",
      "offset": 9
    }
  ],
  "location": "CommonStepDefinitions.i_check(String)"
});
formatter.result({
  "duration": 28950329600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12066575700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PCTemplateName",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3401860700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PCTemplateName",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 74266400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2999978700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "52",
      "offset": 9
    },
    {
      "val": "Common.PCTemplateName",
      "offset": 17
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1047525300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 9999607500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3500933400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 9999450700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintCalculateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3310419700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 15950545400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.PrintSubmitButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3376790100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 3000533500,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 1223068900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999820800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3916253900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999846700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "961.81",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1050568300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4843026800,
  "status": "passed"
});
formatter.after({
  "duration": 1315333500,
  "status": "passed"
});
formatter.before({
  "duration": 3323370300,
  "status": "passed"
});
formatter.scenario({
  "line": 691,
  "name": "Open an Estimate and make Customer Taxable and verify Services/Wizard/AWF/PC Taxable.",
  "description": "",
  "id": "estimates-taxes-test-cases;open-an-estimate-and-make-customer-taxable-and-verify-services/wizard/awf/pc-taxable.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 690,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 692,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 693,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 694,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 695,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 696,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 697,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 698,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 699,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 700,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 701,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 702,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 703,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 704,
  "name": "I click on \"Common.TaxableCheckBox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 705,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "Then "
});
formatter.step({
  "line": 706,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 707,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 708,
  "name": "checked \"980.72\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 709,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3737323700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8265661000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061068400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5306486200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000393000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055780000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3171645900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999596300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7020432000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12052351400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066795600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000232200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.TaxableCheckBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3184639400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12041800300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3208883800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000083100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "980.72",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 21
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1046652400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4764090300,
  "status": "passed"
});
formatter.after({
  "duration": 1386337200,
  "status": "passed"
});
formatter.before({
  "duration": 3270901200,
  "status": "passed"
});
formatter.scenario({
  "line": 712,
  "name": "Open an Estimate Update QTY in estimate with \"YES\" and verify new total and taxes.",
  "description": "",
  "id": "estimates-taxes-test-cases;open-an-estimate-update-qty-in-estimate-with-\"yes\"-and-verify-new-total-and-taxes.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 711,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 713,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 714,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 715,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 716,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 717,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 718,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 719,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 720,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 721,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 722,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 723,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 724,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 725,
      "value": "#Then I click on \"Common.TaxableCheckBox\""
    },
    {
      "line": 726,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 727,
  "name": "I enter \"223\" in \"Common.UpdateQtyField\"",
  "keyword": "And "
});
formatter.step({
  "line": 728,
  "name": "I click on \"Update:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 729,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 730,
  "name": "I verified \"Common.UpdateQtyPopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 731,
  "name": "I verify \"Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 732,
  "name": "I click on \"Common.QtyUpdatePopupYesButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 733,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 734,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 735,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 736,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 737,
  "name": "checked \"3156.40\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 738,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3750207400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7463910100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1049811500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5624130600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999917700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055650000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3173652800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999792900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 6822879900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12060389800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1066414300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999918700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "223",
      "offset": 9
    },
    {
      "val": "Common.UpdateQtyField",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1096493500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3209855200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999640000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UpdateQtyPopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 49227300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1052312700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.QtyUpdatePopupYesButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3240614100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000002900,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 7159700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3180699000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000107900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3156.40",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1048413900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4718027300,
  "status": "passed"
});
formatter.after({
  "duration": 1668177700,
  "status": "passed"
});
formatter.before({
  "duration": 3420378500,
  "status": "passed"
});
formatter.scenario({
  "line": 741,
  "name": "Open an Estimate Update QTY in estimate with \"NO\" and verify new total and taxes.",
  "description": "",
  "id": "estimates-taxes-test-cases;open-an-estimate-update-qty-in-estimate-with-\"no\"-and-verify-new-total-and-taxes.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 740,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 742,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 743,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 744,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 745,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 746,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 747,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 748,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 749,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 750,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 751,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 752,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 753,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 754,
      "value": "#Then I click on \"Common.TaxableCheckBox\""
    },
    {
      "line": 755,
      "value": "#Then I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 756,
  "name": "I enter \"999\" in \"Common.UpdateQtyField\"",
  "keyword": "And "
});
formatter.step({
  "line": 757,
  "name": "I click on \"Update:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 758,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 759,
  "name": "I verified \"Common.UpdateQtyPopup\"",
  "keyword": "And "
});
formatter.step({
  "line": 760,
  "name": "I verify \"Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 761,
  "name": "I click on \"Common.QtyUpdatePopupNoButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 762,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 763,
  "name": "I check default content switch",
  "keyword": "Then "
});
formatter.step({
  "line": 764,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 765,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 766,
  "name": "checked \"14001.56\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 767,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3917651100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7690400300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1071982800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5441767600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999958000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1060324100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3173692700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999651000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8834331200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12053982100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1073204700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000005500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "999",
      "offset": 9
    },
    {
      "val": "Common.UpdateQtyField",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1097628500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3202383900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000186300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UpdateQtyPopup",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.i_verified(String)"
});
formatter.result({
  "duration": 53362000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058443800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.QtyUpdatePopupNoButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3247320700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999944500,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.i_check_default_content_switch()"
});
formatter.result({
  "duration": 5247700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3187687800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999833400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14001.56",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1079337500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5152660800,
  "status": "passed"
});
formatter.after({
  "duration": 1596482700,
  "status": "passed"
});
formatter.before({
  "duration": 3473433700,
  "status": "passed"
});
formatter.scenario({
  "line": 770,
  "name": "Open an Estimate and export to Order and verify new total and taxes.",
  "description": "",
  "id": "estimates-taxes-test-cases;open-an-estimate-and-export-to-order-and-verify-new-total-and-taxes.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 769,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 771,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 772,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 773,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 774,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 775,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 776,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 777,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 778,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 779,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 780,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 781,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 782,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 783,
  "name": "I click on \"Export to Order:Estimates.ExportToOrder\"",
  "keyword": "And "
});
formatter.step({
  "line": 784,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 785,
  "name": "I verify \"Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 786,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 787,
  "name": "I click on \"Orders.ExportedToOrderOKBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 788,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 789,
  "name": "I verify \"Orders.AccountWarningMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 790,
  "name": "I click on \"Orders.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 791,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 792,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 793,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 794,
  "name": "checked \"14,001.56\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 795,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 796,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3832244700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7863411500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1061957800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5292036700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000464200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059022000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3172168700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999576100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9289063600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12062383800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1068526000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999910600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Export to Order:Estimates.ExportToOrder",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3235307000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12033786400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1076741600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1999590200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.ExportedToOrderOKBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 11289026500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000311500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.AccountWarningMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1072490200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3176780400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000409300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3195040300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999939900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14,001.56",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 24
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1049596600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3344663000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 11155335900,
  "status": "passed"
});
formatter.after({
  "duration": 1592518300,
  "status": "passed"
});
formatter.before({
  "duration": 3401131400,
  "status": "passed"
});
formatter.scenario({
  "line": 799,
  "name": "Open an Estimate create an \"MQ\" and export to Order and verify new total and taxes.",
  "description": "",
  "id": "estimates-taxes-test-cases;open-an-estimate-create-an-\"mq\"-and-export-to-order-and-verify-new-total-and-taxes.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 798,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 800,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 801,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 802,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 803,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 804,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 805,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 806,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 807,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 808,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 809,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 810,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 811,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 812,
  "name": "I click on \"Multiple Qtys:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 813,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 814,
  "name": "I enter \"63689\" in \"Estimates.MQTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 815,
  "name": "I click on \"Estimates.MQUpdateButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 816,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 817,
  "name": "I click on \"Estimates.MQExportToOrder\"",
  "keyword": "And "
});
formatter.step({
  "line": 818,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 819,
  "name": "I verify \"Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 820,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 821,
  "name": "I click on \"Orders.ExportedToOrderOKBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 822,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 823,
  "name": "I verify \"Orders.AccountWarningMsg\"",
  "keyword": "And "
});
formatter.step({
  "line": 824,
  "name": "I click on \"Orders.WarningMsgOk\"",
  "keyword": "And "
});
formatter.step({
  "line": 825,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 826,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "Then "
});
formatter.step({
  "line": 827,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 828,
  "name": "checked \"810,350.10\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 829,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 830,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3652785100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8170094200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1058803200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5650124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999722000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1059387000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3177594800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000384800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7391486000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12048867100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1070053900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000221600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Multiple Qtys:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3227319700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000195000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "63689",
      "offset": 9
    },
    {
      "val": "Estimates.MQTextBox",
      "offset": 20
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1099832100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.MQUpdateButton",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3232567500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12007320400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.MQExportToOrder",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3219214300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12017405000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1090016100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000873500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.ExportedToOrderOKBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8879769700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000261100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.AccountWarningMsg",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1064271600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orders.WarningMsgOk",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3182275200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000471400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3206499200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 1000325400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "810,350.10",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 25
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1051640100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3235154700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 9705447400,
  "status": "passed"
});
formatter.after({
  "duration": 1565423200,
  "status": "passed"
});
formatter.before({
  "duration": 3374778400,
  "status": "passed"
});
formatter.scenario({
  "line": 833,
  "name": "Open an Estimate. Update Qty from line item and Verify new Total and Taxes.",
  "description": "",
  "id": "estimates-taxes-test-cases;open-an-estimate.-update-qty-from-line-item-and-verify-new-total-and-taxes.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 832,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 834,
  "name": "I login to Application",
  "keyword": "Given "
});
formatter.step({
  "line": 835,
  "name": "I click on \"Login.SignIn\"",
  "keyword": "And "
});
formatter.step({
  "line": 836,
  "name": "I verify \"Common.LandingPage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 837,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "When "
});
formatter.step({
  "line": 838,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 839,
  "name": "I verify \"Estimates.EstimateSearchPage\"",
  "keyword": "And "
});
formatter.step({
  "line": 840,
  "name": "I click on \"Common.ClearFilters\"",
  "keyword": "And "
});
formatter.step({
  "line": 841,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 842,
  "name": "I click on \"Estimates.EstimateNumberCreated\"",
  "keyword": "And "
});
formatter.step({
  "line": 843,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "line": 844,
  "name": "I verify \"Estimates.CustomerInputBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 845,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 846,
  "name": "I click on \"Data:Common.DepartmentMenu\"",
  "keyword": "Then "
});
formatter.step({
  "line": 847,
  "name": "I wait till \"Common.Loading\" is \"Invisible\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 848,
      "value": "#And I enter \"/Data Services - c21 Customizable Sell Sheet  -\" in \"0:Common.ServiceDescriptionEditBox\""
    },
    {
      "line": 849,
      "value": "#And I click on \"Save:Common.Button\""
    },
    {
      "line": 850,
      "value": "#And I wait till \"Common.Loading\" is \"Invisible\""
    }
  ],
  "line": 851,
  "name": "I clear the text \"0:Common.QuantityTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 852,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 853,
  "name": "I enter \"588.321\" in \"0:Common.QuantityTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 854,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 855,
  "name": "I click on \"0:Common.UnitPriceTextBox\"",
  "keyword": "And "
});
formatter.step({
  "line": 856,
  "name": "I verify \"Keep existing Unit Price?:Common.UnitPricePopUp\"",
  "keyword": "And "
});
formatter.step({
  "line": 857,
  "name": "I wait for \"5\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 858,
  "name": "I click on \"Common.UnitPriceUpdateNoBtn\"",
  "keyword": "And "
});
formatter.step({
  "line": 859,
  "name": "I wait for \"2\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 860,
  "name": "I click on \"Save:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 861,
  "name": "I wait for \"1\" seconds",
  "keyword": "And "
});
formatter.step({
  "line": 862,
  "name": "checked \"13469.15\" in \"Total \u0026 Tax:Common.TotalAndTaxes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 863,
  "name": "I click on \"Save \u0026 Close:Common.Button\"",
  "keyword": "And "
});
formatter.step({
  "line": 864,
  "name": "I click on \"Common.Estimates\"",
  "keyword": "And "
});
formatter.match({
  "location": "CommonStepDefinitions.setupLogin()"
});
formatter.result({
  "duration": 3578454800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login.SignIn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 8074274500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.LandingPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1055331200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 5512486800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999898600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateSearchPage",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1073934100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.ClearFilters",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3216052100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999771300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.EstimateNumberCreated",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 7351512700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12047934100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estimates.CustomerInputBox",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1070196700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000368000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Data:Common.DepartmentMenu",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3223812700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Loading",
      "offset": 13
    },
    {
      "val": "Invisible",
      "offset": 33
    }
  ],
  "location": "CommonStepDefinitions.verifyObjectVisibilty(String,String)"
});
formatter.result({
  "duration": 12022828700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.QuantityTextBox",
      "offset": 18
    }
  ],
  "location": "CommonStepDefinitions.i_Clear_The_Text(String)"
});
formatter.result({
  "duration": 201621300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000188500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "588.321",
      "offset": 9
    },
    {
      "val": "0:Common.QuantityTextBox",
      "offset": 22
    }
  ],
  "location": "CommonStepDefinitions.iEnterText(String,String)"
});
formatter.result({
  "duration": 1070087300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000150000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0:Common.UnitPriceTextBox",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3244846400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keep existing Unit Price?:Common.UnitPricePopUp",
      "offset": 10
    }
  ],
  "location": "CommonStepDefinitions.verifyObject(String)"
});
formatter.result({
  "duration": 1062758400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 4999902000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.UnitPriceUpdateNoBtn",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3234513500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 2000168300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 3238949100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.waitFor(String)"
});
formatter.result({
  "duration": 999891400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13469.15",
      "offset": 9
    },
    {
      "val": "Total \u0026 Tax:Common.TotalAndTaxes",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.checked_in(String,String)"
});
formatter.result({
  "duration": 1046725200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Save \u0026 Close:Common.Button",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4715871600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Common.Estimates",
      "offset": 12
    }
  ],
  "location": "CommonStepDefinitions.clickOn(String)"
});
formatter.result({
  "duration": 4606358700,
  "status": "passed"
});
formatter.after({
  "duration": 1566527600,
  "status": "passed"
});
});