import {  Locator, Page, expect } from "@playwright/test";

export class VisaPage {

    readonly destinationCity: Locator;

    readonly departureDate: Locator;

    readonly searchBtn: Locator;

    readonly visaDetailPage: Locator;

    

 


  constructor(public readonly page: Page) {

    this.destinationCity = page.locator('#destinationCity');

    this.departureDate = page.locator('#departureDate');

    this.searchBtn = page.locator('#search_button');

    this.visaDetailPage = page.locator('//div[@class="font22 latoBlack black"]');

   

    

    
    
  };

  async isUserOnVisaPage(){
    await expect(this.page).toHaveURL('https://visa.makemytrip.com/');

  };

  async enterDetails(place : string){

    await this.destinationCity.click();
    const cityText =  this.page.locator('//input[@class="citypicker_input"]');
    await cityText.fill(place);

    await this.page.waitForTimeout(3000);
    const searchedCity = this.page.locator('//p[@class="font18 appendBottom5 blackText"]');
    await searchedCity.first().click();

    await this.departureDate.first().click();

    const departureDateElement = this.page.locator('(//div[@class="DayPicker-Day"and text()="25"])[1]');
    await departureDateElement.click();

    const returnDateElement = this.page.locator('(//div[@class="DayPicker-Day"and text()="30"])[1]');
    await returnDateElement.click();

    await this.searchBtn.click();

  };

  async isUserOnVisaDetailPage(){
    await this.visaDetailPage.isVisible();
  };

  async printDocumentsToUpload(){

    const documentText = await this.page.locator('//div[@class="subDetailSection"]').textContent();
    console.log(documentText);
  };

  async printQuestionAnswer(question : string){

    const option = await this.page.locator(`//span[@class="tabTitle black latoBold font16" and text()="${question}"]`);
    await option.click();

    const qstAns = await this.page.locator('//div[@class="faqItem"]').textContent();

    console.log(qstAns);

  };

}