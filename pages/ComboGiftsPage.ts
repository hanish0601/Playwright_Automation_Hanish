import{Page, Locator} from '@playwright/test'

//import { BasePage } from './BasePage';
//import { LoginPage } from './LoginPage';
export class ComboGiftsPage  {
    readonly page: Page;
    
    //readonly productname: Locator;
    constructor(page:Page){
       
this.page =page
    }

    async getProductName() :Promise <string> {
    const productname = this.page.locator('.catalogueV2heading').first();
    await productname.waitFor({state:'visible' , timeout:30000});
    const name =  await productname.textContent();

     return name?. trim() || ''; //optional chaining safely handle the Null values 


}
async getProductPrice() : Promise<string>{
    const productprice =  this.page.locator('.CatalogueV2price').first();
    await productprice.waitFor({state:'visible' , timeout:30000});
    const price = await productprice.textContent();
    return price?. trim() || '';


}
async ho(){
    await this.page.goto('https://www.kapruka.com/online/combogifts');
}

} 