import {  Locator, Page, expect } from "@playwright/test";

export class HolidayPackagesPage {

   // readonly notifyButton : Locator;
    
    readonly fromCityElement: Locator;
    readonly fromCityInput: Locator;

    readonly toCityElement: Locator;
    readonly toCityInput: Locator;

    readonly selectDate: Locator;

    readonly applyBtn1 : Locator;

    readonly applyBtn2 : Locator;

    readonly searchButton: Locator;

    readonly headingLocator: Locator;

    readonly sortOption: Locator;

    readonly firstPackage: Locator;
    readonly withFlights: Locator;

    private newPage: Page;

    



   

  constructor(public readonly page: Page){
    

    //this.notifyButton = page.locator('')

    this.fromCityElement = page.locator('#fromCity');
    this.fromCityInput = page.locator('//input[@class="citypicker_input"]');

    this.toCityElement = page.locator('#toCity');
    this.toCityInput = page.locator('//input[@class="dest-search-input removeBoxShadow"]');

    this.selectDate = page.locator('(//div[@class="DayPicker-Day"]//div//p[text()="25"])[1]');
    
    this.applyBtn1 = page.locator('//button[@class="applyBtn applyBtn-enabled"]');

    this.applyBtn2 = page.locator('//button[@class="action"]');

    this.searchButton = page.locator('#search_button');

    this.headingLocator = page.locator('//div[@class="listingHeading"]');

    this.sortOption = page.locator('//div[@class="sortingValueSection"]');

    this.firstPackage = page.locator('(//div[@class="titleWrapper"]//p)[1]');

    this.withFlights = page.locator('(//div[@class="variant-card-heading"])[1]');

   
    
  };

  async isUserOnHolidayPackagesPage(){
    const currentUrl = this.page.url();
    return currentUrl === 'https://www.makemytrip.com/holidays-india/';

  };

  async enterDetails(fromCity : string, toCity : string){

    await this.fromCityElement.click();
    await this.fromCityInput.clear();
    await this.fromCityInput.fill(fromCity);
    const fromCityOption = this.page.locator('//div[@class="searchedCity"]', { hasText: fromCity }).first();
    await fromCityOption.waitFor({ state: 'visible' });
    await fromCityOption.first().click();

    await this.toCityElement.click();
    await this.toCityInput.fill(toCity);
    const toCityElement = this.page.locator('//div[@class="dest-city-name"]', { hasText: toCity }).first();
    await toCityElement.waitFor({ state: 'visible' });
    await toCityElement.first().click();

    await this.selectDate.click();

    await this.applyBtn1.click();

    await this.applyBtn2.click();

    await this.searchButton.click();

  };

  async arePackagesListed(){
    await this.headingLocator.isVisible();

  };

  async printListOfPackages(){

    await this.page.waitForLoadState('load');

    await this.page.waitForTimeout(10000);

    const listOfPackages = await this.page.locator('//div[@class="titleWrapper"]//p');

    const listOfPrice = await this.page.locator('//span[@class="priceStyle"]');

    const listOfDuration = await this.page.locator('//div[@class="titleWrapper"]//span');

    await listOfPackages.first().waitFor({ state: 'visible', timeout: 10000 });

    const count = await listOfPackages.count();
    console.log(`Total Holiday Packages found: ${count}`);

    for (let i = 0; i < count; i++) {
        const packageName = await listOfPackages.nth(i).textContent();
        const packagePrice = await listOfPrice.nth(i).textContent();
        const durationText = await listOfDuration.nth(i).textContent();
        console.log(`Holiday Package ${i + 1}: ${packageName?.trim()}`);
        console.log("Price: "+packagePrice);
        console.log("Duration: "+durationText);
    }

  };

  async selectFilter(filterOption : string){

    const checkboxFilter = this.page.locator(`//span[@class="filterText" and text()="${filterOption}"]`);
    await checkboxFilter.waitFor({state : 'visible'});
    await checkboxFilter.click();

  };

  async selectFilterPackage(filterOption : string){

    const checkboxFilter = this.page.locator(`//div[@class="offerSection"]//span//span[text()="${filterOption}"]`);
    await checkboxFilter.waitFor({state : 'visible'});
    await checkboxFilter.click();

  };

  async selectFilterHotelCategory(filterOption: string) {
    const checkboxFilter = this.page.locator(`//span[contains(@class,"categoryRating")]//span[text()="${filterOption}"]`);
    await checkboxFilter.waitFor({ state: 'visible' });
    await checkboxFilter.click();

    
  };

  async sortByPrice(sortText : string){

    await this.sortOption.click();
    const sortFilter = this.page.locator(`(//ul[@class="sortingDropdown"]//li[text()="${sortText}"])[1]`);
    await sortFilter.waitFor({ state: 'visible' });
    await sortFilter.click();

  };

  async sortByDuration(sortText : string){

    await this.sortOption.click();
    const sortFilter = this.page.locator(`(//ul[@class="sortingDropdown"]//li[text()="${sortText}"])[2]`);
    await sortFilter.waitFor({ state: 'visible' });
    await sortFilter.click();

  };

  async selectThePackage(packageName : string){

    const packageLocator = this.page.locator(`//span[@class="name" and text() = "${packageName}"]`);
    await packageLocator.waitFor({state: 'visible'});
    await packageLocator.click();

  };

  async selectTheFirstPackage(){

    await this.page.waitForLoadState('load');
    await this.firstPackage.click();
    await this.page.waitForTimeout(2000);
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      await this.withFlights.click()
      
  ]);

  this.newPage = newPage;

  const skipBtn = await this.newPage.locator('//button[@class="skipBtn"]');
  await skipBtn.waitFor({ state: 'visible' });
  await skipBtn.click();

  return newPage; 

  };

  async isUserOnNewPackagePage(newPage : Page) {

    
    await this.newPage.waitForLoadState('load');
   // await this.newPage.waitForTimeout(10000);
    await this.newPage.pause();

    const newPageHeading = await this.newPage.locator('//span[@class="topHeading"]');
    //await newPageHeading.waitFor({ state: 'visible' });
    console.log('User is on new Package page.');

  
  };

  async clickOnProceedPayment(newPage : Page){

    await this.newPage.waitForLoadState('load'); // Make sure the page is loaded and stable
    const proceedPayment = await this.newPage.locator('#continue');
    await proceedPayment.waitFor({ state: 'visible' });
    await proceedPayment.click();

  };

  async isuserOnReviewPage(newPage : Page){

    const reviewBooking = await this.newPage.locator('(//span[@class="reviewHead"])[2]');
    await reviewBooking.isVisible();
  };

 

}