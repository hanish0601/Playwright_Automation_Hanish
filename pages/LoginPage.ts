import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    readonly emailInput : Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;
    readonly buttoncontinue :Locator;
    readonly headingr :Locator;
    readonly searhbox : Locator;
    //readonly cl : Locator;

    constructor(page:Page){
super(page)
this.emailInput = page.locator('input[name="email"]');
this.passwordInput = page.locator('input[name= "password"]');
this.loginButton =page.locator('input[type = "submit"]');
this.buttoncontinue =page.getByRole('link', {name :"Continue Shopping"});
this.headingr =page.getByRole('heading',{name:"New Customers"});
this.searhbox =page.getByPlaceholder('SEARCH PRODUCTS..');
//this.cl = page.getByRole("StaticText", {name :"clothing"});
    
}
    async goto(){
        await this.navigate('https://www.kapruka.com/online/combogifts');
    }
    async isLoaded(): Promise<void> {
        await expect (this.emailInput).toBeVisible;
        await expect(this.passwordInput).toBeVisible;
        await expect(this.loginButton).toBeVisible;
    }
    
    async Login(email :string , password: string){
        await this.fill(this.emailInput , email);
        await this.fill(this.passwordInput , password);
        await this.click(this.loginButton);
        await expect(this.page).toHaveURL(/kapruka/);
        
    }

    async headingavailable(){
     await expect(this.headingr).toBeVisible();
     
        
    }
    async clickbuttonshopping(){
       await this.buttoncontinue.click();
    }
    async clickonsearchbox(){
        await this.searhbox.click();
        await this.searhbox.fill('clothes');
        
    }
}