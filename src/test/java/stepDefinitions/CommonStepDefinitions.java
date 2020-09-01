package stepDefinitions;


import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Actions.CommonActions;
import Utilities.DriverScript;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CommonStepDefinitions extends DriverScript{
	
	CommonActions objCommonActions = new CommonActions(driver);
	
	@Given("I login to Application$")
    public void setupLogin() throws Throwable {
    	objCommonActions.setup();
	}
		
	@And ("^I click on \"([^\"]*)\"$")
	public void clickOn(String xpathKey) throws Exception{
		objCommonActions.clickOn(xpathKey);
	}
	
	@And ("^I scroll to the \"([^\"]*)\" of the page$")
	public void scroll(String action) throws Exception{
		objCommonActions.scroll(action);
	}
	
	@And ("^I select date \"([^\"]*)\"$")
	public void selectDate(String date) throws Exception{
		objCommonActions.selectDate(date);
	}
	
	@And ("^I mouse hover on \"([^\"]*)\"$")
	public void mouseHoverOn(String xpathKey) throws Exception{
		objCommonActions.mouseHoverOn(xpathKey);
	}
	
	@And ("^I verify \"([^\"]*)\"$")
	public void verifyObject(String xpathKey) throws Exception{
		objCommonActions.verifyObject(xpathKey);
	}
	
	@And ("^I verify \"([^\"]*)\" is \"([^\"]*)\"$")
	@Then ("^I wait till \"([^\"]*)\" is \"([^\"]*)\"$")
	public void verifyObjectVisibilty(String xpathKey, String text) throws Exception{
		Thread.sleep(2000);
		if(text.equals("Not Visible")||text.equals("Invisible"))
		{
			if(text.equals("Invisible")) {
				objCommonActions.invisibility(xpathKey);
			}else {
				objCommonActions.verifyNot(xpathKey);
			}
		}
		else
		{
			objCommonActions.verifyObject(xpathKey);
		}
//		objCommonActions.verifyObject(xpathKey);
	}
	
	@And ("^I wait for \"([^\"]*)\" seconds$")
	public void waitFor(String seconds) throws Exception{
		objCommonActions.waitFor(seconds);
	}
	
	@And("^I enter \"([^\"]*)\" in \"([^\"]*)\"$")
	public void iEnterText(String text, String xpathKey) throws Exception{
		objCommonActions.enterText(text,xpathKey);
	}
	
	@And("^I enter \"([^\"]*)\" in \"([^\"]*)\" then store as \"([^\"]*)\"$")
	public void iEnterTextAndStore(String text, String xpathKey, String key) throws Exception{
		objCommonActions.enterTextAndStore(text, xpathKey, key);
	}
	
	@And ("^I select \"([^\"]*)\" in \"([^\"]*)\"$")
	public void selectObject(String text, String xpathKey) throws Exception{
		objCommonActions.selectObject(text,xpathKey);
	}
	
	@Then ("^I verify \"([^\"]*)\" text on \"([^\"]*)\" is not available$")
	public void verifyTextElementNotPresent(String text, String xpathKey) throws Exception{
		objCommonActions.verifyTextElementNotPresent(text, xpathKey);
	}
	
	@Then("^I clear the text \"([^\"]*)\"$")
	public void i_Clear_The_Text(String xpathKey) throws Exception{
		objCommonActions.iClearText(xpathKey);
	}
	
	@Then("^I click \"([^\"]*)\" on \"([^\"]*)\"$")
	public void i_Click_Organization_On_Text(String text, String xpathKey) throws Exception{
		objCommonActions.iclickOnParticularText(text,xpathKey);
	}
	
	@Then ("^I veify \"([^\"]*)\" in Alert$")
	public void i_Veriy_Text_InAlert(String text) throws Throwable{
		objCommonActions.iVeriyTextInAlert(text);
	}
	
	@Then ("^I accept Alert$")
	public void i_Accept_Alert() throws Throwable{
		objCommonActions.acceptAlert();
	}
	
//	@Then ("^Upload file \"([^\"]*)\"$")
//	public void uploadGivenFile(String fileName) throws Throwable{
//		objCommonActions.uploadGivenFile(fileName);
//	}
	
	@Then("^I check default content switch$")
	public void i_check_default_content_switch() throws Throwable {
		objCommonActions.swithToDefault();
	}
	
	
	
	@Then ("^I enter \"([^\"]*)\" in attribute \"([^\"]*)\" for \"([^\"]*)\"$")
	public void enterTextInAttribute(String attValue, String attName, String xpathKey) throws Throwable{
		objCommonActions.enterTextInAtribute(attValue, attName, xpathKey);
	}
	
	@Then("^I cleared the text \"([^\"]*)\"$")
	public void i_cleared_the_text(String xpathKey) throws Throwable {
		objCommonActions.iClearedText(xpathKey);
	   
	}
	
	@And("^I verified \"([^\"]*)\"$")
	public void i_verified(String xpathKey) throws Throwable {
		objCommonActions.iVerifiediFrame(xpathKey);
			}
	
	@Then("^I check \"([^\"]*)\"$")
	public void i_check(String xpathKey) throws Throwable {
		objCommonActions.iVerifiedPrintCalculatoriFrame(xpathKey);
	    }
	
	@Then("^I upload an Attachment$")
	public void i_upload_an_Attachment() throws Throwable {
		objCommonActions.uploadAttachment();
	}
	
	@Then("^I upload \"([^\"]*)\"$")
	public void i_upload(String FileName) throws Throwable {
		objCommonActions.uploadGivenFile(FileName);
	    
	}
	
	@Then("^checked \"([^\"]*)\" in \"([^\"]*)\"$")
	public void checked_in(String text, String xpathKey) throws Throwable {
		objCommonActions.TaxAndServices(text,xpathKey);
	    
	}
	
	
	

}
