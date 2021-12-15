package com.automation.pages;


import com.automation.utility.Utility;
import com.aventstack.extentreports.Status;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement women;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[@class='header-container']/header[@id='header']/div/div[@class='container']/div[@class='row']/div[@id='block_top_menu']/ul[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']/li[2]/a[1]")
    WebElement dresses;

    @CacheLookup
    @FindBy(xpath = "//li[@class='sfHover']//a[@title='T-shirts'][normalize-space()='T-shirts']")
    WebElement tshirts;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Sign in']")
    WebElement signInLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='My Store']")
    WebElement logo;

    public void clickOnSignInLink(){
        clickOnElement(signInLink);
        log.info("Clicking on sign in link  " + signInLink.toString());
    }

    public void verifyLogo(){
        verifyThatElementIsDisplayed(logo);

    }

    public void selectMenu(String menu) {
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//div[@id='block_top_menu']"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(menu)) {
                names.click();
                break;
            }
        }

    }

}
