import {  Locator, Page, expect } from "@playwright/test";

import { promises as fs } from 'fs';
import path from 'path';


export class BusPage {

 // readonly busPageElement: Locator;

  readonly fromCityLocator: Locator;
  readonly fromCityInput: Locator;

  readonly toCityInput: Locator;

  readonly selectDate: Locator;
  
  readonly searchButton: Locator;

  readonly busCardList: Locator;

  readonly listOfBuses: Locator;

  readonly selectFirstBusSeats: Locator;

  readonly firstSeatInBus: Locator;

  readonly continueButton: Locator;

  readonly actualAmount: Locator;

  readonly tripAssuredCheckbox: Locator;

  readonly freeCancellationCheckbox: Locator;


  constructor(public readonly page: Page) {

  //  this.busPageElement = page.locator('//section[@data-cy="CommonModal_2"]');

    this.fromCityLocator = page.locator('#fromCity');
    this.fromCityInput = page.locator('//input[contains(@class, "react-autosuggest__input")]');

    this.toCityInput =  page.locator('//input[contains(@class, "react-autosuggest__input")]');

    this.selectDate = page.locator('(//div[@class="DayPicker-Day" and contains(text(),"25")])[1]');

    this.searchButton = page.locator('#search_button');

    this.busCardList = page.locator('//div[@class="busCardContainer "]');

    this.listOfBuses = page.locator('//p[@class="makeFlex hrtlCenter appendBottom8 latoBold blackText appendRight15"]');

    this.selectFirstBusSeats = page.locator('(//div[@class="sc-jKJlTe fnCpOO"])[1]');

    this.firstSeatInBus = page.locator('(//span[@data-testid="seat_seater_available" and @class="listingSprite commonSmallSeatIcon appendBottom4"])[1]');

    this.continueButton = page.locator('//div[@class="cta-book-seats font16 capText makeFlex hrtlCenter vrtlCenter active"]');

    this.actualAmount = page.locator('//span[@class="rupeeSymbol"]');

    this.tripAssuredCheckbox = page.locator('(//label[@class="checkboxContainer appendRight5"]//input[@type="checkbox"])[1]');

    this.freeCancellationCheckbox = page.locator('(//label[@class="checkboxContainer appendRight5"]//input[@type="checkbox"])[2]');

    
  };

  async isUserOnBusPage() {
    await expect(this.page).toHaveURL('https://www.makemytrip.com/bus-tickets/');
  };

  async enterDetails(fromCity : string, toCity : string){

    await this.fromCityLocator.click();
    await this.fromCityInput.fill(fromCity);
    const fromCityOption = this.page.locator('li[role="option"]', { hasText: fromCity }).first();
    await fromCityOption.waitFor({ state: 'visible' });
    await fromCityOption.first().click();

    await this.toCityInput.fill(toCity);
    const toCityElement = this.page.locator('li[role="option"]', { hasText: toCity }).first();
    await toCityElement.waitFor({ state: 'visible' });
    await toCityElement.first().click();

    await this.selectDate.click();
    
    await this.searchButton.click();

  };

  async areBusesListed(){
    
    await this.busCardList.first().isVisible()
    

  };

  async printTheTitle(){
    const title = await this.page.title();
    console.log("Page Title: "+title);
  };

  async printListOfBuses(){

    await this.busCardList.first().isVisible()
    const count = await this.listOfBuses.count();
    console.log(`Total buses found: ${count}`);

    for (let i = 0; i < count; i++) {
        const busName = await this.listOfBuses.nth(i).textContent();
        console.log(`Bus ${i + 1}: ${busName?.trim()}`);
    }

  };

  async giveFilter(aCNonAc: string, seaterSleeper: string) {
    await expect(this.busCardList.first()).toBeVisible();
    const acNonAcElement = this.page.locator(`//span[@class="secondaryTxt font14" and text()="${aCNonAc}"]`);
    await acNonAcElement.click();
  
    const seaterSleeperElement = this.page.locator(`//span[@class="secondaryTxt font14" and text()="${seaterSleeper}"]`);
    await seaterSleeperElement.click();
  };

  async checkListOfBusesFiltered(aCNonAc: string, seaterSleeper: string) {
    await expect(this.busCardList.first()).toBeVisible(); 
  
    const busFilter = this.page.locator('//p[@class="makeFlex hrtlCenter secondaryTxt nowrapStyle"]');
    const count = await busFilter.count();
  
    for (let i = 0; i < count; i++) {
      const busText = await busFilter.nth(i).textContent();
      const busInfo = busText?.trim() || '';
  
      expect(busInfo.includes(aCNonAc) || busInfo.includes("A/C")).toBeTruthy();
      expect(busInfo).toContain(seaterSleeper);
    }
  };

  async userSelectsTheFirstSeat(){

    await this.selectFirstBusSeats.click();

    await this.firstSeatInBus.click();

  };

  async clickContinueButton(){
    await this.continueButton.click();
  };

  async captureScreenshotWithName(filename: string) {
    
    if (!filename.endsWith('.png')) {
      filename = `${filename}.png`;
    }

    const folderPath = path.resolve('screenshots');

    try {
      await fs.access(folderPath);
      
    } catch (err) {
      await fs.mkdir(folderPath);
    }

    await this.page.waitForLoadState('load'); 

    await this.page.locator('//h1[@class="latoBlack lineHeight29 font24"]').waitFor({ state: 'visible' });

    const screenshotPath = path.join(folderPath, filename);

    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved to ${screenshotPath}`);
  };
  
  async verifyTheAmountWithTripAssured() {
    let amount = await this.actualAmount.textContent();
    console.log("Total Cost without Trip Assured: " + amount);
  
    await this.tripAssuredCheckbox.waitFor({ state: 'visible' });
    await this.tripAssuredCheckbox.click();


    await this.page.waitForLoadState('load');
  
    let newAmount = await this.page.locator('//span[@class="rupeeSymbol"]').textContent();
    console.log("Total Cost with Trip Assured: " + newAmount);

    expect(amount).not.toBe(newAmount);

  };

  async verifyTheAmountWithFreeCancellation(){

    let amount = await this.actualAmount.textContent();
    console.log("Total Cost without Free Cancellation: " + amount);
  
    await this.freeCancellationCheckbox.waitFor({ state: 'visible' });
    await this.freeCancellationCheckbox.click();


    await this.page.waitForLoadState('load');
  
    let newAmount = await this.page.locator('//span[@class="rupeeSymbol"]').textContent();
    console.log("Total Cost with Free Cancellation: " + newAmount);

    expect(amount).toBe(newAmount);

  };

  async giveFilterTiming(timing: string) {
    const timingLocator = this.page.locator(`//div[@class="time-filter-option "]//span[contains(text(),"${timing}")]`);

    await timingLocator.first().waitFor({ state: 'visible' }); 
    await timingLocator.first().click();
  };

  async giveFilterBusName(busName : string){

    const busNameLocator = this.page.locator(`//span[@class="sc-kjoXOD erIYpE" and contains(text(),"${busName}")]`);
    busNameLocator.waitFor({state:'visible'});
    await busNameLocator.click();

  };


}