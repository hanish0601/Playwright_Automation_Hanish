import{test, expect} from '@playwright/test'
import { ShadowDOMPage } from '../../pages/ShadowDOMPage';
test('Shadow DOM page Test' , async({page})=>{
const shadow = new ShadowDOMPage(page);
await page.goto('https://selectorshub.com/xpath-practice-page/')
shadow.showdowfill("Hnaish");
//shadow.nestedshadowInput("porwal");

});