import {  Locator, Page, expect } from "@playwright/test";

export class CurrencyPage {

  readonly heading : Locator;

  constructor(public readonly page: Page) {

   this.heading = page.locator('//h1[@class="TextStylesstyle__H1TagStyle-sc-1pouoje-0 bcfXdp"]');

  };

  async isUserOnCurrencyPage(){

    await expect(this.page).toHaveURL('https://www.makemytrip.com/forex/');

  };

  async clickOnForexOrders(){
    await this.page.waitForTimeout(5000);
    const forexOrder = this.page.locator('//p[@class="FormattedTextstyles__ParaStyle-sc-1vtotqd-0 kOvxch"]');
    await forexOrder.waitFor({state : 'visible'});
    await forexOrder.click();

  };

  async isUserOnForexPage(){

    const buyCurrency = this.page.locator('#listingPage_foreignCurrencyNotes_quickLoadBtn');

    await buyCurrency.waitFor({state : 'visible'});

    await buyCurrency.isVisible();
  };

  async clickOnBuyCurrency(){

    const buyCurrency = this.page.locator('#listingPage_foreignCurrencyNotes_quickLoadBtn');

    await buyCurrency.waitFor({state : 'visible'});

    await buyCurrency.click();

  };

  async isUserOnForeignCurrencyPage(){
    await this.heading.isVisible();

  };

  async clickOnUSdollar(){
    const USdollar = this.page.locator('//span[@class="CurrencyStylestyle__CurrencyLabeltxt-sc-1ef0igv-5 hmaurN" and text()="US Dollar"]');
    await USdollar.waitFor({state : 'visible'});

    await USdollar.click();
  };

  async enterAmount(amt : string){

    const amountElement = this.page.locator('#add-currency-input-0');

    await amountElement.waitFor({state : 'visible'});

    await amountElement.click();

    await amountElement.fill(amt);

    await this.page.waitForTimeout(3000);

  };

  async printAmountInRupees(){

    const amt = await this.page.locator('//span[@class="TextStylesstyle__SpanTagStyle-sc-1pouoje-7 xUUas"]');

    await amt.waitFor({state : 'visible'});

    const amtInRup = await amt.textContent();

    console.log("Amount in Rupees: "+amtInRup);
  };

  async selectCountry(country : string){
    const searchBtn = await this.page.locator('#other-currency-id');
    await searchBtn.waitFor({state : 'visible'});
    await searchBtn.click();

    const countryName = await this.page.locator('#select-currency-dropdown');
    await countryName.waitFor({state : 'visible'});
    await countryName.click();
    await countryName.fill(country);

    const option = await this.page.locator('//p[@class="TextStylesstyle__ParaTagStyle-sc-1pouoje-6 ofWtT"]');
    await option.waitFor({state : 'visible'});
    await option.first().click();
   
  };

}