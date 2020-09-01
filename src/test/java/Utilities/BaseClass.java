package Utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Properties;
import java.util.StringTokenizer;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.yaml.snakeyaml.Yaml;

import com.google.gson.Gson;
import com.jayway.restassured.response.Response;

public class BaseClass {
	
	public WebDriver driver = null;
	protected static long Wait_Time = 1000L;
	protected static long delay_Time = 2000L;
	protected static long LongDelay_Time = 5000L;
	public static Properties Cache=new Properties();
	public static Properties properties=new Properties();
	static InputStream inPropFile = null;
	FileInputStream fisCache;
	OutputStream outPropFile;
	static protected String jsonString;
	public static String parentWindow = null;
	String TC1="169.88";
	
	private static Gson gson = new Gson();
	protected static Response response;
	
	public static List<Long> idList = new ArrayList<>();
	
	public BaseClass(final WebDriver driver) {
		this.driver = driver;
	}
	public WebDriverWait waitTo()
	{
		WebDriverWait wait = new WebDriverWait(driver, 120);
		return wait;
	}

	public void delay() {
		try {
			Thread.sleep(delay_Time);
		} catch (InterruptedException e) {
			e.printStackTrace();

		}
	}

	public void longDelay() {
		try {
			Thread.sleep(LongDelay_Time);
		} catch (InterruptedException e) {
			e.printStackTrace();

		}
	}
	
