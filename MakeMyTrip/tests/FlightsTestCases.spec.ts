import { test } from '../fixtures/MyFixtures';

test('Test - 1: Flight Details Filling', async ({ page, homePage, flightPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.EnterFromCityAndToCity('Trivandrum', 'Hyderabad');

  await homePage.selectFlightDate('25/05/2025');

  await homePage.clickOnSearchButton();

  await flightPage.isUserOnFlightsPage();


});