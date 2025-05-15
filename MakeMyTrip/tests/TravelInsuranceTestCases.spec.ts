import { test, expect } from '../fixtures/MyFixtures';

test('Travel Insurance Page Verification', async ({ page, homePage, travelInsurancePage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnTravelInsuranceTab();

  await travelInsurancePage.isUserOnTravelInsurancePage();

});

test('View Plans without selecting Destination', async ({ page, homePage, travelInsurancePage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTravelInsuranceTab();
  
    await travelInsurancePage.isUserOnTravelInsurancePage();

    await travelInsurancePage.selectTravellingDates();

    await travelInsurancePage.clickOnViewPlans();

    await travelInsurancePage.displayErrorMessage1();
  
  });

  test('View Plans without giving Number Of Travellers', async ({ page, homePage, travelInsurancePage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTravelInsuranceTab();
  
    await travelInsurancePage.isUserOnTravelInsurancePage();

    await travelInsurancePage.selectTravellingDates();

    await travelInsurancePage.clickOnViewPlans();

    await travelInsurancePage.displayErrorMessage2();
  
  });

  test('Search and select the Destination', async ({ page, homePage, travelInsurancePage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTravelInsuranceTab();
  
    await travelInsurancePage.isUserOnTravelInsurancePage();

    await travelInsurancePage.selectTravellingDates();

    await travelInsurancePage.selectTravellers();

    await travelInsurancePage.searchAndSelectDestination('China');
    
  
  });

  test('Select Destination and Number of Travellers', async ({ page, homePage, travelInsurancePage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTravelInsuranceTab();
  
    await travelInsurancePage.isUserOnTravelInsurancePage();

    await travelInsurancePage.selectTravellingDates();

    await travelInsurancePage.selectTravellers();

    await travelInsurancePage.searchAndSelectDestination('China');

    await travelInsurancePage.clickOnViewPlans();
  
  });
