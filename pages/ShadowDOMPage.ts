import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class ShadowDOMPage extends BasePage{
       readonly shawdowInput : Locator;
    readonly nestedshadowInput : Locator;
    constructor(page:Page){
     super(page);

     const currentPage = page ?? this.page;

     if (!currentPage) {
         throw new Error('ShadowDOMPage requires a valid Playwright Page instance.');
     }

         this.shawdowInput = currentPage.locator('#kils');
           this.nestedshadowInput= currentPage.locator('#pizza');
        
    }
    async isLoaded(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }
    
    async showdowfill(value:string) : Promise<void>{
        await this.shawdowInput.fill(value);
    }

    async nestedshadowfill(value: string): Promise<void>{
        await this.nestedshadowInput.fill(value);
    }

}
