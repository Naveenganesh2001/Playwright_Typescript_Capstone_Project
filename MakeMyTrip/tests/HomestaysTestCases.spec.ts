import { test } from '../fixtures/MyFixtures';

test('Test - 1: Home Stays Page Verification', async ({ page, homePage, homestaysPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnHomestaysTab();

  await homestaysPage.isUserOnHomestaysPage();

});

test('Test - 2: Home Stays Details Filling', async ({ page, homePage, homestaysPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHomestaysTab();
  
    await homestaysPage.isUserOnHomestaysPage();

    await homestaysPage.enterDetails('Bangalore');
  
  });