import { HomePage } from '../pages/HomePage.service';
import { LoginPage } from '../pages/LoginPage.service';
import { BusPage } from '../pages/BusPage.service';
import { TrainPage } from '../pages/TrainPage.service';
import { CabsPage } from '../pages/CabsPage.service';
import { FlightPage } from '../pages/FlightPage.service';
import { TravelInsurancePage } from '../pages/TravelInsurancePage.service';
import { HolidayPackagesPage } from '../pages/HolidayPackagesPage.service';
import { HomestaysPage } from '../pages/HomestaysPage.service';
import { VisaPage } from '../pages/VisaPage.service';
import { CurrencyPage } from '../pages/CurrencyPage.service';


import { test as base } from '@playwright/test';


type MyFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
    busPage: BusPage;
    trainPage: TrainPage;
    cabsPage: CabsPage;
    flightPage: FlightPage;
    travelInsurancePage: TravelInsurancePage;
    holidayPackagesPage: HolidayPackagesPage;
    homestaysPage: HomestaysPage;
    visaPage: VisaPage;
    currencyPage: CurrencyPage;
};

export const test = base.extend<MyFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    busPage: async ({ page }, use) =>{
        const busPage = new BusPage(page);
        await use (busPage);
    },
    trainPage: async ({ page }, use) =>{
        const trainPage = new TrainPage(page);
        await use (trainPage);
    },
    cabsPage: async ({ page }, use) =>{
        const cabsPage = new CabsPage(page);
        await use (cabsPage);
    },
    flightPage: async ({ page }, use) =>{
        const flightPage = new FlightPage(page);
        await use (flightPage);
    },
    travelInsurancePage: async ({ page }, use) =>{
        const travelInsurancePage = new TravelInsurancePage(page);
        await use (travelInsurancePage);
    },
    holidayPackagesPage: async ({ page }, use) =>{
        const holidayPackagesPage = new HolidayPackagesPage(page);
        await use (holidayPackagesPage);
    },
    homestaysPage: async ({ page }, use) =>{
        const homestaysPage = new HomestaysPage(page);
        await use (homestaysPage);
    },
    visaPage: async ({ page }, use) =>{
        const visaPage = new VisaPage(page);
        await use (visaPage);
    },
    currencyPage: async ({ page }, use) =>{
        const currencyPage = new CurrencyPage(page);
        await use (currencyPage);
    },

});

export { expect } from '@playwright/test';