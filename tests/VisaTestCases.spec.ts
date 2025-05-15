import { test } from '../fixtures/MyFixtures';

test('Test - 1: Visa Page Verification', async ({ page, homePage, visaPage }) => {

  await page.goto('/');

  await homePage.isUserIsOnHomePage();

  await homePage.clickOnVisaTab();

  await visaPage.isUserOnVisaPage();

});

test('Test - 2: Visa Details Filling', async ({ page, homePage, visaPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnVisaTab();

    await visaPage.isUserOnVisaPage();

    await visaPage.enterDetails('Thailand');

    await visaPage.isUserOnVisaDetailPage();

  });

  test('Test - 3: print the Documents to upload', async ({ page, homePage, visaPage }) => {

    await page.goto('/');
  
    await homePage.isUserIsOnHomePage();
  
    await homePage.clickOnVisaTab();

    await visaPage.isUserOnVisaPage();

    await visaPage.enterDetails('Thailand');

    await visaPage.isUserOnVisaDetailPage();

    await visaPage.printDocumentsToUpload();

  });

  const optionList = [
    { question: "Visa Extension" },
    //{ question: "Details of Minor" },
    //{ question: "Travel Insurance" },
    //{ question: "Do I need a Visa?" },
  ];
    optionList.forEach(({ question  }) => {
    test(`Test - 4: print the ${question} Question and Answer`, async ({ page, homePage, visaPage }) => {
        await page.goto('/');
  
        await homePage.isUserIsOnHomePage();
      
        await homePage.clickOnVisaTab();
    
        await visaPage.isUserOnVisaPage();
    
        await visaPage.enterDetails('Thailand');
    
        await visaPage.isUserOnVisaDetailPage();
    
        await visaPage.printQuestionAnswer(question);
    });
});

 