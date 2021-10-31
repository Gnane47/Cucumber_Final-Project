$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/auto/automation.feature");
formatter.feature({
  "line": 1,
  "name": "Purchasing clothes in automation practice website",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"\u003cusername\u003e\" Username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Enters The \"\u003cpassword\u003e\" Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "purchasing-clothes-in-automation-practice-website;login;;1"
    },
    {
      "cells": [
        "Gnane@gmail.com",
        "@1245"
      ],
      "line": 13,
      "id": "purchasing-clothes-in-automation-practice-website;login;;2"
    },
    {
      "cells": [
        "testdata47@gmail.com",
        "ACD#45"
      ],
      "line": 14,
      "id": "purchasing-clothes-in-automation-practice-website;login;;3"
    },
    {
      "cells": [
        "sample@gmail.com",
        "s@467"
      ],
      "line": 15,
      "id": "purchasing-clothes-in-automation-practice-website;login;;4"
    },
    {
      "cells": [
        "gnani9448@gmail.com",
        "Gnane@47"
      ],
      "line": 16,
      "id": "purchasing-clothes-in-automation-practice-website;login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"Gnane@gmail.com\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Enters The \"@1245\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launches_Application_Using_URL()"
});
formatter.result({
  "duration": 8918750200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 2229987300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gnane@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 135607300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@1245",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 125617500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 1607640800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"testdata47@gmail.com\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Enters The \"ACD#45\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launches_Application_Using_URL()"
});
formatter.result({
  "duration": 1477663500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 1905343500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata47@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 105912900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACD#45",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 102594300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 1198319900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"sample@gmail.com\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Enters The \"s@467\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launches_Application_Using_URL()"
});
formatter.result({
  "duration": 1426174000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 2485947400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 97569900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "s@467",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 86642900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 1225878700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enters The \"gnani9448@gmail.com\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Enters The \"Gnane@47\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launches_Application_Using_URL()"
});
formatter.result({
  "duration": 1537924200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 1745505200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gnani9448@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 106359900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gnane@47",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 95837000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 1775139000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Purchasing a dress",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;purchasing-a-dress",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@automate2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user Clicks The Dresses",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user Clicks The Evening Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Clicks The Printed Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select The Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select The \"M\" As Size",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Select The Color",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Clicks The Addtocart Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Clicks The Proceed to Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Verifies The Quantity And Click Proceed To Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Verifies The Address and Click Proceed To Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Accepts The Terms And Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Clicks Proceed To Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Clicks Paybybank Wire Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Clicks Confirm Order Button and Navigates To Order Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Dresses()"
});
formatter.result({
  "duration": 2888308200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Evening_Dresses()"
});
formatter.result({
  "duration": 1828516600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Printed_Dresses()"
});
formatter.result({
  "duration": 2225204400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Quantity()"
});
formatter.result({
  "duration": 845568700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Select_The_As_Size(String)"
});
formatter.result({
  "duration": 101184600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Color()"
});
formatter.result({
  "duration": 114488900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Addtocart_Button()"
});
formatter.result({
  "duration": 2124910900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_to_Checkout_Button()"
});
formatter.result({
  "duration": 2114886900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 1600349300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Address_and_Click_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 1299366200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Accepts_The_Terms_And_Conditions()"
});
formatter.result({
  "duration": 107966900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 1469454900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Paybybank_Wire_Button()"
});
formatter.result({
  "duration": 1061007400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Confirm_Order_Button_and_Navigates_To_Order_Confirmation_Page()"
});
formatter.result({
  "duration": 9502104900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Purchasing 2nd product",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;purchasing-2nd-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@automate3"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "user Clicks The Logo",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user Clicks The Tshirts",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Clicks The Tshirtstype",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Select The Quantity_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Select The \"L\" As Size_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Select The Color_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Clicks The Addtocart Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user Clicks The Proceed to Checkout Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "user Verifies The Quantity And Click Proceed To Checkout Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Verifies The Address And Click Proceed To Checkout Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user Accepts The Terms and Conditions_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user Clicks The Proceed To Checkout Button_tshirts",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user Clicks The Paybybank Wire Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user Clicks The Confirm Order Button_tshirt",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Logo()"
});
formatter.result({
  "duration": 2421871400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Tshirts()"
});
formatter.result({
  "duration": 2538644200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Tshirtstype()"
});
formatter.result({
  "duration": 2253650800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Quantity_tshirt()"
});
formatter.result({
  "duration": 708199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Select_The_As_Size_tshirt(String)"
});
formatter.result({
  "duration": 96655200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Color_tshirt()"
});
formatter.result({
  "duration": 127566600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Addtocart_Button_tshirt()"
});
formatter.result({
  "duration": 2137765300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_to_Checkout_Button_tshirt()"
});
formatter.result({
  "duration": 1603474100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button_tshirt()"
});
formatter.result({
  "duration": 1662967700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Address_And_Click_Proceed_To_Checkout_Button_tshirt()"
});
formatter.result({
  "duration": 1202609100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Accepts_The_Terms_and_Conditions_tshirt()"
});
formatter.result({
  "duration": 98263000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_To_Checkout_Button_tshirts()"
});
formatter.result({
  "duration": 1441631700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Paybybank_Wire_Button_tshirt()"
});
formatter.result({
  "duration": 1822457900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Confirm_Order_Button_tshirt()"
});
formatter.result({
  "duration": 3237917500,
  "status": "passed"
});
});