import { Page, Locator, expect } from "@playwright/test";

//import { BasePage } from './BasePage';
//import { LoginPage } from "./LoginPage";



export class LogoutPage {
    readonly logout : Locator
    
    //readonly cl : Locator;

    constructor(page:Page){
//super(page)
this.logout = page.getByRole('link', {name :"↪ Log Out"});

    }
    async isLoaded(): Promise<void> {
        await expect(this.logout).toBeVisible;
        //await this.logout.click();
        }

        async logoutfeature(){
            await this.logout.click();
        }

}