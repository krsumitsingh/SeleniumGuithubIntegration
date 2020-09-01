package Utilities;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
//import java.io.FileOutputStream;
import java.io.IOException;
//import java.io.OutputStream;
import java.util.HashMap;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class DriverScript {

	protected static WebDriver driver;
	public static Properties Config = null;
	public static FileInputStream fis;
	public static File directory = new File(".");
	public static String os;
	public static String browser;

	public DriverScript() {
		try {
			initialize();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public void initialize() throws Exception {
		if (Config == null) {

			Config = new Properties();

			try {
				String fisFilePath = System.getProperty("user.dir")
						+ "//src//test//java//Utilities//config.properties";
				fis = new FileInputStream(fisFilePath);
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			}
			try {
				Config.load(fis);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		if (driver == null)
			
			createNewDriverInstance();
		}
	
	private void createNewDriverInstance() throws Exception {

		browser = Config.getProperty("Browser").toLowerCase();
		os = Config.getProperty("OS");

		switch (browser) {
		case "chrome":
		String downloadFilepath = System.getProperty("user.dir") + File.separator + "target" + File.separator + "Downloads" ;
				
				HashMap<String, Object> chromePrefs = new HashMap<String, Object>();
			   chromePrefs.put("profile.default_content_settings.popups", 0);
			            chromePrefs.put("download.default_directory", downloadFilepath);
			
			System.setProperty("webdriver.chrome.silentOutput", "true");
			WebDriverManager.chromedriver().setup();
			ChromeOptions options = new ChromeOptions();
            options.addArguments("--start-maximized");
            options.addArguments("--disable-browser-side-navigation");
			options.addArguments("--disable-extensions");
			options.addArguments("disable-infobars");
			options.addArguments("--disable-plugins-discovery");
			options.setExperimentalOption("prefs", chromePrefs);
			
			if(!Config.getProperty("HeadlessParameter").isEmpty()){
				options.addArguments("--no-sandbox");
				options.addArguments("--window-size=1920,1080");
				options.addArguments("--disable-gpu");
				options.setExperimentalOption("useAutomationExtension", false);
				options.addArguments("--proxy-server='direct://'");
				options.addArguments("--proxy-bypass-list=*");
				options.addArguments("--headless");
			}
            driver = new ChromeDriver(options);
            driver.manage().timeouts().pageLoadTimeout(600, TimeUnit.SECONDS);
			if(Config.getProperty("HeadlessParameter").isEmpty()){
//				driver.manage().window().fullscreen();
			}
			break;			

		default:
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			}
	}

	public WebDriver getDriver() {
		return driver;
	}

	public void quitDriver() {
			driver.manage().deleteAllCookies();
			driver.quit();
			driver = null;
	}
}
