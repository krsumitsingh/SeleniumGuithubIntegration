@FunctionalTest 
Feature: Orders Features Test Cases 

@SmokeTest 
Scenario Outline: Create Customer For Using it throughout 
	Given I login to Application 
	And I click on "Login.SignIn" 
	Then I verify "Common.LandingPage" 
	When I click on "Common.CRM" 
	Then I verify "CRM.CRMSerachLabel" 
	And I click on "CRM.NewCustomerBtn" 
	And I verify "CRM.CustomerLabel" 
	And I enter "RandomNumber" in "Customer Code:Common.InputField" 
	And I enter "<Customer_Name>" in "Customer Name:Common.InputField" then store as "CustomerName" 
	And I enter "<Address_1>" in "Address 1:Common.InputField" 
	And I enter "<Address_2>" in "Address 2:Common.InputField" 
	And I enter "<Address_3>" in "Address 3:Common.InputField" 
	And I enter "<City>" in "City:Common.InputField" 
	And I enter "<ST_Prov>" in "ST/Prov:Common.InputField" 
	And I enter "<Zip_Postal>" in "Zip/Postal:Common.InputField" 
	And I enter "<Email>" in "Email:Common.InputField" 
	And I click on "CRM.AccountWarningMessage" 
	And I click on "Save & Close:Common.Button" 
	Then I verify "CRM.CRMSerachLabel" 
	
	Examples: 
		| Customer_Name|Address_1          |Address_2      |Address_3  |City  |ST_Prov|Zip_Postal|Email         |
		| John Cenna   |22nd Jackson Street|Prinston Avenue|Fairfield  |Boston|VA     |96352     |Sam@redrass.com|
		
		@SmokeTest 
		Scenario: Create Order without Selecting Customer 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I verify "New Order:Common.Button" 
			And I click on "New Order:Common.Button" 
			And I verify "Orders.CustomerInputBox" 
			#And I enter "Order Automation_Comments" in "Project:Common.InputField" 
			And I enter "Order Automation_Comments" in "Orders.Project" 
			And I click on "Save:Common.Button" 
			And I veify "Please select a customer." in Alert 
			And I accept Alert 
			And I click on "Cancel:Common.Button" 
			
		@SmokeTest 
		Scenario: Create New Order without any services in Department 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I verify "New Order:Common.Button" 
			And I click on "New Order:Common.Button" 
			And I verify "Orders.CustomerInputBox" 
			And I enter "DataMap-CustomerName" in "Orders.CustomerInputBox" 
			And I click on "DataMap-CustomerName:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Orders.PromptBoxText" 
			And I click on "Common.WarningMsgOk" 
			And I enter "Order without any service " in "Orders.Project" then store as "Order" 
			And I click on "Save & Close:Common.Button" 
			And I verify "Orders.ProjectFilterSearch" 
			And I enter "DataMap-Order" in "Orders.ProjectFilterSearch" 
			And I verify "DataMap-Order:Orders.OrderProjectRow" 
			And I click on "DataMap-Order:Orders.OrderProjectRow" 
			And I verify "Orders.CustomerInputBox" 
			
		@SmokeTest 
		Scenario: Create Order with a Service 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I verify "New Order:Common.Button" 
			And I click on "New Order:Common.Button" 
			And I verify "Orders.CustomerInputBox" 
			And I enter "DataMap-CustomerName" in "Orders.CustomerInputBox" 
			And I click on "DataMap-CustomerName:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Orders.PromptBoxText" 
			And I click on "Common.WarningMsgOk"  
			#And I enter "Vivek Ranjan" in "Contact:Common.InputField_s"
			And I clear the text "Sales Rep:Common.InputField_s" 
			And I enter "Brian Moore" in "Sales Rep:Common.InputField_s" 
			And I click on "Sales Rep:Common.InputField_s" 
			And I clear the text "CSR:Common.InputField_s" 
			And I enter "Chris Huber" in "CSR:Common.InputField_s" 
			And I click on "CSR:Common.InputField_s" 
			And I clear the text "Company:Common.InputField_s" 
			And I enter "Midnight Printing" in "Company:Common.InputField_s" 
			And I click on "Company:Common.InputField_s" 
			And I enter "Order with No Action service " in "Orders.Project" then store as "Order" 
			And I enter "1250" in "Orders.ExpectedQuantity" 
			Then I click on "Data:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Orders.OrderServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "CASS" in "0:Orders.OrderServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			#And I click on "Copies:Common.ServiceOption" 
			#Then I wait till "Common.Loading" is "Invisible" 
			#		And I enter "222" in "0:Common.UnitPriceComboBox"
			#		Then I wait till "Common.Loading" is "Invisible"
			#And I enter "$12.001" in attribute "value" for "0:Common.UnitPriceComboBox" 
			#Then I wait till "Common.Loading" is "Invisible" 
			#And I click on "0:Common.UnitPriceComboBox" 
			#And I wait for "10" seconds 
			And I click on "Save & Close:Common.Button" 
			Then I verify "Orders.OrderSearchPage" 
			
		@SmokeTest 
		Scenario: Create Order with services-Wizard 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I verify "New Order:Common.Button" 
			And I click on "New Order:Common.Button" 
			And I verify "Orders.CustomerInputBox" 
			And I enter "DataMap-CustomerName" in "Orders.CustomerInputBox" 
			And I click on "DataMap-CustomerName:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Orders.PromptBoxText" 
			And I click on "Common.WarningMsgOk"  
			And I clear the text "Sales Rep:Common.InputField_s" 
			And I enter "Brian Moore" in "Sales Rep:Common.InputField_s" 
			And I click on "Sales Rep:Common.InputField_s" 
			And I clear the text "CSR:Common.InputField_s" 
			And I enter "Chris Huber" in "CSR:Common.InputField_s" 
			And I click on "CSR:Common.InputField_s" 
			And I clear the text "Company:Common.InputField_s" 
			And I enter "Midnight Printing" in "Company:Common.InputField_s" 
			And I click on "Company:Common.InputField_s" 
			And I enter "Order with Wizard service " in "Orders.Project" then store as "Order" 
			And I enter "1250" in "Orders.ExpectedQuantity" 
			Then I click on "Data:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Orders.OrderServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "Address Setup 0" in "0:Orders.OrderServiceComboBox" 
			And I wait for "5" seconds  
			#And I click on "Orders.OrderServiceWizard" 
			And I click on "Common.POTextBox"
			And I verified "Common.WizardServicePopup" 
			And I verify "Hand Match Perfect:Common.WizardServicePopupMessage" 
			And I click on "0:Common.WizardSuccessorSelected" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Order and add SWF Calculator 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 
			#And I click on "Common.ClearFilters" 
			#And I wait for "5" seconds 
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "5" seconds 
			Then I click on "Wide Format:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Orders.OrderServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "_Vehicle Wrap" in "0:Orders.OrderServiceComboBox" 
			#Then I wait till "Common.Loading" is "Invisible"
			And I wait for "5" seconds 
			#And I click on "Orders.OrderSimpleWideFormat" 
			And I click on "Common.POTextBox"
			And I verified "Common.WideFormatCalculator" 
			And I verify "Orders.WideFormatLabel" 
			#And I enter "18 x 24 Yard Sign" in "Products:Common.InputField_s" 
			And I click on "wfEstimateProductType:Common.SWFComboBox" 
			And I enter "18 x 24 Yard Sign" in "wfEstimateProductType:Common.SWFComboBox" 
			And I wait for "5" seconds 
			And I click on "wideFormatStockId:Common.SWFComboBox" 
			And I enter "Canvas60" in "wideFormatStockId:Common.SWFComboBox" 
			And I wait for "5" seconds 
			And I click on "Common.WFMessageEditor" 
			And I enter "Automation Script-Adding comments for simple wide format" in "Common.WFMessageEditor" 
			And I click on "Save:Common.Button" 
			And I wait for "5" seconds 
			And I click on "Save & Close:Common.Button" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I wait for "3" seconds 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Order and add AWF Calculator 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "5" seconds 
			Then I click on "Wide Format:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "1:Orders.OrderServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "_Banner" in "1:Orders.OrderServiceComboBox" 
			And I wait for "2" seconds 
			And I click on "Common.POTextBox"
			And I verified "Common.WideFormatCalculator" 
			And I wait for "5" seconds		
			And I click on "Common.AWFTemplateName"
			And I clear the text "Common.AWFTemplateName"
			And I wait for "3" seconds
			And I enter "Vehicle Wrap" in "Common.AWFTemplateName"
			And I click on "Common.Description" 
			And I click on "Common.CalculateButton" 
			And I wait for "5" seconds 
			And I click on "Save & Close:Common.Button" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I wait for "3" seconds 
			And I click on "Save & Close:Common.Button" 
			Then I verify "Orders.OrderSearchPage" 
			
		@SmokeTest 
		Scenario: Open an Order and add Print Calculator 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 
			#And I click on "Common.ClearFilters" 
			#And I wait for "5" seconds 
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "5" seconds
			Then I click on "Print:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Orders.OrderServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter ".PS" in "0:Orders.OrderServiceComboBox" 
			And I wait for "2" seconds 
			And I click on "Common.POTextBox"
			Then I check "Common.PrintCalculator"
			Then I wait till "Common.Loading" is "Invisible"
			And I click on "Common.PCTemplateName"
			And I clear the text "Common.PCTemplateName"
			And I wait for "3" seconds
			And I enter "52" in "Common.PCTemplateName"
			#And I click on "Common.Description" 
			And I wait for "10" seconds
			And I click on "Common.PrintCalculateButton" 		
			And I wait for "10" seconds
			And I click on "Common.PrintCalculateButton" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "Common.PrintSubmitButton" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I wait for "5" seconds 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Order and add Attachment
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "3" seconds 
			Then I click on "Attachments:Common.HeaderTabs"	
			Then I wait till "Common.Loading" is "Invisible" 
			And I upload an Attachment			
			And I click on "Save & Close:Common.Button" 
								
		@SmokeTest 
		Scenario: Open an Order and Copy it 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "3" seconds 
			And I click on "Copy:Common.Button" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CopyMessageBox" 
			And I wait for "5" seconds 
			And I click on "Orders.OrderCopiedBtnOK" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Orders.PromptBoxText" 
			And I click on "Common.WarningMsgOk"   
			And I wait for "5" seconds 
			And I click on "Save & Close:Common.Button" 
			And I wait for "5" seconds 
			
			
		@SmokeTest 
		Scenario: Open an Order and Export it to an Estimate 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 		
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "3" seconds
			Then I click on "Details:Common.HeaderTabs"			
			And I click on "Estimate Export:Orders.ExportToEstimateButton" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.ExportedToEstimateSuccessfullyMsg" 
			And I wait for "5" seconds 
			And I click on "Orders.ExportedToEsitmateOKBtn" 
			And I wait for "5" seconds 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
			And I click on "Common.WarningMsgOk" 
			And I wait for "5" seconds 
			And I click on "Save & Close:Common.Button" 
			And I click on "Common.Orders" 
			And I wait for "5" seconds 
			
			
		@SmokeTest 
		Scenario: Open an Order and Delete it 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 			
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "2" seconds 
			And I click on "Delete:Common.Button" 
			And I wait for "2" seconds 			
			And I accept Alert 
			And I wait till "Common.Loading" is "Invisible" 
			Then I verify "Orders.OrderSearchPage" 
			
				
		@SmokeTest 
		Scenario: Open an Order and Update the expected Qty - "Yes" 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 			
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "3" seconds
			And I enter "15890" in "Common.UpdateQtyField" 
			And I click on "Update:Common.Button" 
			And I wait for "3" seconds 
			And I verified "Common.UpdateQtyPopup" 
			And I verify "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage" 
			And I click on "Common.QtyUpdatePopupYesButton" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Order and Update the expected Qty - "No" 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "3" seconds
			And I enter "4450" in "Common.UpdateQtyField" 
			And I click on "Update:Common.Button" 
			And I wait for "3" seconds 
			And I verified "Common.UpdateQtyPopup" 
			And I verify "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage" 
			And I click on "Common.QtyUpdatePopupNoButton" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Order and Edit Services Description, Quantity in department tabs 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Orders" 
			And I wait for "5" seconds 
			And I verify "Orders.OrderSearchPage" 
			And I click on "Orders.OrderNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Orders.CustomerInputBox" 
			And I wait for "3" seconds
			Then I click on "Data:Common.DepartmentMenu" 
			And I wait till "Common.Loading" is "Invisible" 
			And I enter "/Data Services - c21 Customizable Sell Sheet  -" in "0:Orders.ServiceDescriptionEditBox" 
			And I click on "Save:Common.Button" 
			And I wait till "Common.Loading" is "Invisible" 
			And I clear the text "0:Orders.QuantityTextBox" 
			And I wait for "1" seconds 
			And I enter "988.321" in "0:Orders.QuantityTextBox" 
			And I wait for "1" seconds 
			And I click on "0:Orders.UnitPriceTextBox" 
			And I verify "Keep existing Unit Price?:Orders.UnitPricePopUp" 
			And I wait for "1" seconds 
			And I click on "Common.UnitPriceUpdateNoBtn" 
			And I wait for "1" seconds 
			And I click on "Save & Close:Common.Button" 
			
			
		
