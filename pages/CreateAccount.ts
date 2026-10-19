import {Page , Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPage } from "./LoginPage";

export class CreateAccount{
    readonly page:Page
    readonly createaccount : Locator;
    readonly FirstName : Locator;
    readonly LastName : Locator;
    readonly EmailAddress : Locator;
    readonly CreatePassword : Locator;
    readonly Confrimpassword : Locator;
    readonly CreateAccountbutton : Locator;
    constructor(page:Page){
        this.createaccount= page.getByRole('button', {name:"CREATE ACCOUN"});
        this.FirstName =page.locator('//input[@name = "firstName"]');
        this.LastName = page.locator('//input[@name = "lastName"]');
        this.EmailAddress = page.locator('//input[@name = "email"]');
        this.CreatePassword =page.locator('//input[@name = "password"]');
        this.Confrimpassword =page.locator('//input[@name = "passwordReConfirm"]');
        this.page = page;
        this.CreateAccountbutton =page.getByRole('button', {name: "CREATE ACCOUNT"});


    }
    async CreateAccountOn()
    {
        await expect(this.FirstName).toBeVisible
         await this.FirstName.fill("Hanish");
         await expect(this.LastName).toBeVisible
         await this.LastName.fill("Porwal");
         await expect(this.EmailAddress).toBeVisible
         await this.EmailAddress.fill("richuuu.tripathi@gmail.com");
         await expect(this.CreatePassword).toBeVisible;
         await this.CreatePassword.fill("Secure@062500");
         await expect(this.Confrimpassword).toBeVisible;
         await this.Confrimpassword.fill("Secure@062500");
         await this.CreateAccountbutton.click();

    }

    async clickonCreateAccount(){
        await this.createaccount.click();
    }

    async jao(){
    await this.page.goto('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');
}

}








