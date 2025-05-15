import { test, expect } from '../fixtures/MyFixtures';

test('Test - 1: Holiday Packages Page Verification', async ({ page, homePage, holidayPackagesPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnHolidaysPackagesTab();

  const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
  expect(isOnHolidayPage).toBeTruthy();

});

test('Test - 2: Holiday Packages Details Filling', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();
  
});

test('Test - 3: Print Listed Packages', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 4: Filtered the Packages based on Price', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.selectFilter('> ₹25,000');

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 5: Filtered the Packages based on Themes', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.selectFilter('Adventure');

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 6: Filtered the Packages based on Package Type', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.selectFilterPackage('Group Package');

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 7: Filtered the Packages based on Hotel Category', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.selectFilterHotelCategory('3');

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 8: Sort the Packages based on Price', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.sortByPrice('Low to High');

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 9: Sort the Packages based on Duration', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.sortByDuration('High to Low');

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 10: Bus Package Selection', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.selectThePackage('Bus Packages');

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 11: Only Goa Package Selection', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    await holidayPackagesPage.selectThePackage('In & Around Goa');

    await holidayPackagesPage.printListOfPackages();
  
});

test('Test - 12: Verify user is on New Package Page', async ({ page, homePage, holidayPackagesPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnHolidaysPackagesTab();
  
    const isOnHolidayPage = await holidayPackagesPage.isUserOnHolidayPackagesPage();
    expect(isOnHolidayPage).toBeTruthy();

    await holidayPackagesPage.enterDetails('Bangalore', 'Goa');

    await holidayPackagesPage.arePackagesListed();

    const newPage = await holidayPackagesPage.selectTheFirstPackage();

    holidayPackagesPage.isUserOnNewPackagePage(newPage);  
  
});

