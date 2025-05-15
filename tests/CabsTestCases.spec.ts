import { test } from '../fixtures/MyFixtures';


test('Test - 1: Cabs Page Verification', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

});

test('Test - 2: Cab Details Filling', async ({ page, homePage, cabsPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnCabsTab();
  
    await cabsPage.isUserOnCabsPage();

    await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

    await cabsPage.areCabsListed();
  
});

test('Test - 3: Print List Of Cabs', async ({ page, homePage, cabsPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnCabsTab();
  
    await cabsPage.isUserOnCabsPage();

    await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

    await cabsPage.areCabsListed();
   
    await cabsPage.printListOfCabs();
  
});

test('Test - 4: Filtered The Cab Type', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();
 
  await cabsPage.filteredCabType('SEDAN');

  await cabsPage.printListOfCabs();

});

test('Test - 5: Filtered The Cab Fuel Type', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();
 
  await cabsPage.filteredCabFuelType('DIESEL');

  await cabsPage.printListOfCabs();

});

test('Test - 6: Filtered The Cab Model', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();
 
  await cabsPage.filteredCabModel('Innova Crysta');

  await cabsPage.printListOfCabs();

});

test('Test - 7: Filtered The Cab Type and Fuel Type', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();

  await cabsPage.filteredCabType('SUV');
 
  await cabsPage.filteredCabFuelType('DIESEL');

  await cabsPage.printListOfCabs();

});

test('Test - 8: Verify Payment with Roof Carrier', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();

  await cabsPage.selectFirstCab();

  await cabsPage.verifyTheAmountWithRoofCarrier();

});

test('Test - 9: Print the Cab Booking Details', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();

  await cabsPage.selectFirstCab();

  await cabsPage.printBookingDetails();

});

test('Test - 10: End To End Cab Booking', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();

  await cabsPage.selectFirstCab();

  await cabsPage.captureScreenshotWithName('CabBooking');

});

