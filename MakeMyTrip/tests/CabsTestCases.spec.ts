import { test } from '../fixtures/MyFixtures';


test('Cabs Page Verification', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

});

test('Cab Details Filling', async ({ page, homePage, cabsPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnCabsTab();
  
    await cabsPage.isUserOnCabsPage();

    await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

    await cabsPage.areCabsListed();
  
});

test('Print List Of Cabs', async ({ page, homePage, cabsPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnCabsTab();
  
    await cabsPage.isUserOnCabsPage();

    await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

    await cabsPage.areCabsListed();
   
    await cabsPage.printListOfCabs();
  
});

test('Filtered The Cab Type', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();
 
  await cabsPage.filteredCabType('SEDAN');

  await cabsPage.printListOfCabs();

});

test('Filtered The Cab Fuel Type', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();
 
  await cabsPage.filteredCabFuelType('DIESEL');

  await cabsPage.printListOfCabs();

});

test('Filtered The Cab Model', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();
 
  await cabsPage.filteredCabModel('Innova Crysta');

  await cabsPage.printListOfCabs();

});

test('Filtered The Cab Type and Fuel Type', async ({ page, homePage, cabsPage }) => {

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

test('Verify Payment with Roof Carrier', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();

  await cabsPage.selectFirstCab();

  await cabsPage.verifyTheAmountWithRoofCarrier();

});

test('Print the Cab Booking Details', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();

  await cabsPage.selectFirstCab();

  await cabsPage.printBookingDetails();

});

test('End To End Cab Booking', async ({ page, homePage, cabsPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCabsTab();

  await cabsPage.isUserOnCabsPage();

  await cabsPage.enterDetails('Trivandrum', 'Coimbatore');

  await cabsPage.areCabsListed();

  await cabsPage.selectFirstCab();

  await cabsPage.captureScreenshotWithName('CabBooking');

});

