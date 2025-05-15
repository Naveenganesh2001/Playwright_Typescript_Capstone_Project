import {  Locator, Page, expect } from "@playwright/test";

export class FlightPage {

  readonly flightPageElement: Locator;


  constructor(public readonly page: Page) {

    this.flightPageElement = page.locator('//p[@class="filtersHeading appendBottom15"]');
    
    
  };

  async isUserOnFlightsPage(){

    await this.page.waitForTimeout(7000);
  
    await this.flightPageElement.isVisible();

  };

}