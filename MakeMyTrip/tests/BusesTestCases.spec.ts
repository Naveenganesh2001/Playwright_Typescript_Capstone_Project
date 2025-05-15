import { test } from '../fixtures/MyFixtures';

test('Test - 1: Bus Page Verification', async ({ page, homePage, busPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnBusesTab();

  await busPage.isUserOnBusPage();

});

test('Test - 2: Bus Details Filling', async ({ page, homePage, busPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Bangalore');

    await busPage.areBusesListed();
  
});

test('Test - 3: Print the List of Buses', async ({ page, homePage, busPage}) =>{

    await page.goto('/');

    await homePage.isUserIsOnHomePage();

    await homePage.clickOnBusesTab();

    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.printTheTitle();

    await busPage.printListOfBuses();

});

test('Test - 4: Bus Filter A/c Sleeper', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Bangalore');

    await busPage.areBusesListed();

    await busPage.giveFilter('AC', 'Sleeper');

    await busPage.checkListOfBusesFiltered('Ac', 'Sleeper');

});

test('Test - 5: Select Bus Seats', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.userSelectsTheFirstSeat();

});

test('Test - 6: Bus Filter With Bus Name', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.giveFilterBusName('A1 Travels');

});



test('Test - 7: Verify The Amount With Trip Assured Added', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.userSelectsTheFirstSeat();

    await busPage.clickContinueButton();

    await busPage.verifyTheAmountWithTripAssured();

});

test('Test - 8: Verify The Amount With Free Cancellation', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.userSelectsTheFirstSeat();

    await busPage.clickContinueButton();

    await busPage.verifyTheAmountWithFreeCancellation();

});

test('Test - 9: Bus Filter With Time', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.giveFilterTiming('6 AM to 11 AM');

});

test('Test - 10: End To End Bus Booking', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.userSelectsTheFirstSeat();

    await busPage.clickContinueButton();

    await page.waitForLoadState('load');

    await busPage.captureScreenshotWithName('BusBooking');

});

