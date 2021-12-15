package com.automation.cucumber.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInSteps {
    @Given("^User is on Homepage$")
    public void userIsOnHomepage() {
    }

    @When("^User clicks on sign in link$")
    public void userClicksOnSignInLink() {
        new HomePage().clickOnSignInLink();
    }

    @Then("^User can see the message \"([^\"]*)\"$")
    public void userCanSeeTheMessage(String expMsg)  {
new SignInPage().verifyAuthenticationMsg(expMsg);
    }

    @And("^User enters username \"([^\"]*)\"$")
    public void userEntersUsername(String username)  {
new SignInPage().enterEmail(username);
    }

    @And("^User enters password \"([^\"]*)\"$")
    public void userEntersPassword(String password)  {
new SignInPage().enterPassword(password);
    }

    @And("^User clicks on sign in button$")
    public void userClicksOnSignInButton() {
        new SignInPage().clickOnSignInBtn();
    }

    @Then("^User can see the error message \"([^\"]*)\"$")
    public void userCanSeeTheErrorMessage(String expMsg)  {
new SignInPage().verifyErrorMessage(expMsg);
    }

    @Then("^User should be able to see sign out link$")
    public void userShouldBeAbleToSeeSignOutLink() {
        new SignInPage().verifySignOutLink();
    }

    @And("^User clicks on sign out link$")
    public void userClicksOnSignOutLink() {
        new SignInPage().clickOnSignOut();
    }

    @Then("^User can see the sign in link displayed$")
    public void userCanSeeTheSignInLinkDisplayed() {
        new SignInPage().verifySignInLink();
    }
}
