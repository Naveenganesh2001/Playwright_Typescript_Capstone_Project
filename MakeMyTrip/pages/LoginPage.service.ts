import {  Locator, Page } from "@playwright/test";


export class LoginPage {
  readonly loginPageElement: Locator;
  readonly mobileNumber: Locator;
  readonly continueButton: Locator;
  readonly otpPageElement: Locator;
  readonly otpInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(public readonly page: Page) {
    this.loginPageElement = page.locator('//section[@data-cy="CommonModal_2"]');
    this.mobileNumber = page.locator('//input[@data-cy="userName"]');
    this.continueButton = page.locator('//button[@class="capText font16"]');
    this.otpPageElement = page.locator('//section[@data-cy="CommonModal_2"]');
    this.otpInput = page.locator('#otp');
    this.loginButton = page.locator('//button[@data-cy="login"]');
    this.errorMessage = page.locator('//span[@class="appendRight5 popupSprite errorCross"]');
  }

  async isUserIsOnLoginPage() {
    await this.loginPageElement.waitFor({ state: 'visible' });
  };

  async enterMobileNumberAndContinue(mobileNumberInput: string) {
    await this.loginPageElement.waitFor({ state: 'visible' });
    await this.mobileNumber.fill(mobileNumberInput);
    await this.page.waitForTimeout(5000);
    await this.continueButton.click();
    console.log('Mobile number entered and continue button clicked');
  };

  async enterOTPAndClickLogin() {
    await this.otpPageElement.waitFor({ state: 'visible' });
    await this.page.waitForTimeout(10000);
    await this.otpInput.fill('123456');
    await this.loginButton.waitFor({ state: 'visible' });
    await this.loginButton.click();
  };

  async printErrorMessage() {
    
    const errorMessageText = await this.errorMessage.textContent();
    console.log('Error message:', errorMessageText);
  };
}