package Utilities;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/Features/5_OrdersTaxes.feature"},
		glue = {""},
		tags = {},
		
		/*plugin = {"html:target/cucumber-results", "usage:target/cucumber-results/cucumber-usage.json",
				"junit:target/cucumber-results/cucumber-results.xml", "json:target/cucumber-results/cucumber.json"},*/
		
		plugin = {"pretty","html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json",
				"html:target/cucumber-results", "usage:target/cucumber-results/cucumber-usage.json",
				"junit:target/cucumber-results/cucumber-results.xml", "json:target/cucumber-results/cucumber.json"},
		
		monochrome=true,
		strict=true,
		dryRun=false
		)
public class TestRunner{

} 