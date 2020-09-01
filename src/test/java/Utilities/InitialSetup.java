package Utilities;


import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.IOException;

public class InitialSetup {

    public static WebDriver driver;

    @Before
    public  void beforeScenario() {
        driver = new DriverScript().getDriver();
    }

    @After
    public void afterScenario(Scenario scenario) throws IOException {

        try {
            if (scenario.isFailed()) {
                 byte[] screenshot = ((TakesScreenshot) driver)
                        .getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            }
        } finally {
        		new DriverScript().quitDriver();
        }

    }
}