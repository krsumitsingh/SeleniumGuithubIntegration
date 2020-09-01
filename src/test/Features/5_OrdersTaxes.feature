@FunctionalTest 
Feature: Orders Taxes Test Cases 

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
	And I click on "CRM.TaxableCheckBox" 
	Then I clear the text "CRM.TaxJurisdictionComboBox" 
	And I enter "ARKANSAS" in "CRM.TaxJurisdictionComboBox" 
	And I click on "Save & Close:Common.Button" 
	Then I verify "CRM.CRMSerachLabel" 
	
	Examples: 
		| Customer_Name |Address_1        |Address_2      |Address_3  |City  |ST_Prov|Zip_Postal|Email         |
		| Sophia Marceau|1st Malay Street |Richmond Avenue|Halifax    |Boston|VA     |96300     |sm@redrass.com|
		
		
		@SmokeTest 
		Scenario: 
			Create Estimate with customer and service both are taxble and Service is No Launch Action 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "DataMap-CustomerName" in "Estimates.CustomerInputBox" 
			And I click on "DataMap-CustomerName:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer and service both are taxble***" in "Project:Common.InputField" then store as "Estimate" 
			And I enter "1250" in "Expected Qty:Common.InputField" 
			Then I click on "Data:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "CASS" in "0:Common.ServiceComboBox" 
			And I wait for "2" seconds 
			Then I click on "Common.DateDue" 
			And I wait for "2" seconds 
			Then I click on "Save:Common.Button" 
			And I wait for "4" seconds 
			Then checked "182.04" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			Then I verify "Estimates.EstimateSearchPage" 
			
		@SmokeTest 
		Scenario: 
			Customer and service both are taxable where service is Wizard launch service. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "DataMap-CustomerName" in "Estimates.CustomerInputBox" 
			And I click on "DataMap-CustomerName:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer and wizard service both are taxble***" in "Project:Common.InputField" then store as "Estimate" 
			And I enter "4850" in "Expected Qty:Common.InputField" 
			Then I click on "Data:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "Address Setup 0" in "0:Common.ServiceComboBox" 
			And I wait for "5" seconds 
			And I click on "0:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WizardServicePopup" 
			And I verify "Hand Match Perfect:Common.WizardServicePopupMessage" 
			And I click on "0:Common.WizardSuccessorSelected" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I wait for "2" seconds 
			Then I click on "Common.DateDue" 
			And I wait for "2" seconds 
			Then I click on "Save:Common.Button" 
			And I wait for "4" seconds 
			And checked "323.74" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			Then I verify "Estimates.EstimateSearchPage" 
			
			
		@SmokeTest 
		Scenario: Customer Taxable and Service No Launch Non Taxable. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "DataMap-CustomerName" in "Estimates.CustomerInputBox" 
			And I click on "DataMap-CustomerName:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer taxable and no launch service non taxable***" in "Project:Common.InputField" then store as "Estimate" 
			And I enter "3200" in "Expected Qty:Common.InputField" 
			Then I click on "Data:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "CASS" in "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			Then I click on "Common.DateDue" 
			Then I click on "0:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			And I click on "Common.ServiceInfoTaxableCheckbox" 
			And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I wait till "Common.Loading" is "Invisible" 
			Then I click on "Save:Common.Button" 
			And I wait for "4" seconds 
			Then checked "150.00" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			Then I verify "Estimates.EstimateSearchPage" 
			
		@SmokeTest 
		Scenario: Customer Taxable and Service Wizard Non Taxable. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I wait for "5" seconds 
			And I verify "Estimates.EstimateSearchPage" 
			And I click on "Common.ClearFilters" 
			And I wait for "5" seconds 
			And I click on "Estimates.EstimateNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Estimates.CustomerInputBox" 
			And I wait for "3" seconds 
			Then I click on "Data:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "1:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "Address Setup 0" in "1:Common.ServiceComboBox" 
			And I wait for "5" seconds 
			And I click on "1:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WizardServicePopup" 
			And I verify "Hand Match Perfect:Common.WizardServicePopupMessage" 
			And I click on "0:Common.WizardSuccessorSelected" 
			And I wait for "3" seconds 
			Then I check default content switch 
			Then I click on "1:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			And I click on "Common.ServiceInfoTaxableCheckbox" 
			And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I wait till "Common.Loading" is "Invisible" 
			Then I click on "Save:Common.Button" 
			And I wait for "4" seconds 
			Then checked "326.00" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			Then I verify "Estimates.EstimateSearchPage" 
			
			
		@SmokeTest 
		Scenario: Customer Non Taxable and Services Taxable 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "Action Mailing" in "Estimates.CustomerInputBox" 
			And I click on "Action Mailing:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer non taxable and services taxable***" in "Project:Common.InputField" 
			Then I click on "Common.TaxableCheckBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "14250" in "Expected Qty:Common.InputField" 
			Then I click on "Data:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "CASS" in "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			Then I click on "Common.DateDue" 
			Then I click on "0:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			#And I click on "Common.ServiceInfoTaxableCheckbox" 
			And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "1:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "Address Setup 0" in "1:Common.ServiceComboBox" 
			And I wait for "5" seconds 
			And I click on "1:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WizardServicePopup" 
			And I verify "Hand Match Perfect:Common.WizardServicePopupMessage" 
			And I click on "0:Common.WizardSuccessorSelected" 
			And I wait for "3" seconds 
			Then I check default content switch 
			Then I click on "1:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			#And I click on "Common.ServiceInfoTaxableCheckbox" 
			#And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I wait till "Common.Loading" is "Invisible" 
			Then I click on "Save:Common.Button" 
			And I wait for "2" seconds 
			Then checked "997.50" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			Then I verify "Estimates.EstimateSearchPage" 
			
		@SmokeTest 
		Scenario: Customer and Services SWF Taxable. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "Action Mailing" in "Estimates.CustomerInputBox" 
			And I click on "Action Mailing:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer taxable and SWF services taxable***" in "Project:Common.InputField" 
			#Then I click on "Common.TaxableCheckBox" 
			#Then I wait till "Common.Loading" is "Invisible" 
			And I enter "16800" in "Expected Qty:Common.InputField" 
			Then I click on "Wide Format:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "_Yard Sign" in "0:Common.ServiceComboBox" 
			#Then I wait till "Common.Loading" is "Invisible"
			And I wait for "5" seconds 
			And I click on "0:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WideFormatCalculator" 
			And I verify "Wide Format Estimate:Common.WideFormatEstimate" 
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
			And I wait for "1" seconds 
			Then I click on "0:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			#And I click on "Common.ServiceInfoTaxableCheckbox" 
			#And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "221356.80" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Customer and Services AWF Taxable. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "Action Mailing" in "Estimates.CustomerInputBox" 
			And I click on "Action Mailing:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer taxable and AWF services taxable***" in "Project:Common.InputField" 
			#Then I click on "Common.TaxableCheckBox" 
			#Then I wait till "Common.Loading" is "Invisible" 
			And I enter "1680" in "Expected Qty:Common.InputField" 
			Then I click on "Wide Format:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "_Banner" in "0:Common.ServiceComboBox" 
			And I wait for "2" seconds 
			And I click on "0:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WideFormatCalculator" 
			And I wait for "5" seconds 
			And I click on "Common.AWFTemplateName" 
			And I clear the text "Common.AWFTemplateName" 
			And I wait for "3" seconds 
			And I enter "Vehicle Wrap" in "Common.AWFTemplateName" 
			And I click on "Common.Description" 
			#And I wait for "5" seconds
			And I click on "Common.CalculateButton" 
			And I wait for "5" seconds 
			And I click on "Save & Close:Common.Button" 
			And I wait for "2" seconds 
			Then I check default content switch 
			And I wait for "1" seconds 
			Then I click on "0:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			#And I click on "Common.ServiceInfoTaxableCheckbox" 
			#And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "2449.23" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Estimate and add Print Calculator 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "Action Mailing" in "Estimates.CustomerInputBox" 
			And I click on "Action Mailing:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer taxable and PC services taxable***" in "Project:Common.InputField" 
			Then I click on "Common.TaxableCheckBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "9850" in "Expected Qty:Common.InputField" 
			Then I click on "Print:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter ".PS" in "0:Common.ServiceComboBox" 
			And I wait for "2" seconds 
			And I click on "0:Common.ServiceDescriptionEditBox" 
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
			#And I click on "Common.PrintCancelButton" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I wait for "1" seconds 
			Then I click on "0:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			#And I click on "Common.ServiceInfoTaxableCheckbox" 
			#And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "8170.96" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Customer Non Taxable and Services AWF Taxable. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "Action Mailing" in "Estimates.CustomerInputBox" 
			And I click on "Action Mailing:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer non taxable and AWF services taxable***" in "Project:Common.InputField" 
			Then I click on "Common.TaxableCheckBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "9856" in "Expected Qty:Common.InputField" 
			Then I click on "Wide Format:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "_Banner" in "0:Common.ServiceComboBox" 
			And I wait for "2" seconds 
			And I click on "0:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WideFormatCalculator" 
			And I wait for "5" seconds 
			And I click on "Common.AWFTemplateName" 
			And I clear the text "Common.AWFTemplateName" 
			And I wait for "3" seconds 
			And I enter "Vehicle Wrap" in "Common.AWFTemplateName" 
			And I click on "Common.Description" 
			#And I wait for "5" seconds
			And I click on "Common.CalculateButton" 
			And I wait for "5" seconds 
			And I click on "Save & Close:Common.Button" 
			And I wait for "2" seconds 
			Then I check default content switch 
			And I wait for "1" seconds 
			Then I click on "0:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			#And I click on "Common.ServiceInfoTaxableCheckbox" 
			#And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "13999.55" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Customer Non Taxable and Services SWF Taxable. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "Action Mailing" in "Estimates.CustomerInputBox" 
			And I click on "Action Mailing:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer non taxable and SWF services taxable***" in "Project:Common.InputField" 
			Then I click on "Common.TaxableCheckBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "12345" in "Expected Qty:Common.InputField" 
			Then I click on "Wide Format:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "_Yard Sign" in "0:Common.ServiceComboBox" 
			#Then I wait till "Common.Loading" is "Invisible"
			And I wait for "5" seconds 
			And I click on "0:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WideFormatCalculator" 
			And I verify "Wide Format Estimate:Common.WideFormatEstimate" 
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
			And I wait for "1" seconds 
			Then I click on "0:Estimates.ServiceInfoDetailsButton" 
			When I verified "Common.ServiceInfoPage" 
			When I verify "Service Information:Common.ServiceInfoLabel" 
			#And I click on "Common.ServiceInfoTaxableCheckbox" 
			#And I wait for "2" seconds 
			Then I click on "Common.ServiceInfoPageSaveandClose" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "162657.72" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Customer Non Taxable and Services/Wizard/AWF/PC Taxable. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I verify "New Estimate:Common.Button" 
			And I click on "New Estimate:Common.Button" 
			And I verify "Estimates.CustomerInputBox" 
			And I enter "Action Mailing" in "Estimates.CustomerInputBox" 
			And I click on "Action Mailing:Common.DropDownOption_td" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Account Warning Message::Estimates.PromptBoxText" 
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
			And I enter "***Customer non taxable and no launch,wizard,AWF,PC services taxable***" in "Project:Common.InputField" 
			Then I click on "Common.TaxableCheckBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "51" in "Expected Qty:Common.InputField" 
			Then I click on "Data:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "CASS" in "0:Common.ServiceComboBox" 
			Then I click on "Common.DateDue" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "1:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "Address Setup 0" in "1:Common.ServiceComboBox" 
			And I wait for "5" seconds 
			And I click on "1:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WizardServicePopup" 
			And I verify "Hand Match Perfect:Common.WizardServicePopupMessage" 
			And I click on "0:Common.WizardSuccessorSelected" 
			And I wait for "3" seconds 
			Then I check default content switch 
			And I wait for "2" seconds 
			Then I click on "Wide Format:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter "_Banner" in "0:Common.ServiceComboBox" 
			And I wait for "2" seconds 
			And I click on "0:Common.ServiceDescriptionEditBox" 
			And I verified "Common.WideFormatCalculator" 
			And I wait for "5" seconds 
			And I click on "Common.AWFTemplateName" 
			And I clear the text "Common.AWFTemplateName" 
			And I wait for "3" seconds 
			And I enter "Daves Banner Job" in "Common.AWFTemplateName" 
			And I click on "Common.Description" 
			#And I wait for "5" seconds
			And I click on "Common.CalculateButton" 
			And I wait for "5" seconds 
			And I click on "Save & Close:Common.Button" 
			And I wait for "2" seconds 
			Then I check default content switch 
			And I wait for "1" seconds 
			Then I click on "Print:Common.DepartmentMenu" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I click on "0:Common.ServiceComboBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			And I enter ".PS" in "0:Common.ServiceComboBox" 
			And I wait for "2" seconds 
			And I click on "0:Common.ServiceDescriptionEditBox" 
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
			And I wait for "1" seconds 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "961.81" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Estimate and make Customer Taxable and verify Services/Wizard/AWF/PC Taxable. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I wait for "1" seconds 
			And I verify "Estimates.EstimateSearchPage" 
			And I click on "Common.ClearFilters" 
			And I wait for "1" seconds 
			And I click on "Estimates.EstimateNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Estimates.CustomerInputBox" 
			And I wait for "2" seconds 
			Then I click on "Common.TaxableCheckBox" 
			Then I wait till "Common.Loading" is "Invisible" 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "980.72" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Estimate Update QTY in estimate with "YES" and verify new total and taxes. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I wait for "1" seconds 
			And I verify "Estimates.EstimateSearchPage" 
			And I click on "Common.ClearFilters" 
			And I wait for "1" seconds 
			And I click on "Estimates.EstimateNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Estimates.CustomerInputBox" 
			And I wait for "2" seconds 
			#Then I click on "Common.TaxableCheckBox" 
			#Then I wait till "Common.Loading" is "Invisible" 
			And I enter "223" in "Common.UpdateQtyField" 
			And I click on "Update:Common.Button" 
			And I wait for "2" seconds 
			And I verified "Common.UpdateQtyPopup" 
			And I verify "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage" 
			And I click on "Common.QtyUpdatePopupYesButton" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "3156.40" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Estimate Update QTY in estimate with "NO" and verify new total and taxes. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I wait for "1" seconds 
			And I verify "Estimates.EstimateSearchPage" 
			And I click on "Common.ClearFilters" 
			And I wait for "1" seconds 
			And I click on "Estimates.EstimateNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Estimates.CustomerInputBox" 
			And I wait for "2" seconds 
			#Then I click on "Common.TaxableCheckBox" 
			#Then I wait till "Common.Loading" is "Invisible" 
			And I enter "999" in "Common.UpdateQtyField" 
			And I click on "Update:Common.Button" 
			And I wait for "2" seconds 
			And I verified "Common.UpdateQtyPopup" 
			And I verify "Do you want to recalculate unit prices? Pressing Yes or No will save changes to estimate.:Common.UpdateQtyPopupMessage" 
			And I click on "Common.QtyUpdatePopupNoButton" 
			And I wait for "1" seconds 
			Then I check default content switch 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "14001.56" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			
		@SmokeTest 
		Scenario: Open an Estimate and export to Order and verify new total and taxes. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I wait for "1" seconds 
			And I verify "Estimates.EstimateSearchPage" 
			And I click on "Common.ClearFilters" 
			And I wait for "1" seconds 
			And I click on "Estimates.EstimateNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Estimates.CustomerInputBox" 
			And I wait for "2" seconds 
			And I click on "Export to Order:Estimates.ExportToOrder" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg" 
			And I wait for "2" seconds 
			And I click on "Orders.ExportedToOrderOKBtn" 
			And I wait for "2" seconds 
			And I verify "Orders.AccountWarningMsg" 
			And I click on "Orders.WarningMsgOk" 
			And I wait for "2" seconds 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "14,001.56" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			And I click on "Common.Estimates" 
			
		@SmokeTest 
		Scenario: Open an Estimate create an "MQ" and export to Order and verify new total and taxes. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I wait for "1" seconds 
			And I verify "Estimates.EstimateSearchPage" 
			And I click on "Common.ClearFilters" 
			And I wait for "1" seconds 
			And I click on "Estimates.EstimateNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Estimates.CustomerInputBox" 
			And I wait for "2" seconds 
			Then I click on "Multiple Qtys:Common.DepartmentMenu" 
			And I wait for "2" seconds 
			And I enter "63689" in "Estimates.MQTextBox" 
			And I click on "Estimates.MQUpdateButton" 
			And I wait till "Common.Loading" is "Invisible" 
			And I click on "Estimates.MQExportToOrder" 
			And I wait till "Common.Loading" is "Invisible" 		
			And I verify "Estimate Exported to Order Successfully:Orders.ExportedToOrderSuccessfullyMsg" 
			And I wait for "2" seconds 		
			And I click on "Orders.ExportedToOrderOKBtn" 
			And I wait for "2" seconds 
			And I verify "Orders.AccountWarningMsg" 
			And I click on "Orders.WarningMsgOk" 
			And I wait for "2" seconds 
			Then I click on "Save:Common.Button" 
			And I wait for "1" seconds 
			Then checked "810,350.10" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			And I click on "Common.Estimates" 
			
		@SmokeTest 
		Scenario: Open an Estimate. Update Qty from line item and Verify new Total and Taxes. 
			Given I login to Application 
			And I click on "Login.SignIn" 
			Then I verify "Common.LandingPage" 
			When I click on "Common.Estimates" 
			And I wait for "1" seconds 
			And I verify "Estimates.EstimateSearchPage" 
			And I click on "Common.ClearFilters" 
			And I wait for "1" seconds 
			And I click on "Estimates.EstimateNumberCreated" 
			And I wait till "Common.Loading" is "Invisible" 
			And I verify "Estimates.CustomerInputBox" 
			And I wait for "2" seconds 
			Then I click on "Data:Common.DepartmentMenu" 
			And I wait till "Common.Loading" is "Invisible" 
			#And I enter "/Data Services - c21 Customizable Sell Sheet  -" in "0:Common.ServiceDescriptionEditBox" 
			#And I click on "Save:Common.Button" 
			#And I wait till "Common.Loading" is "Invisible" 
			And I clear the text "0:Common.QuantityTextBox" 
			And I wait for "2" seconds 
			And I enter "588.321" in "0:Common.QuantityTextBox" 
			And I wait for "2" seconds 
			And I click on "0:Common.UnitPriceTextBox" 
			And I verify "Keep existing Unit Price?:Common.UnitPricePopUp" 
			And I wait for "5" seconds 
			And I click on "Common.UnitPriceUpdateNoBtn" 
			And I wait for "2" seconds 
			And I click on "Save:Common.Button" 	
			And I wait for "1" seconds 
			Then checked "13469.15" in "Total & Tax:Common.TotalAndTaxes" 
			And I click on "Save & Close:Common.Button" 
			And I click on "Common.Estimates" 
			
			
			
			
			
			
			
