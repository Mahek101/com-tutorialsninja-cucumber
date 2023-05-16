package com.tutorialsninja.steps;

import com.tutorialsninja.pages.RegisterPage;
import com.tutorialsninja.utilities.Utility;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class RegisterPageSteps {

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        Assert.assertEquals("Register page not displayed","Register Account",new RegisterPage().getRegisterText());
    }

    @And("^I filled all mandatory field of registration$")
    public void iFilledAllMandatoryFieldOfRegistration() {
        new RegisterPage().enterFirstName("Sneha");
        new RegisterPage().enterLastName("Shah");
        new RegisterPage().enterEmail("shah"+ new Utility().getRandomString(4)+"@gmail.com");
        new RegisterPage().enterTelephone("07569458624");
        new RegisterPage().enterPassword("Sneha123");
        new RegisterPage().enterConfirmPassword("Sneha123");
        new RegisterPage().clickOnSubscribeRadioButton("Yes");
        new RegisterPage().clickOnPrivacyPolicyCheckBox();
    }

    @And("^I click on continue button of registration page$")
    public void iClickOnContinueButtonOfRegistrationPage() throws InterruptedException{
        Thread.sleep(500);
        new RegisterPage().clickOnContinueButton();
    }

    @Then("^I should see account successfully created message$")
    public void iShouldSeeAccountSuccessfullyCreatedMessage() {
        Assert.assertEquals("Account not created successfully","Your Account Has Been Created!",new RegisterPage().getAccountCreatedMessage());
    }

    @And("^I click on continue$")
    public void iClickOnContinue() {
        new RegisterPage().clickOnContinue();
    }
}
