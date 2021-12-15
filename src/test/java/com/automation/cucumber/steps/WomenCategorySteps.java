package com.automation.cucumber.steps;

import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WomenCategorySteps {
    @When("^User clicks on Women tab$")
    public void userClicksOnWomenTab(String tabName) {
        new WomenCategoryPage().selectMenu(tabName);
    }

    @Then("^User can see the women page displayed with message \"([^\"]*)\"$")
    public void userCanSeeTheWomenPageDisplayedWithMessage(String expMsg) {
       new WomenCategoryPage().verifyWomenTxt(expMsg);
    }

    @And("^User clicks on the product \"([^\"]*)\"$")
    public void userClicksOnTheProduct(String product)  {
       new WomenCategoryPage().selectProduct(product);
    }

    @And("^User changes the quantity \"([^\"]*)\"$")
    public void userChangesTheQuantity(String qty)  {
       new ProductPage().changeQuantity(qty);
    }

    @And("^User selects size \"([^\"]*)\"$")
    public void userSelectsSize(String size)  {
        new ProductPage().selectSize(size);
    }

    @And("^User selects colour \"([^\"]*)\"$")
    public void userSelectsColour(String colour)  {
        new ProductPage().selectColour(colour);
    }

    @And("^User clicks on add to cart button$")
    public void userClicksOnAddToCartButton() {
        new ProductPage().clickOnAddToCartBtn();
    }

    @And("^User can see popup message displayed \"([^\"]*)\"$")
    public void userCanSeePopupMessageDisplayed(String expMsg)  {
        new ProductPage().verifyPopUpDisplayMsg(expMsg);
    }

    @Then("^user can close the popup$")
    public void userCanCloseThePopup() {
        new ProductPage().clickOnCloseBtn();
    }
}
