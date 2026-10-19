import {Page, Locator, expect} from '@playwright/test';


export abstract class BasePage{
    readonly page: Page
    constructor(page:Page){
        //declaring the property as readonly -- setting once never changed 
        //constructor runs automatically when you write Loginpage(page)

this.page=page //current instance of Object
    }
   async navigate(url:string) : Promise<void>{
    await this.page.goto(url, {waitUntil:'load'});

   }
   async click(locator: Locator) : Promise<void>{
    await locator.waitFor({state : 'visible'});
    await locator.click();

   }

   async fill(locator: Locator , value: string) : Promise<void>{
    await locator.waitFor({state : 'visible'});
    await locator.fill(value);
   }
   abstract isLoaded(): Promise<void>;
   
}

