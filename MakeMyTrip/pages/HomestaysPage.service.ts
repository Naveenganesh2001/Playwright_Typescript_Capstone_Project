import {  Locator, Page, expect } from "@playwright/test";

export class HomestaysPage {

  readonly homestaysPageElement: Locator;

  readonly cityTab: Locator;
  readonly citySearchBar: Locator;

  readonly checkInDate: Locator;

  readonly checkOutDate: Locator;

  readonly applyBtn: Locator;

  readonly searchBtn: Locator;


  constructor(public readonly page: Page) {

    this.homestaysPageElement = page.locator('//p[@class="filtersHeading appendBottom15"]');

    this.cityTab = page.locator('#city');

    this.citySearchBar = page.locator('//input[@title="Where do you want to stay?"]');

    this.checkInDate = page.locator('(//div[@class="DayPicker-Day" and text()="25"])[1]');

    this.checkOutDate = page.locator('(//div[@class="DayPicker-Day" and text()="28"])[1]');

    this.applyBtn = page.locator('//button[@class="primaryBtn btnApplyNew pushRight capText"]');

    this.searchBtn = page.locator('#hsw_search_button');
    
    
  };

  async isUserOnHomestaysPage(){
    await expect(this.page).toHaveURL('https://www.makemytrip.com/homestays/');

  };

  async enterDetails(place : string){

    await this.cityTab.click();
    await this.citySearchBar.clear();
    await this.citySearchBar.click();
    await this.citySearchBar.fill(place);
    await this.page.waitForTimeout(5000);
    const suggestedCity = await this.page.locator('//li[@id="react-autowhatever-1-section-0-item-0"]');
    await suggestedCity.click();

    await this.checkInDate.click();

    await this.checkOutDate.click();

    await this.applyBtn.click();

    await this.searchBtn.click();



  };

}