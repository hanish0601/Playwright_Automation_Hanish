import {test, expect} from '@playwright/test'
test('API response Mocking', async ({page})=>
{
await page.route('**api/users' , async route=>
    {
await route.fulfill({
    status:200,
    contentType:'application/JSON',
    body:JSON.stringify({users: [{id :1 , name : "Sachin"}]

})
});
    });
});



