package com.sample.stepdefinations;

import org.junit.Assert;

import com.test.auto.framework.browser.BrowserfactoryWithSupplier;
import com.test.framework.OnlineShoping.pages.BookHomePage;
import com.test.framework.OnlineShoping.pages.LoginPage;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ShopingStepdefination {

	LoginPage loginPage;
	BookHomePage homePage;
	
	@Given("^I launched broeser with this URL$")
	public void i_call_the_space_data_service() throws Throwable {
		BrowserfactoryWithSupplier browserfactoryWithSupplier = new BrowserfactoryWithSupplier();
		loginPage = browserfactoryWithSupplier.navigateToLibLoginPage();
	}

	@When("^I entered valid us pwd and click on login button$")
	public void i_entered_valid_us_pwd_and_click_on_login_button() throws Throwable {
	   
		homePage=loginPage.doSuccessfulBooksLogin();
		Thread.sleep(1000);
	}

	@Then("^I should navigate to home page$")
	public void i_should_navigate_to_home_page() throws Throwable {
		homePage.getBook("git");
		homePage.getSearchicon().click();
	  
	}

}
