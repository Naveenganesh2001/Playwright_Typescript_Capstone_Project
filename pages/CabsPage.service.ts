import {  Locator, Page, expect } from "@playwright/test";

import { promises as fs } from 'fs';
import path from 'path';


export class CabsPage {

    readonly fromCityLocator: Locator;
    readonly fromCityInput: Locator;

    readonly toCityInput: Locator;

    readonly selectDepartureDateElement: Locator;

    readonly selectDate: Locator;
  
    readonly searchButton: Locator;

    readonly cabsListPageElement: Locator;

    readonly selectFirstCabElement: Locator;

    readonly payment: Locator;

    readonly roofCarrierCheckbox: Locator;

    readonly cabBookingDetails: Locator;

    
  

  

  


  constructor(public readonly page: Page) {

    this.fromCityLocator = page.locator('#fromCity'); 
    this.fromCityInput = page.locator('//input[contains(@class, "react-autosuggest__input")]'); 

    this.toCityInput =  page.locator('//input[contains(@class, "react-autosuggest__input")]');

    this.selectDepartureDateElement = page.locator('//p[@data-cy="departureDate"]');

    this.selectDate = page.locator('(//div[@class="DayPicker-Day" and contains(text(),"25")])[1]');
   
    this.searchButton = page.locator('//a[@class="primaryBtn font24 latoBold widgetSearchBtn"]');

    this.cabsListPageElement = page.locator('//p[@class="latoBold font20 appendTop10 appendBottom20"]');

    this.selectFirstCabElement = page.locator('(//span[@class="bookNowButton latoBlack font12 whiteText"])[1]'); 

    this.payment = page.locator('//span[@class="latoBlack font28 blackText"]');

    this.roofCarrierCheckbox = page.locator('//label[@class="custom-checkbox"]');

    this.cabBookingDetails = page.locator('//div[@class="headerBox "]');

    


    

    
  };

  async isUserOnCabsPage(){
    await expect(this.page).toHaveURL('https://www.makemytrip.com/cabs/');

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

    await this.selectDepartureDateElement.click();

    await this.selectDate.click();
    
    await this.searchButton.click();

  };

  async areCabsListed(){

    await this.page.waitForLoadState('load');
    await this.cabsListPageElement.isVisible();
    await console.log("User is on Cabs Listing Page");

  };

  async printListOfCabs(){

    await this.page.waitForLoadState('load');

    await this.page.waitForTimeout(10000);

    const listOfCabs = await this.page.locator('//span[@class="latoBlack font20 appendRight5"]');

    //await listOfCabs.first().waitFor({ state: 'visible', timeout: 10000 });

    const count = await listOfCabs.count();
    console.log(`Total Cabs found: ${count}`);

    for (let i = 0; i < count; i++) {
        const cabName = await listOfCabs.nth(i).textContent();
        console.log(`Cab ${i + 1}: ${cabName?.trim()}`);
    }

  };

  async filteredCabType(cabType: string){

    const cabTypeLocator = await this.page.locator(`//label[text()="${cabType}"]`);
    //await cabTypeLocator.waitFor({state : 'visible'});
    await cabTypeLocator.click();

  };

  async filteredCabFuelType(cabFuelType: string){

    const cabFuelTypeLocator = await this.page.locator(`//label[text()="${cabFuelType}"]`);
    //await cabFuelTypeLocator.waitFor({state : 'visible'});
    await cabFuelTypeLocator.click();

  };

  async filteredCabModel(cabModel: string){

    const cabModelLocator = await this.page.locator(`//label[text()="${cabModel}"]`);
    //await cabModelLocator.waitFor({state : 'visible'});
    await cabModelLocator.click();

  };

  async selectFirstCab(){

    await this.selectFirstCabElement.click();

  };

  async verifyTheAmountWithRoofCarrier() {

    let amount = await this.payment.textContent();
    console.log("Total Cost without Roof Carrier: " + amount);
  
    await this.roofCarrierCheckbox.waitFor({ state: 'visible' });
    await this.roofCarrierCheckbox.click();


    await this.page.waitForLoadState('load');
  
    let newAmount = await this.page.locator('//span[@class="latoBlack font28 blackText"]').textContent();
    console.log("Total Cost with Roof Carrier: " + newAmount);

    expect(amount).not.toBe(newAmount);

  };

  async printBookingDetails(){

    await this.page.waitForLoadState('load');

      await this.cabBookingDetails.waitFor({state : 'visible'});

      const details = await this.cabBookingDetails.allTextContents();

      console.log("Cab Booking Details: "+details);

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
    
        await this.page.locator('//p[@class="latoBlack font20 blackText appendBottom15 "]').waitFor({ state: 'visible' });
    
        const screenshotPath = path.join(folderPath, filename);
    
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`Screenshot saved to ${screenshotPath}`);
      };
  


}