import { test } from '../fixtures/MyFixtures';

test('Test - 1: Currency Page Verification', async ({ page, homePage, currencyPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnCurrencyTab();
  
  await currencyPage.isUserOnCurrencyPage();

});

test('Test - 2: Forex Order Page Verification', async ({ page, homePage, currencyPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnCurrencyTab();
    
    await currencyPage.isUserOnCurrencyPage();

    await currencyPage.clickOnForexOrders();

    await currencyPage.isUserOnForexPage();
  
  });

  test('Test - 3: Foreign Currency Page Verification', async ({ page, homePage, currencyPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnCurrencyTab();
    
    await currencyPage.isUserOnCurrencyPage();

    await currencyPage.clickOnForexOrders();

    await currencyPage.isUserOnForexPage();

    await currencyPage.clickOnBuyCurrency();

    await currencyPage.isUserOnForeignCurrencyPage();
  
  });

  test('Test - 4: Check Currency with US Dollar', async ({ page, homePage, currencyPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnCurrencyTab();
    
    await currencyPage.isUserOnCurrencyPage();

    //await currencyPage.clickOnForexOrders();

    await currencyPage.isUserOnForexPage();

    await currencyPage.clickOnBuyCurrency();

    await currencyPage.isUserOnForeignCurrencyPage();

    await currencyPage.clickOnUSdollar();

    await currencyPage.enterAmount('100');

    await currencyPage.printAmountInRupees();
  
  });

  test('Test - 5: Check Currency with given country', async ({ page, homePage, currencyPage }) => {

    await page.goto('https://www.makemytrip.com/', { waitUntil: 'domcontentloaded' });
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnCurrencyTab();
    
    await currencyPage.isUserOnCurrencyPage();

   // await currencyPage.clickOnForexOrders();

    await currencyPage.isUserOnForexPage();

    await currencyPage.clickOnBuyCurrency();

    await currencyPage.isUserOnForeignCurrencyPage();

    await currencyPage.selectCountry('USA');

    await currencyPage.enterAmount('100');

    await currencyPage.printAmountInRupees();
  
  });