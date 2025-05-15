import { test } from '../fixtures/MyFixtures';

test('Train Page Verification', async ({ page, homePage, trainPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnTrainsTab();

  await trainPage.isUserOnTrainPage();

});

test('Train Details Filling', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();
  
});

test('Print List Of Trains', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.printListOfTrains();
  
});

test('Trains Filtered As A/C', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('AC');

    await trainPage.printListOfTrains();
  
});

test('Print All Available Trains', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('Available');

    await trainPage.printListOfTrains();
  
});

test('Change the quota', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('Available');

    await trainPage.printListOfTrains();
  
});

test('Change the Departure timings', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.filteredDepaertureTimings('12am - 6am');

    await trainPage.printListOfTrains();
  
});

test('Print the trains which has 1st Class AC', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('1st Class AC - 1A');

    await trainPage.printListOfTrains();
  
});

test('Print the trains which has Free Cancellation Options', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('Free Cancellation');

    await trainPage.printListOfTrains();
  
});

test('End To End Train Ticket Booking', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectTheFirstTrain();

    await trainPage.printTicketDetails();

    await trainPage.captureScreenshotWithName('TrainBooking');

    
  
});