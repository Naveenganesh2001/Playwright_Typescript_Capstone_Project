import { test, expect } from '../fixtures/MyFixtures';

test('Login Functionalities', async ({ page, homePage, loginPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.userClickOnLoginOrCreateAccountButton();

  await loginPage.isUserIsOnLoginPage();

  await loginPage.enterMobileNumberAndContinue('9980578176')

  //await loginPage.enterOTPAndClickLogin();

 // await loginPage.printErrorMessage();

});


