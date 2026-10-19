//npm init playwright@latest - initialize the project
//npx install playwtigth -- we are installing the browsers
//npx playwrigth test  
import {test,expect} from '@playwright/test';
test ('Login check' , async({page})=>
{
await page.goto('https://www.google.com');
});