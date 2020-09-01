package Actions;

import java.io.File;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Utilities.BaseClass;
import Utilities.DriverScript;

public class CommonActions extends BaseClass
{
	/*Autoit Fileupload.exe path*/
	public String projectPath =
			System.getProperty("user.dir")+"\\src\\test\\java\\Utilities\\FileUpload.exe";

	By documentType1 = By
			.xpath("//*[@id='ctl00_mainContentPlaceHolder_linksGridView_footer0_documentTypeComboBox_I']");
	By fileNameField1 = By
			.xpath("//*[@id='ctl00_mainContentPlaceHolder_linksGridView_footer1_documentTextBox_I']");
	By uploadFileBtn = By
			.xpath(".//*[@id='ctl00_mainContentPlaceHolder_linksGridView_footer1_fileUpload_UploadInputs']");
	By saveDisketteBtn = By
			.xpath("//*[@id='ctl00_mainContentPlaceHolder_linksGridView_footer2_addImageButton']");


	public static Map<String, String> dataMap = new HashMap<String,String>();
	public CommonActions(WebDriver driver) {
		super(driver);
	}

	public void setup() throws Exception
	{
		try
		{
			driver.navigate().to(DriverScript.Config.getProperty("BaseUrl"));
			//driver.get(DriverScript.Config.getProperty("BaseUrl"));
			driver.manage().timeouts().pageLoadTimeout(240, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			if(DriverScript.Config.getProperty("Browser").equals("ie"))
			{
				driver.manage().window().maximize();
			}
			String uName = getYamlValue("Login.UserName");
			String pwd = getYamlValue("Login.Password");
			driver.findElement(By.xpath(uName)).sendKeys(DriverScript.Config.getProperty("UserName"));
			driver.findElement(By.xpath(pwd)).sendKeys(DriverScript.Config.getProperty("Password"));
		}
		catch(Exception e)
		{
			throw e;
		}
	}

	public void clickOn(String xpathKey) throws Exception
	{
		if(!xpathKey.equals(""))
		{
			String xpath = null;
			String REPLACEVARIABLE = null;
			if(xpathKey.contains(":")) {
				REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
				xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
			}
			xpath = getYamlValue(xpathKey);
			if(xpath.contains("VARIABLE")) {
				if(REPLACEVARIABLE.toLowerCase().contains("datamap")) { //CustomerName
					REPLACEVARIABLE=REPLACEVARIABLE.replace("DataMap-", "").trim();
					REPLACEVARIABLE=dataMap.get(REPLACEVARIABLE);
				}
				xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
			}
			iWillWaitToSee(By.xpath(xpath));
			for(int i=0;i<=2;i++)
			{
				try
				{
					Thread.sleep(1000);
					clickElement(xpath);
					break;
				}

				catch(Exception e)
				{
					System.out.println(e.getMessage());
				}
			}
			Thread.sleep(1000);
		}

	}

	public void scroll(String action)
	{
		if(action.equals("top"))
		{
			JavascriptExecutor js = (JavascriptExecutor) driver;
			js.executeScript("window.scrollTo(0, -document.body.scrollHeight)");
		}
		else if(action.equals("bottom"))
		{

		}
	}


	//Modify As per your Need
	public void selectDate(String date) throws ParseException 
	{
		if(!(date.equals("")))
		{
			if(date.equals("TodaysDate"))
			{
				Date todaysDate = new Date();
				date= new SimpleDateFormat("yyyy/MM/dd").format(todaysDate);
			}
			else if(date.equals("FutureDate"))
			{
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
				Date futureDate = new Date();
				Calendar c = Calendar.getInstance();
				c.setTime(futureDate);
				c.add(Calendar.DATE, 365);
				date = sdf.format(c.getTime());
			}

			String[] arrMonth = new String[]{"January","February","March","April","May","June","July","August","September","October","November","December"};
			Date date1=new SimpleDateFormat("yyyy/MM/dd").parse(date); 
			Calendar cal = Calendar.getInstance();
			cal.setTime(date1);
			int year = cal.get(Calendar.YEAR);
			int iMonth = cal.get(Calendar.MONTH);
			String month = arrMonth[iMonth];
			int day = cal.get(Calendar.DAY_OF_MONTH);

			String displayYear = driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText();
			String displayMonth = driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText();
			String m = displayMonth.substring(0,displayMonth.indexOf(" ")).trim();
			String y = displayMonth.substring(displayMonth.indexOf(" ")).trim();
			if(displayYear.contains(Integer.toString(year)))
			{
				if(displayMonth.contains(month))
				{
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
				else if((Arrays.asList(arrMonth).indexOf(m))>iMonth)
				{
					while(!(driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText().contains(month)))
					{
						driver.findElement(By.xpath("//button[@class='react-datepicker__navigation react-datepicker__navigation--previous']")).click();
					}
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
				else if((Arrays.asList(arrMonth).indexOf(m))<iMonth)
				{
					while(!(driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText().contains(month)))
					{
						driver.findElement(By.xpath("//button[@class='react-datepicker__navigation react-datepicker__navigation--next']")).click();
					}
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
			}
			else if(Integer.parseInt(y)>year)
			{
				while(!(driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText().contains(Integer.toString(year))))
				{
					driver.findElement(By.xpath("//button[@class='react-datepicker__navigation react-datepicker__navigation--previous']")).click();
				}
				displayYear = driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText();
				displayMonth = driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText();
				m = displayMonth.substring(0,displayMonth.indexOf(" ")).trim();
				y = displayMonth.substring(displayMonth.indexOf(" ")).trim();
				if(displayMonth.contains(month))
				{
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
				else if((Arrays.asList(arrMonth).indexOf(m))>iMonth)
				{
					while(!(driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText().contains(month)))
					{
						driver.findElement(By.xpath("//button[@class='react-datepicker__navigation react-datepicker__navigation--previous']")).click();
					}
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
				else if((Arrays.asList(arrMonth).indexOf(m))<iMonth)
				{
					while(!(driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText().contains(month)))
					{
						driver.findElement(By.xpath("//button[@class='react-datepicker__navigation react-datepicker__navigation--next']")).click();
					}
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
			}
			else if(Integer.parseInt(y)<year)
			{
				while(!(driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText().contains(Integer.toString(year))))
				{
					driver.findElement(By.xpath("//button[@class='react-datepicker__navigation react-datepicker__navigation--next']")).click();
				}
				displayYear = driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText();
				displayMonth = driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText();
				m = displayMonth.substring(0,displayMonth.indexOf(" ")).trim();
				y = displayMonth.substring(displayMonth.indexOf(" ")).trim();
				if(displayMonth.contains(month))
				{
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
				else if((Arrays.asList(arrMonth).indexOf(m))>iMonth)
				{
					while(!(driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText().contains(month)))
					{
						driver.findElement(By.xpath("//button[@class='react-datepicker__navigation react-datepicker__navigation--previous']")).click();
					}
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
				else if((Arrays.asList(arrMonth).indexOf(m))<iMonth)
				{
					while(!(driver.findElement(By.xpath("//div[@class='react-datepicker__current-month']")).getText().contains(month)))
					{
						driver.findElement(By.xpath("//button[@class='react-datepicker__navigation react-datepicker__navigation--next']")).click();
					}
					driver.findElement(By.xpath("//div[@class='react-datepicker__month']/div/div[text()="+day+"and not(contains(@class,'react-datepicker__day--outside-month'))]")).click();
				}
			}
		}
	}

	public void mouseHoverOn(String xpathKey) throws Exception
	{
		String xpath = getYamlValue(xpathKey);
		mouseHover(xpath);
	}

	public void verifyObject(String xpathKey) throws Exception
	{
		Thread.sleep(1000);
		String xpath = null;
		String REPLACEVARIABLE = null;
		if(xpathKey.contains(":")) {
			REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
			//System.out.println("*****"+REPLACEVARIABLE);
			xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
			//System.out.println("*****"+xpathKey);
		}
		xpath = getYamlValue(xpathKey);
		//System.out.println("*****"+xpath);

		if(xpath.contains("VARIABLE")) {
			if(REPLACEVARIABLE.toLowerCase().contains("datamap")) {
				REPLACEVARIABLE=REPLACEVARIABLE.replace("DataMap-", "").trim();
				REPLACEVARIABLE=dataMap.get(REPLACEVARIABLE);
			}
			xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
			//System.out.println("*****"+xpath);
		}
		verifyElement(xpath);
	}

	public void waitFor(String seconds) throws InterruptedException
	{
		//Thread.sleep(Long.parseLong(seconds));
		TimeUnit.SECONDS.sleep(Long.parseLong(seconds));
	}

	public void enterText(String text, String xpathKey) throws Exception
	{
		if(!text.equals(""))
		{
			String xpath = null;
			String REPLACEVARIABLE = null;
			if(xpathKey.contains(":")) {
				REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
				xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
			}
			xpath = getYamlValue(xpathKey);
			if(xpath.contains("VARIABLE")) {
				xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
			}

			if(text.equalsIgnoreCase("randomtext")) {
				text = text+RandomStringUtils.randomAlphabetic(10).toLowerCase();
			}else if(text.equalsIgnoreCase("randomnumber")) {
				text = RandomStringUtils.randomNumeric(10);
			}
			if(text.toLowerCase().contains("datamap")) {
				text = text.replace("DataMap-", "").trim();
				text = dataMap.get(text);
			}
			enterTextInElement(text, xpath);
			Thread.sleep(1000);
		}
	}

	public void enterTextAndStore(String text, String xpathKey, String key) throws Exception
	{	
		if(!text.equals(""))
		{
			String xpath = null;
			String REPLACEVARIABLE = null;
			if(xpathKey.contains(":")) {
				REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
				xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
			}
			xpath = getYamlValue(xpathKey);
			if(xpath.contains("VARIABLE")) {
				xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
			}
			text = text+RandomStringUtils.randomAlphabetic(10).toLowerCase();
			enterTextInElement(text, xpath);
			dataMap.put(key,text);
			System.out.println(key+" -> "+dataMap.get(key));
			Thread.sleep(1000);
		}
	}

	public void selectObject(String text, String xpathKey) throws Exception
	{
		if(!text.equals(""))
		{
			String xpath = getYamlValue(xpathKey);
			selectFromDropDown(text, xpath);
		}
	}

	public void verifyTextElementNotPresent(String text, String xpathKey) throws Exception
	{
		String xpath = getYamlValue(xpathKey);
		Assert.assertFalse(verifyNoElement(xpath));
	}

	public void iClearText(String xpathKey) throws Exception{
		if(!xpathKey.equals("")) {
			String xpath = null;
			String REPLACEVARIABLE = null;
			if(xpathKey.contains(":")) {
				REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
				xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
			}
			xpath = getYamlValue(xpathKey);
			if(xpath.contains("VARIABLE")) {
				xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
			}
			clearText(xpath);
		}
	}

	public void iclickOnParticularText(String text, String xpathKey) throws Exception{
		String xpath = getYamlValue(xpathKey);
		xpath = xpath.replace("text", text);
		clickElement(xpath);
	}

	public void uploadGivenFile(String fileName) throws Exception 
	{
		String file = "";

		driver.findElement(documentType1).click();
		driver.findElement(documentType1).sendKeys("Logo");
		driver.findElement(documentType1).sendKeys(Keys.TAB);
		driver.findElement(fileNameField1).sendKeys("Logo_Index");
		driver.findElement(fileNameField1).sendKeys(Keys.TAB);
		Thread.sleep(5000);
		
		// Your File Path
		file = System.getProperty("user.dir") + File.separator + "src"+File.separator + "test"+File.separator + "Import"+ File.separator + fileName;

		System.out.println(" File location to upload: "+file);
		//WebElement ele = driver.findElement(By.xpath(getYamlValue("xpath")));
		WebElement ele = driver.findElement(By.
				xpath("//*[@id='ctl00_mainContentPlaceHolder_linksGridView_footer1_fileUpload_Input_0']"));
		ele.sendKeys(file);
	}
	

	public void iVeriyTextInAlert(String text) {
		String actual = getTextAlret();
		Assert.assertEquals(text,actual);
	}

	public void iAcceptAlert() {
		acceptAlert();
	}

	public void invisibility(String xpathKey) throws Exception
	{	
		String xpath = null;
		String REPLACEVARIABLE = null;
		if(xpathKey.contains(":")) {
			REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
			xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
		}
		xpath = getYamlValue(xpathKey);
		if(xpath.contains("VARIABLE")) {
			xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
		}
		//			else {
		//			 xpath = getYamlValue(xpathKey);
		//		}
		invisible(xpath);
	}

	public void verifyNot(String xpathKey) throws Exception
	{
		String xpath = null;
		String REPLACEVARIABLE = null;
		if(xpathKey.contains(":")) {
			REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
			xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
		}
		xpath = getYamlValue(xpathKey);
		if(xpath.contains("VARIABLE")) {
			xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
		}
		//		else {
		//		 xpath = getYamlValue(xpathKey);
		//		}
		Assert.assertTrue(verifyNotVisible(xpath));
	}

	public void enterTextInAtribute(String attValue,String attName, String xpathKey) throws Exception {

		String xpath = null;
		String REPLACEVARIABLE = null;
		if(xpathKey.contains(":")) {
			REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
			xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
		}
		xpath = getYamlValue(xpathKey);
		if(xpath.contains("VARIABLE")) {
			xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
		}

		WebElement element = driver.findElement(By.xpath(xpath));
		setAttribute(element, attName, attValue);
	}

	public void iClearedText(String xpathKey) throws Exception{
		String xpath = null;
		xpath = getYamlValue(xpathKey);
		clearText(xpath);


	}

	public void iVerifiediFrame(String xpathKey) throws Exception{
		String xpath = null;	
		xpath = getYamlValue(xpathKey);
		switchToIframe(xpath);	
	}

	public void iVerifiedPrintCalculatoriFrame(String xpathKey) throws Exception{
		String xpath = null;	
		xpath = getYamlValue(xpathKey);
		switchToPCIframe(xpath);	
	}

	/*Attachment Upload Function*/
	public void uploadAttachment() throws Throwable{
		for (int i = 0; i <= 2; i++) {
			driver.findElement(documentType1).click();
			driver.findElement(documentType1).sendKeys("Logo");
			driver.findElement(documentType1).sendKeys(Keys.TAB);
			driver.findElement(fileNameField1).sendKeys("Logo_Index");
			driver.findElement(fileNameField1).sendKeys(Keys.TAB);
			Thread.sleep(5000);
			driver.findElement(uploadFileBtn).click();			
			Thread.sleep(5000);
			// ***Runtime.getRuntime().exec is used for running executable
			// files
			// from selenium.
			Runtime.getRuntime().exec(projectPath);
			Thread.sleep(5000);
			driver.findElement(saveDisketteBtn).click();
			Thread.sleep(5000);
		}
	}
	
	/**
	 * Verify Tax and services
	 * @param text
	 * @param xpathKey
	 * @throws Exception
	 */
	public void TaxAndServices(String text,String xpathKey) throws Exception
	{
		
		if(!text.equals(""))
		{
			String xpath = null;
			String REPLACEVARIABLE = null;
			if(xpathKey.contains(":")) {
				REPLACEVARIABLE = xpathKey.substring(0,xpathKey.lastIndexOf(":"));
				xpathKey=xpathKey.substring(xpathKey.lastIndexOf(":")+1,xpathKey.length());
			}
			xpath = getYamlValue(xpathKey);
			if(xpath.contains("VARIABLE")) {
				xpath = xpath.replace("VARIABLE", REPLACEVARIABLE);
			}

			/*if(text.equalsIgnoreCase("randomtext")) {
				text = text+RandomStringUtils.randomAlphabetic(10).toLowerCase();
			}else if(text.equalsIgnoreCase("randomnumber")) {
				text = RandomStringUtils.randomNumeric(10);
			}
			if(text.toLowerCase().contains("datamap")) {
				text = text.replace("DataMap-", "").trim();
				text = dataMap.get(text);
			}*/
		
		System.out.println("****************");
		verifyTotalAndTaxForParticularElement(text,xpath);
		Thread.sleep(1000);
	}
	
	}
}
