import{test , expect} from '@playwright/test';
import { ComboGiftsPage } from '../../pages/ComboGiftsPage';
//import { LoginPage } from '../../pages/LoginPage';
test ('validate the Combogift scenario', async({page})=>{
    const combo = new ComboGiftsPage(page);
    await combo.ho();
    const name =  await combo.getProductName();
    const price = await combo.getProductPrice();

    console.log('The product name is ' ,  name);
    console.log ('The price is ' , price);
   await expect(name).not.toBe('');
   await expect(price).not.toBe('');
    


});
