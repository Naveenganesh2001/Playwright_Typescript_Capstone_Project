import { test } from '../fixtures/MyFixtures';

test('Bus Page Verification', async ({ page, homePage, busPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnBusesTab();

  await busPage.isUserOnBusPage();

});

test('Bus Details Filling', async ({ page, homePage, busPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Bangalore');

    await busPage.areBusesListed();
  
});

test('Print the List of Buses', async ({ page, homePage, busPage}) =>{

    await page.goto('/');

    await homePage.isUserIsOnHomePage();

    await homePage.clickOnBusesTab();

    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.printTheTitle();

    await busPage.printListOfBuses();

});

test('Bus Filter A/c Sleeper', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Bangalore');

    await busPage.areBusesListed();

    await busPage.giveFilter('AC', 'Sleeper');

    await busPage.checkListOfBusesFiltered('Ac', 'Sleeper');

});

test('Select Bus Seats', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.userSelectsTheFirstSeat();

});

test('End To End Bus Booking', async ({ page, homePage, busPage}) =>{

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

test('Verify The Amount With Trip Assured Added', async ({ page, homePage, busPage}) =>{

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

test('Verify The Amount With Free Cancellation', async ({ page, homePage, busPage}) =>{

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

test('Bus Filter With Time', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.giveFilterTiming('6 AM to 11 AM');

});

test('Bus Filter With Bus Name', async ({ page, homePage, busPage}) =>{

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnBusesTab();
  
    await busPage.isUserOnBusPage();

    await busPage.enterDetails('Trivandrum', 'Coimbatore');

    await busPage.areBusesListed();

    await busPage.giveFilterBusName('A1 Travels');

});

