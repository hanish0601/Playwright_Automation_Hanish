import{test, expect} from '@playwright/test'
import { CreateAccount } from '../../pages/CreateAccount';
test('Login test for today', async({page})=>{
const Acnt = new CreateAccount(page);
await Acnt.jao();
await Acnt.clickonCreateAccount();
await Acnt.CreateAccountOn();
});
