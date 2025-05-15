import {  Locator, Page, expect } from "@playwright/test";

export class TravelInsurancePage {

  readonly datesElement: Locator;

  readonly fromDate: Locator;

  readonly toDate: Locator;

  readonly viewPlansButton: Locator;

  readonly errorMsg1: Locator;

  readonly errorMsg2: Locator;

  readonly travellersButton: Locator;

  readonly ageRange: Locator;

  readonly applyButton: Locator;

  readonly searchBtn: Locator;

  



  constructor(public readonly page: Page) {

    this.datesElement = page.locator('//div[@data-test-id="TravelDateWiget-ChevStateWrap"]');
    
    this.fromDate = page.locator('(//button[@class="rdp-button_reset rdp-button rdp-day" and text()="25"])[1]');

    this.toDate = page.locator('(//button[@class="rdp-button_reset rdp-button rdp-day" and text()="28"])[1]')

    this.viewPlansButton = page.locator('//span[@class="TextStylesstyle__SpanTagStyle-sc-1ci0hiy-6 ebYDaw"]');

    this.errorMsg1 = page.locator('//p[@class="TextStylesstyle__ParaTagStyle-sc-1ci0hiy-5 ybhTh"]');

    this.errorMsg2 = page.locator('//span[@class="TextStylesstyle__SpanTagStyle-sc-1ci0hiy-6 glnpsS"]');

    this.travellersButton = page.locator('(//div[@class="TravellingToWidgetstyle__ChevStateWrap-sc-56hbau-11 cTvHVH"])[2]');

    this.ageRange = page.locator('//span[@data-test-id="FormattedText" and text()="20-30yrs"]');

    this.applyButton = page.locator('//span[@class="TextStylesstyle__SpanTagStyle-sc-1ci0hiy-6 ebYDaw" and text()="Apply"]');

    this.searchBtn = page.locator('//div[@class="TravelDetailsstyle__OtherCountyBtn-sc-4x930j-5 gPKoan"]');
    
  };

  async isUserOnTravelInsurancePage(){
    await expect(this.page).toHaveURL('https://www.makemytrip.com/insurance?isRetail=true');

  };

  async selectTravellingDates(){

    await this.datesElement.click();
    await this.fromDate.click();
    await this.toDate.click();
 
  };

  async clickOnViewPlans(): Promise<void> {
    await this.viewPlansButton.click(); 
    //await this.page.waitForLoadState('networkidle'); 

  };
  async displayErrorMessage1(){

    const errorMessage = await this.errorMsg1.textContent();
    console.log("Error Message: "+errorMessage);

  };

  async displayErrorMessage2(){

    await this.page.locator('(//span[@class="CheckButtonstyle__CheckButtonStyle-sc-1v2zgji-0 fgQyQZ"])[1]').click();
    const errorMessage = await this.errorMsg2.textContent();
    console.log("Error Message: "+errorMessage);

  };

  async selectTravellers(){

    await this.travellersButton.click();
    await this.page.waitForLoadState('load');
    const travellersAgeButton = await this.page.locator('//span[@class="TextStylesstyle__SpanTagStyle-sc-1ci0hiy-6 jyjFpu"]');

    await travellersAgeButton.waitFor({state : 'visible'});
    await travellersAgeButton.click();
    await travellersAgeButton.click();
    await this.ageRange.click();
    //await this.ageRange.click();
    await this.applyButton.click();

  };

  async searchAndSelectDestination(destination : string){

    await this.searchBtn.click();
    const searchTxt = await this.page.locator('//label[@data-test-id="TMFloatingInput-label"]');
    await searchTxt.fill(destination);

    const serachedDestination = await this.page.locator('//p[@class="TextStylesstyle__ParaTagStyle-sc-1ci0hiy-5 gJuhyk"]');
    await serachedDestination.first().click();

    const addDestinationButton = await this.page.locator('//span[@class="TextStylesstyle__SpanTagStyle-sc-1ci0hiy-6 ebYDaw" and text()="Add Destination"]');
    await addDestinationButton.click();
  };

 

}