	public void iWillWaitToSee(By locator) {
		try {
			waitTo().until(ExpectedConditions.visibilityOfElementLocated(locator));
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}
	
	public static String generateTimeStamp(){
        DateFormat df = new SimpleDateFormat("MMddyyyyHHmmss");
        Date date = new Date();
        String timeStamp = df.format(date);
        return timeStamp;
    }
	
	public boolean isElementVisible(final WebElement ele) {
		long start = System.currentTimeMillis();
		while (true) {
			if (ele.isDisplayed()) {
				return true;
			} else {
				if (System.currentTimeMillis() - start >= Wait_Time) {
					throw new Error("Timeout reached element not visiblie");
				} else {
					try {
						synchronized (this) {
							wait(200);
						}
					} catch (final InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		}
	}
	
	public boolean isElementNotPresentOnPage(String ele) {
		boolean value = false;
		try {
			driver.findElement(By.xpath(ele));
		} catch (Exception e) {
			value = true;
		}
		return value;
	}
	
	public static String getYamlValue(String yamlToken) throws Exception {
        
        int tokenCount = 0, i = 0;
        Map<?, ?> map = null;

        StringTokenizer st = new java.util.StringTokenizer(yamlToken, ".");
        try {
        	String ObjRepoFilepath = System.getProperty("user.dir") + File.separator + "Object_Repo.yaml";
            Reader reader = new FileReader(ObjRepoFilepath);
            String val = null;
            Yaml yaml = new Yaml();
            map = (Map<?, ?>) yaml.load(reader);
            tokenCount = st.countTokens();
            for (i = 1; i < tokenCount; i++) {
                String token = st.nextToken();
                map = (Map<?, ?>) map.get(token);
            }
            val = map.get(st.nextToken()).toString();
            reader.close();
            return val;
        }
        catch (Exception e) {
         System.out.println("Error reading " + yamlToken + " from Object Repository. Please check yml file and Feature file.");
   //Tools.customLog("Error reading " + yamlToken + " from Object Repository. Please check yml file and Feature file.");
   throw new Exception("'Error reading " + yamlToken + " from Object Repository. Please check yml file and Feature file.'");
        }
    }
	
	public void clickElement(String xpath) throws InterruptedException{
		Thread.sleep(1000);
		WebElement ele= driver.findElement(By.xpath(xpath));
		iWillWaitToSee(By.xpath(xpath));
   		 
		if (isElementVisible(ele)) {
			waitTo().until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
			ele.click();
		}
	}
	
	public void mouseHover(String xpath)
	{
		iWillWaitToSee(By.xpath(xpath));
		WebElement ele= driver.findElement(By.xpath(xpath));
		Actions action = new Actions(driver);
        action.moveToElement(ele).build().perform();
	}
	
	public void verifyElement(String xpath)
	{
		iWillWaitToSee(By.xpath(xpath));
		WebElement ele= driver.findElement(By.xpath(xpath));
		isElementVisible(ele);
	}
	
	public boolean verifyNoElement(String xpath)
	{
		boolean value = true;
		try {
			driver.findElement(By.xpath(xpath));
		} catch (Exception e) {
			value = false;
		}
		return value;
	}
	
	public boolean isElementPresentOnPage(By locatorKey) {
		boolean value = true;
		try {
			driver.findElement(locatorKey);

		} catch (org.openqa.selenium.NoSuchElementException e) {
			value = false;
		}
		return value;
	}
	
	public void enterTextInElement(String text, String xpath)
	{
		WebElement ele= driver.findElement(By.xpath(xpath));
		ele.sendKeys(text);
	}
	
	public void selectFromDropDown(String text, String xpath)
	{
		xpath = xpath.replace("STATE", text);
		WebElement ele= driver.findElement(By.xpath(xpath));
		ele.click();
	}
	
	public void verifyTextForParticularElement(String ele, String text) {
		WebElement element = driver.findElement(By.xpath(ele));
		if (isElementVisible(element)) {
			//Assert.assertEquals(element.getText(), text);
			Assert.assertEquals(element.getText(), text);
		}
	}
	
	public void iEnterDataInField(String element, String text){
		WebElement ele = driver.findElement(By.xpath(element));
		if (!isElementVisible(ele)) {
			return;
		}
		ele.clear();
		
		if ("".equals(text)) {
			return;
		}
		ele.sendKeys(text);
	}
	
	public void clearText(String xpath){
		WebElement ele= driver.findElement(By.xpath(xpath));
        waitTo().until(ExpectedConditions.elementToBeClickable(ele));
		if(DriverScript.Config.getProperty("OS").equals("mac")){
			ele.clear();
		}
		else
		{
			ele.sendKeys(Keys.chord(Keys.CONTROL,"a", Keys.DELETE));	
		}
	}
	
	public void switchToIframe(String xpath){
		//WebDriverWait wait = new WebDriverWait(driver, 20);
		WebElement ele= driver.findElement(By.xpath(xpath));
		System.out.println("BEFORE SWITCH TO FRAME");
		waitTo().until(ExpectedConditions
				.frameToBeAvailableAndSwitchToIt(ele));
		System.out.println("AFTER FRAME DETECTED");		
	}
	
	public void switchToPCIframe(String xpath){
		//WebDriverWait wait = new WebDriverWait(driver, 20);
		WebElement ele= driver.findElement(By.xpath(xpath));
		System.out.println("BEFORE SWITCH TO PrintCalcFRAME");
		waitTo().until(ExpectedConditions
				.frameToBeAvailableAndSwitchToIt(ele));
		waitTo().until(ExpectedConditions
				.frameToBeAvailableAndSwitchToIt(By.xpath("//*[@id='aspxCallPnlMain_iframePrintCalc']")));
		System.out.println("AFTER PC FRAME DETECTED");		
	}
	
	public void swithToDefault(){
		driver.switchTo().defaultContent();	
		System.out.println("Switch to default content");
	}
	
	public boolean isElementDisabled(String xpath){
		WebElement element = driver.findElement(By.xpath(xpath));
		return element.isDisplayed();
	}
	
	public boolean isElementEnabled(String xpath){
		WebElement element = driver.findElement(By.xpath(xpath));
           //	return element.isEnabled();
		boolean clickable = true;
		String attr = element.getAttribute("class");
		if ((attr != null) && (attr.indexOf("disabled") > -1)) {
				clickable = false;
		}	
		return clickable;
	}

	// isElementEnabled modified as below for disabled-buttons ; and above is for editable/non-editable Fields:	
		public boolean isButtonElementEnabled(String xpath){
			WebElement element = driver.findElement(By.xpath(xpath));
			boolean clickable = false;
			if (element.getAttribute("disabled").equals("true"))  {
					clickable = true;
			}	
			return clickable;
		}
	
	public void scrollIntoViewElement(String xpath){
		 WebElement element = driver.findElement(By.xpath(xpath));
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
	}
	
	public static String generateJson(Object object) {
        return gson.toJson(object).toString();
    }

	public void acceptAlert() {
		Alert alert = driver.switchTo().alert();
		alert.accept();
	}
	
	
	public String getTextAlret() {
		String alertMessage = driver.switchTo().alert().getText();
		return alertMessage;
	}
	
	public void invisible(String xpath) throws InterruptedException 
	{   try
	    {	while(driver.findElements(By.xpath(xpath)).size()>1) {
	    	waitTo().until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(xpath)));
		 	Thread.sleep(2000);
	      }
	    }
	    catch(org.openqa.selenium.NoSuchElementException e) {
	    }
	}
	
	public boolean verifyNotVisible(String xpath) 
	{   try
	    {
		   driver.findElement(By.xpath(xpath));
		   return false;
	    }
	    catch(org.openqa.selenium.NoSuchElementException e) {
	        return true;
	    }
	}
	
	 public void setAttribute(WebElement element, String attName, String attValue) {
		 ((JavascriptExecutor) driver).executeScript("arguments[0].setAttribute(arguments[1], arguments[2]);", 
	                element, attName, attValue);
	    }
	 
	/**
	 * Method will verify total and taxes in the header level
	 * @param text2
	 * @param text
	 */
	 public void verifyTotalAndTaxForParticularElement(String text,String xpath) {
		 
			WebElement element = driver.findElement(By.xpath(xpath));
			
			if (isElementVisible(element)) {
				//Assert.assertEquals(element.getText(), text);
				//System.out.println("before string conversion-->"+element.getText());
				
				String TotalAndTaxes = element.getText().replace("$", "");
				//System.out.println("after string conversion-->"+TotalAndTaxes);
				
				Assert.assertEquals(text,TotalAndTaxes);
				System.out.println("Expected Total & Taxes "+text+" Actual Total & Taxes "+TotalAndTaxes);
			}
			
			
			
		}
	 
	 
}
