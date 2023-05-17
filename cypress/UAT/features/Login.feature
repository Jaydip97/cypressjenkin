# Feature: to validate orangeHRM

#     Scenario: validate Login with valid case
#         Given open the brpwser amd navigate to login page
#         When enter the name 'Admin'
#         And enter the password 'admin123'
#         And click on Loginbtn
#         Then  Login should be succesfull


Feature: to validate OrangeHRM
   Scenario Outline: test orange hrm with valid and in valid condions
      When enter the Name <name>
      And Enter the password <pwd>
      And Click on loginbtn