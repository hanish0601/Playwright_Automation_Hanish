import{test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { LogoutPage } from '../../pages/LogoutPage';
test('Login test for today', async({page})=>{
const login = new LoginPage(page);
const logout = new LogoutPage(page);
await login.goto();
await login.headingavailable();
await login.isLoaded();
await login.Login("porwalhanish@gmail.com", "Secure@062500");
// await login.clickbuttonshopping();
// await login.clickonsearchbox();
await logout.logoutfeature();
});