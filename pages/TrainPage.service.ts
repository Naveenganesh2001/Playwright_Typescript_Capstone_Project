import {  Locator, Page, expect } from "@playwright/test";

import { promises as fs } from 'fs';
import path from 'path';


export class TrainPage {

  readonly trainPageElement: Locator;

  readonly fromCityElement: Locator;
  readonly fromCityInput: Locator;

  readonly toCityInput: Locator;

  readonly selectDate: Locator;

  readonly searchButton: Locator;

  readonly allClasses: Locator;

  readonly trainsListElement: Locator;

  readonly selectFirstTrain: Locator;

  readonly trainTicketDetails: Locator;
  

  

  


  constructor(public readonly page: Page) {

    this.trainPageElement = page.locator('//span[@class="appendRight10 active latoBlack"]');
    this.fromCityElement = page.locator('#fromCity');
    this.fromCityInput = page.locator('//input[contains(@class, "react-autosuggest__input")]');

    this.toCityInput = page.locator('//input[contains(@class, "react-autosuggest__input")]');

    this.selectDate = page.locator('(//div[@class="DayPicker-Day" and contains(text(),"25")])[1]');

    this.searchButton = page.locator('//a[@class="primaryBtn font24 latoBold widgetSearchBtn borderRadius32"]');

    this.allClasses = page.locator('//li[@data-cy="ALL" and contains(text(),"All Class")]');

    this.trainsListElement = page.locator('//div[@class="Cards_cardContainer__GnUL3 "]');

    this.selectFirstTrain = page.locator('//p[@data-testid="class-info"]');

    this.trainTicketDetails = page.locator('//div[@class="trdDetails makeFlex column"]');

    

    
  };

  async isUserOnTrainPage(){
    await this.trainPageElement.isVisible();

  };

  async enterDetails(fromCity : string, toCity : string){

    await this.fromCityElement.click();
    await this.fromCityInput.fill(fromCity);
    const fromCityOption = this.page.locator('li[role="option"]', { hasText: fromCity }).first();
    await fromCityOption.waitFor({ state: 'visible' });
    await fromCityOption.first().click();

    await this.toCityInput.fill(toCity);
    const toCityElement = this.page.locator('li[role="option"]', { hasText: toCity }).first();
    await toCityElement.waitFor({ state: 'visible' });
    await toCityElement.first().click();

    await this.selectDate.click();

    await this.allClasses.click();

    await this.searchButton.click();

  };

  async areTrainsListed(){

    await this.trainsListElement.first().waitFor({ state: 'visible' });
    await this.trainsListElement.first().isVisible();

  };

  async printListOfTrains(){

    await this.page.waitForLoadState('load');

    await this.page.waitForTimeout(10000);

    const listOfTrains = await this.page.locator('//p[@data-testid="train-name"]');

    await listOfTrains.first().waitFor({ state: 'visible', timeout: 10000 });

    const count = await listOfTrains.count();
    console.log(`Total Trains found: ${count}`);

    for (let i = 0; i < count; i++) {
        const trainName = await listOfTrains.nth(i).textContent();
        console.log(`Train ${i + 1}: ${trainName?.trim()}`);
    }

  };

  async selectFilter(option : string){

    const quickFilter = this.page.locator(`//p[@class="Checkbox_inputLabelText__U1NvB" and text()="${option}"]`);
    await quickFilter.waitFor({state : 'visible'});
    await quickFilter.click();


  };

  async filteredDepaertureTimings(departureTiming : string){
    await this.page.locator(`(//p[@class="FilterTabs_labelText__5XYOC" and text()="${departureTiming}"])[2]`).click();
  };

  async selectTheFirstTrain(){

    await this.selectFirstTrain.first().waitFor({state : 'visible'});
    await this.selectFirstTrain.first().click();

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
  
      await this.page.locator('//h3[@class="font22 latoBlack appendBottom5"]').waitFor({ state: 'visible' });
  
      const screenshotPath = path.join(folderPath, filename);
  
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot saved to ${screenshotPath}`);
    };

    async printTicketDetails(){

      await this.page.waitForLoadState('load');

      await this.trainTicketDetails.waitFor({state : 'visible'});

      const details = await this.trainTicketDetails.allTextContents();

      console.log("Ticket Details: "+details);

    }

}