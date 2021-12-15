package com.automation.pages;


import com.automation.utility.Utility;
import com.aventstack.extentreports.Status;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends Utility {

    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "quantity_wanted")
    WebElement quantity;

    @FindBy(id = "group_1")
    WebElement size;

    @FindBy(className = "attribute_list")
    WebElement colour;

    @FindBy(xpath = "//button[@name='Submit']")
    WebElement addToCartBtn;

    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement popUpDisplay;

    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeBtn;

    public void clickOnCloseBtn() {
        clickOnElement(closeBtn);
        log.info("Clicking on close button  " + closeBtn.toString());
    }

    public void verifyPopUpDisplayMsg(String text) {
        verifyThatTextIsDisplayed(popUpDisplay, text);
        log.info("verifying message  " + popUpDisplay.toString());
    }

    public void clickOnAddToCartBtn() {
        clickOnElement(addToCartBtn);
        log.info("Clicking on add to cart button  " + addToCartBtn.toString());
    }

    public void selectColour(String color) {
        clickOnElement(colour, color);
        log.info("Selecting colour  " + colour.toString());
    }

    public void selectSize(String text) {
        selectByVisibleTextFromDropDown(size, text);
        log.info("Selecting size  " + size.toString());
    }

    public void changeQuantity(String num) {
        sendKeysToElement(quantity, Keys.BACK_SPACE + num);
        log.info("Entering quantity  " + quantity.toString());
    }

}
