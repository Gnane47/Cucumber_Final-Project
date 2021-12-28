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
  "duration": 7016625700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 3884420500,
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
  "duration": 162946700,
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
  "duration": 124649600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 1908931000,
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
  "duration": 3704373000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 5752982800,
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
  "duration": 133559200,
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
  "duration": 119087700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 3129619800,
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
  "duration": 1720081500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 5300630900,
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
  "duration": 118134900,
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
  "duration": 90366600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 3548287500,
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
  "duration": 3063559600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 3190553500,
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
  "duration": 128138000,
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
  "duration": 116334800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 5221166600,
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
  "duration": 6116931100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Evening_Dresses()"
});
formatter.result({
  "duration": 3075723900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Printed_Dresses()"
});
formatter.result({
  "duration": 4633417300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Quantity()"
});
formatter.result({
  "duration": 860502200,
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
  "duration": 99736400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Color()"
});
formatter.result({
  "duration": 107836800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Addtocart_Button()"
});
formatter.result({
  "duration": 2129344100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_to_Checkout_Button()"
});
formatter.result({
  "duration": 5261392000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 5742001000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Address_and_Click_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 3928729200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Accepts_The_Terms_And_Conditions()"
});
formatter.result({
  "duration": 115274900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 3266813200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Paybybank_Wire_Button()"
});
formatter.result({
  "duration": 4024037200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Confirm_Order_Button_and_Navigates_To_Order_Confirmation_Page()"
});
formatter.result({
  "duration": 18834782900,
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
  "duration": 8582332700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Tshirts()"
});
formatter.result({
  "duration": 3916304100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Tshirtstype()"
});
formatter.result({
  "duration": 2261302000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Quantity_tshirt()"
});
formatter.result({
  "duration": 806930900,
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
  "duration": 98770000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Color_tshirt()"
});
formatter.result({
  "duration": 128738400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Addtocart_Button_tshirt()"
});
formatter.result({
  "duration": 2132759000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_to_Checkout_Button_tshirt()"
});
formatter.result({
  "duration": 2004448800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button_tshirt()"
});
formatter.result({
  "duration": 88286800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[@title\u003d\u0027Proceed to checkout\u0027])[2]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BO01BC7\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 95.0.4638.17 (a9d0719444d4b..., userDataDir: C:\\Users\\gnani\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50783}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c358bb70c6251ca4ebe242026ff14d9d\n*** Element info: {Using\u003dxpath, value\u003d(//a[@title\u003d\u0027Proceed to checkout\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.base.Base_Class.click(Base_Class.java:55)\r\n\tat com.stepdefinition.automation.Step_Definition_Automation.user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button_tshirt(Step_Definition_Automation.java:199)\r\n\tat ✽.And user Verifies The Quantity And Click Proceed To Checkout Button_tshirt(src/test/java/com/feature/auto/automation.feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Address_And_Click_Proceed_To_Checkout_Button_tshirt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Accepts_The_Terms_and_Conditions_tshirt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_To_Checkout_Button_tshirts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Paybybank_Wire_Button_tshirt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Confirm_Order_Button_tshirt()"
});
formatter.result({
  "status": "skipped"
});
});