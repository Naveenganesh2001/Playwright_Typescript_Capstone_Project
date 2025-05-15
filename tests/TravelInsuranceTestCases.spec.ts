import { test } from '../fixtures/MyFixtures';

test('Test - 1: Travel Insurance Page Verification', async ({ page, homePage, travelInsurancePage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnTravelInsuranceTab();

  await travelInsurancePage.isUserOnTravelInsurancePage();

});

test('Test - 2: View Plans without selecting Destination', async ({ page, homePage, travelInsurancePage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTravelInsuranceTab();
  
    await travelInsurancePage.isUserOnTravelInsurancePage();

    await travelInsurancePage.selectTravellingDates();

    await travelInsurancePage.clickOnViewPlans();

    await travelInsurancePage.displayErrorMessage1();
  
  });

  test('Test - 3: View Plans without giving Number Of Travellers', async ({ page, homePage, travelInsurancePage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTravelInsuranceTab();
  
    await travelInsurancePage.isUserOnTravelInsurancePage();

    await travelInsurancePage.selectTravellingDates();

    await travelInsurancePage.clickOnViewPlans();

    await travelInsurancePage.displayErrorMessage2();
  
  });

  test('Test - 4: Search and select the Destination', async ({ page, homePage, travelInsurancePage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTravelInsuranceTab();
  
    await travelInsurancePage.isUserOnTravelInsurancePage();

    await travelInsurancePage.selectTravellingDates();

    await travelInsurancePage.selectTravellers();

    await travelInsurancePage.searchAndSelectDestination('China');
    
  
  });

  test('Test - 5: Select Destination and Number of Travellers', async ({ page, homePage, travelInsurancePage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTravelInsuranceTab();
  
    await travelInsurancePage.isUserOnTravelInsurancePage();

    await travelInsurancePage.selectTravellingDates();

    await travelInsurancePage.selectTravellers();

    await travelInsurancePage.searchAndSelectDestination('China');

    await travelInsurancePage.clickOnViewPlans();
  
  });
