# Test Plan

Create a set a test cases to validate Login Functionality. 

## Test Cases

- Objective: These scenerios should act as smoke test and ensure the application is working at a very base functionality for users to login into application and at the very least site is up and running and user are able to acces thier account. 

*1.* Feature Login
- Scenerio - A valid user is able to login into the application
- Given - User navigates to the login page.
- When - User enters a valid Username and password
- Then - User should be able to view Dashboard. 


*2.* Feature Home Page Validations
- Scenerio - Once logged in, Homepage should be visible and all elements should be rendered. 
- Given - A valid user is logged into the Dashboard
- Then - Validate appropiate Page Title
- And - Assert page is visible
- And - Various Major links are accessible and working. 
- And - User should be able to Logout. 

*3.* Feature - Mobile View 
- Scenerio - A valid user is able to acces the application via mobile screen size. 
- Given - User navigates to the login page.
- When - User enters a valid Username and password
- Then - User should be able to view Dashboard. 
- And - User should be able to Logout. 


*4.* Feature Login
- Scenerio - A invalid user is not able to login into the application
- Given - User navigates to the login page.
- When - User enters a invalid Username and password
- Then - User should not be able to view Dashboard. 
- And - User should see an Error message to input a valid username or password. 

*5.* Feature Forgot password link
- Scenerio - A valid user should be able to request for a new password incase they need to reset their password. 
- Given - User navigates to the login page.
- When - User clicks on 'Forgot Password' Link
- And - User should be able  to enter thier email.
- Then - A Message should prompt user to access the reset password link from thier email. 

*6.* Feature Test API Endpoints
- Scenerio - Validate api endpoints give 200 OK requests.
- Given - cypress hits and url endpoint
- When - cypress makes a request call
- Then - Response should be 200 OK to show endpoints are working. 



### How to run tests

 - Git clone or Download this repo `entertom` 
 - Navigate to the Folder in the terminal and run `npm install` in terminal, this will install all the dependecies including cypress
- Now to run the tests navigate to main folder `entertom` in your terminal and run command `npx cypress open`, this will open cypress UI and you can run all tests by clicking the spec files. 
