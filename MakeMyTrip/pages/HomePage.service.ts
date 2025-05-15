import {  Locator, Page } from "@playwright/test";


export class HomePage {
  readonly closeButton: Locator;

  readonly homePageElement: Locator;

  readonly loginButtonElement: Locator;

  readonly fromCityInput: Locator;
  readonly fromCityInputTextBox: Locator;

  readonly toCityInput: Locator;
  readonly toCityInputTextBox: Locator;

  readonly searchBtn: Locator;

  readonly busesTab: Locator;

  readonly trainsTab: Locator;

  readonly cabsTab: Locator;

  readonly travelInsuranceTab: Locator;
  

  constructor(public readonly page: Page) {
    this.closeButton = page.locator('//span[@data-cy="closeModal"]');

    this.homePageElement = page.locator('//a[@class="mmtLogo makeFlex"]');

    this.loginButtonElement = page.locator('//div[@class="makeFlex column flexOne whiteText latoBold"]');

    this.fromCityInput = page.locator('#fromCity');
    this.fromCityInputTextBox = page.locator('//input[contains(@class, "react-autosuggest__input")]');
    
    this.toCityInput = page.locator('#toCity');
    this.toCityInputTextBox = page.locator('//input[contains(@class, "react-autosuggest__input")]');

    this.searchBtn = page.locator('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]');

    this.busesTab = page.locator('//span[@class="chNavIcon appendBottom2 chSprite chBuses inactive"]');

    this.trainsTab = page.locator('//li[@class="menu_Trains"]');

    this.cabsTab = page.locator('//span[@class="chNavIcon appendBottom2 chSprite chCabs inactive"]');

    this.travelInsuranceTab = page.locator('//span[@class="chNavIcon appendBottom2 chSprite chTravelInsurance inactive"]');
  };

  async isUserIsOnHomePage() {
    await this.closeButton.click();
    await this.homePageElement.waitFor({ state: 'visible' });
    if(await this.homePageElement.isVisible()) {
      console.log('User is on Home Page');
    }
    else {
      console.log('User is not on Home Page');
    }
  };

  async userClickOnLoginOrCreateAccountButton() {
    await this.loginButtonElement.click();
  };

  async EnterFromCityAndToCity(fromCity: string, toCity: string) {

    await this.fromCityInput.click();
    await this.fromCityInputTextBox.fill(fromCity);
    const fromCityOption = this.page.locator('li[role="option"]', { hasText: fromCity });
    await fromCityOption.waitFor({ state: 'visible' });
    await fromCityOption.first().click();

    await this.toCityInput.click();
    await this.toCityInputTextBox.fill(toCity);
    const toCityElement = this.page.locator('li[role="option"]', { hasText: toCity });
    await toCityElement.waitFor({ state: 'visible' });
    await toCityElement.first().click();
  };

  async selectFlightDate(date: string) {
    
    const [day, month, year] = date.split('/').map(Number);
    const targetDate = new Date(year, month - 1, day);
    const monthName = targetDate.toLocaleString('default', { month: 'long' });
  
    
    let monthYearLocator = this.page.locator('(//div[@class="DayPicker-Caption"])[1]');
  
    
    while (true) {
      const visibleMonthText = await monthYearLocator.textContent();
  
      if (visibleMonthText && visibleMonthText.includes(monthName)) {
        break;
      }
  
      const nextButton = this.page.locator('//span[@class="DayPicker-NavButton DayPicker-NavButton--next"]');
      await nextButton.click();
      await this.page.waitForTimeout(500); 
    }
  
    console.log('Correct month found:', monthName);
  
    
    const dayString = day.toString();
    const dateLocator = this.page.locator(`(//div[@class="dateInnerCell"]//p[text()='${dayString}'])[1]`);
    await dateLocator.click();
  };
  
  async clickOnSearchButton(){
    await this.searchBtn.click();

  };

  async clickOnBusesTab(){
    await this.busesTab.click();

  };

  async clickOnTrainsTab(){
    await this.trainsTab.click();
  };

  async clickOnCabsTab(){
    await this.cabsTab.click();
  };

  async clickOnTravelInsuranceTab(){
    await this.travelInsuranceTab.click();
  };

}   

