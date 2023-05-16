$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktop.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop page test",
  "description": "\r\nAs a user I want to check desktop page and add product into cart",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4431267201,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should arrange product in alphabetical order successfully",
  "description": "",
  "id": "desktop-page-test;user-should-arrange-product-in-alphabetical-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select product sort by \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see product arrange in alphabetical order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 921731200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 385820800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 68452100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 439152100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductArrangeInAlphabeticalOrderSuccessfully()"
});
formatter.result({
  "duration": 296175600,
  "error_message": "java.lang.AssertionError: [Sony VAIO, Samsung SyncMaster 941BW, Product 8, Palm Treo Pro, MacBook Air, MacBook, iPod Classic, iPhone, HTC Touch HD, HP LP3065, Canon EOS 5D, Apple Cinema 30\"] expected:\u003c[Ljava.lang.String;@7c3ebc6b\u003e but was:\u003c[Sony VAIO, Samsung SyncMaster 941BW, Product 8, Palm Treo Pro, MacBook Air, MacBook, iPod Classic, iPhone, HTC Touch HD, HP LP3065, Canon EOS 5D, Apple Cinema 30\"]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat com.tutorialsninja.steps.DesktopPageSteps.iShouldSeeProductArrangeInAlphabeticalOrderSuccessfully(DesktopPageSteps.java:35)\r\n\tat ✽.Then I should see product arrange in alphabetical order successfully(desktop.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 838122499,
  "status": "passed"
});
formatter.before({
  "duration": 3087641400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "desktop-page-test;user-should-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select currency \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select product sort by \"Name (A - Z)\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to \"HP LP3065\" product page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select date \"2022\",\"November\",\"30\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I add quantity \"1\" for product",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see product added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see shopping cart text",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should see \"HP LP3065\" product name",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see \"2022-11-30\" delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see \"Product 21\" model name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should see total price",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 714599799,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 340146799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 19
    }
  ],
  "location": "DesktopPageSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 569706900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (A - Z)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 368440500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 18
    }
  ],
  "location": "DesktopPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 888569700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 22
    }
  ],
  "location": "DesktopPageSteps.iShouldNavigateToProductPage(String)"
});
formatter.result({
  "duration": 37709400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 15
    },
    {
      "val": "November",
      "offset": 22
    },
    {
      "val": "30",
      "offset": 33
    }
  ],
  "location": "DesktopPageSteps.iSelectDate(String,String,String)"
});
formatter.result({
  "duration": 4243912801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "DesktopPageSteps.iAddQuantityForProduct(String)"
});
formatter.result({
  "duration": 98228301,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 685821500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 546619500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 959267400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeShoppingCartText()"
});
formatter.result({
  "duration": 41107400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeProductName(String)"
});
formatter.result({
  "duration": 29013500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeDeliveryDate(String)"
});
formatter.result({
  "duration": 28041000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 14
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeModelName(String)"
});
formatter.result({
  "duration": 20268200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeTotalPrice()"
});
formatter.result({
  "duration": 25253801,
  "status": "passed"
});
formatter.after({
  "duration": 709667300,
  "status": "passed"
});
formatter.uri("laptopAndNotebook.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop And Notebook Page Test",
  "description": "\r\nAs a user I want to check functionality of laptop and notebook page",
  "id": "laptop-and-notebook-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3185807900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should arrange product in price high to low order successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;user-should-arrange-product-in-price-high-to-low-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see product arrange in price high to low order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 567921700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 348049300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 65499899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 380267100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iShouldSeeProductArrangeInPriceHighToLowOrderSuccessfully()"
});
formatter.result({
  "duration": 179390800,
  "error_message": "java.lang.AssertionError: Product not sorted by price High to Low expected: java.util.ArrayList\u003c[2000.0, 1202.0, 1202.0, 602.0, 122.0]\u003e but was: java.lang.String\u003c[2000.0, 1202.0, 1202.0, 602.0, 122.0]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat com.tutorialsninja.steps.LaptopAndNotebookSteps.iShouldSeeProductArrangeInPriceHighToLowOrderSuccessfully(LaptopAndNotebookSteps.java:18)\r\n\tat ✽.Then I should see product arrange in price high to low order successfully(laptopAndNotebook.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 830030100,
  "status": "passed"
});
formatter.before({
  "duration": 3103125100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "User should place order successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;user-should-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select currency \"£Pound Sterling\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select product \"Macbook\" from laptop and notebook page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to \"MacBook\" product",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see product macbook added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see shopping cart text",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should see \"MacBook\" product",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I change quantity \"2\" for product",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on update quantity",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see cart modified message",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I should see total price for macbook products",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should navigate to checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I should see new customer text",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on guest checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on continue button of guest checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I filled all mandatory field of checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on continue after fill all detail on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I add comments to text area about product order",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click checkbox of terms and condition",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on continue of checkout",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I should see warning message regarding Payment method",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 533777601,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 331589400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£Pound Sterling",
      "offset": 19
    }
  ],
  "location": "DesktopPageSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 564302900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 367774600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Macbook",
      "offset": 18
    }
  ],
  "location": "LaptopAndNotebookSteps.iSelectProductFromLaptopAndNotebookPage(String)"
});
formatter.result({
  "duration": 1164101300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 22
    }
  ],
  "location": "LaptopAndNotebookSteps.iShouldNavigateToProduct(String)"
});
formatter.result({
  "duration": 37595900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 677631600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iShouldSeeProductMacbookAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 555962400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 915243400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeShoppingCartText()"
});
formatter.result({
  "duration": 43699999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 14
    }
  ],
  "location": "LaptopAndNotebookSteps.iShouldSeeProduct(String)"
});
formatter.result({
  "duration": 32270001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "LaptopAndNotebookSteps.iChangeQuantityForProduct(String)"
});
formatter.result({
  "duration": 101415900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickOnUpdateQuantity()"
});
formatter.result({
  "duration": 481507300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iShouldSeeCartModifiedMessage()"
});
formatter.result({
  "duration": 22191899,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iShouldSeeTotalPriceForMacbookProducts()"
});
formatter.result({
  "duration": 20480600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 324271200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iShouldNavigateToCheckoutPage()"
});
formatter.result({
  "duration": 27852000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iShouldSeeNewCustomerText()"
});
formatter.result({
  "duration": 542974101,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickOnGuestCheckoutButton()"
});
formatter.result({
  "duration": 570542501,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickOnContinueButtonOfGuestCheckoutPage()"
});
formatter.result({
  "duration": 48022900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iFilledAllMandatoryFieldOfCheckoutPage()"
});
formatter.result({
  "duration": 873272900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickOnContinueAfterFillAllDetailOnCheckoutPage()"
});
formatter.result({
  "duration": 44151999,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iAddCommentsToTextAreaAboutProductOrder()"
});
formatter.result({
  "duration": 566958800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickCheckboxOfTermsAndCondition()"
});
formatter.result({
  "duration": 1045176100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iClickOnContinueOfCheckout()"
});
formatter.result({
  "duration": 1067741400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookSteps.iShouldSeeWarningMessageRegardingPaymentMethod()"
});
formatter.result({
  "duration": 1053375700,
  "status": "passed"
});
formatter.after({
  "duration": 698364301,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "\r\nAs a user I want to check login/logout functionality",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3319218300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-page-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 57683000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 331451500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 42700300,
  "status": "passed"
});
formatter.after({
  "duration": 681726199,
  "status": "passed"
});
formatter.before({
  "duration": 3169461199,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should login and logout successfully",
  "description": "",
  "id": "login-page-test;user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter email \"iampatel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"HelloNum1\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"Logout\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 55371900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 348200800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iampatel@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 118207400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HelloNum1",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 66073301,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 507002699,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 29640199,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 34433001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 530347100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 21092401,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 315484100,
  "status": "passed"
});
formatter.after({
  "duration": 686820201,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user i want to do registration into tutorial ninja website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2999804000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-page-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 57998700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 525516099,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 43161800,
  "status": "passed"
});
formatter.after({
  "duration": 676110500,
  "status": "passed"
});
formatter.before({
  "duration": 3056806100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should register account successfully",
  "description": "",
  "id": "register-page-test;user-should-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I filled all mandatory field of registration",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on continue button of registration page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see account successfully created message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"Logout\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 69523600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 520813700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iFilledAllMandatoryFieldOfRegistration()"
});
formatter.result({
  "duration": 420105801,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnContinueButtonOfRegistrationPage()"
});
formatter.result({
  "duration": 1033907600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldSeeAccountSuccessfullyCreatedMessage()"
});
formatter.result({
  "duration": 36968299,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnContinue()"
});
formatter.result({
  "duration": 305773699,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 42146500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 488340600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 32370700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 320731800,
  "status": "passed"
});
formatter.after({
  "duration": 691573899,
  "status": "passed"
});
formatter.uri("topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu test of Homepage",
  "description": "\r\nAs a user I want to check top menu tab options on Homepage",
  "id": "top-menu-test-of-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3215053200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 770018101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20033230900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 40951900,
  "status": "passed"
});
formatter.after({
  "duration": 694135300,
  "status": "passed"
});
formatter.before({
  "duration": 3166283300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "User should navigate to laptop and notebook page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-laptop-and-notebook-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select menu \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should navigate to laptop and notebook page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 571709701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20056577999,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToLaptopAndNotebookPageSuccessfully()"
});
formatter.result({
  "duration": 49361300,
  "status": "passed"
});
formatter.after({
  "duration": 707792700,
  "status": "passed"
});
formatter.before({
  "duration": 3118339700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "User should navigate to component page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-component-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I mouse hover and click on component tab",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select menu \"Show All Components\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should navigate to component page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnComponentTab()"
});
formatter.result({
  "duration": 595484300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Components",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20034614100,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToComponentPageSuccessfully()"
});
formatter.result({
  "duration": 43761800,
  "status": "passed"
});
formatter.after({
  "duration": 677818600,
  "status": "passed"
});
});