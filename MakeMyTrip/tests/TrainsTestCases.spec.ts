import { test } from '../fixtures/MyFixtures';

test('Test - 1: Train Page Verification', async ({ page, homePage, trainPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnTrainsTab();

  await trainPage.isUserOnTrainPage();

});

test('Test - 2: Train Details Filling', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();
  
});

test('Test - 3: Print List Of Trains', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.printListOfTrains();
  
});

test('Test - 4: Trains Filtered As A/C', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('AC');

    await trainPage.printListOfTrains();
  
});

test('Test - 5: Print All Available Trains', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('Available');

    await trainPage.printListOfTrains();
  
});

test('Test - 6: Change the quota', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('Available');

    await trainPage.printListOfTrains();
  
});

test('Test - 7: Change the Departure timings', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.filteredDepaertureTimings('12am - 6am');

    await trainPage.printListOfTrains();
  
});

test('Test - 8: Print the trains which has 1st Class AC', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('1st Class AC - 1A');

    await trainPage.printListOfTrains();
  
});

test('Test - 9: Print the trains which has Free Cancellation Options', async ({ page, homePage, trainPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnTrainsTab();
  
    await trainPage.isUserOnTrainPage();

    await trainPage.enterDetails('Trivandrum', 'Coimbatore');

    await trainPage.areTrainsListed();

    await trainPage.selectFilter('Free Cancellation');

    await trainPage.printListOfTrains();
  
});

test('Test - 10: End To End Train Ticket Booking', async ({ page, homePage, trainPage }) => {

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