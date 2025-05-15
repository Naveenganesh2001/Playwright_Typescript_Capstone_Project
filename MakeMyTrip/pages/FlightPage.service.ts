import {  Locator, Page, expect } from "@playwright/test";

export class FlightPage {




  constructor(public readonly page: Page) {
    
    
  };

  async isUserOnFlightsPage(){
    await expect(this.page).toHaveURL('https://www.makemytrip.com/flights/');

  };

}