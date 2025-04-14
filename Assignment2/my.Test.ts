import {test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test';
import {webkit,chromium,firefox} from 'playwright';

test('context',async()=>{
    const browser:Browser =await chromium.launch({headless:false,channel:'chrome'});
   
//  Context 1 code
    const context1:BrowserContext=await browser.newContext();
    const page1:Page= await context1.newPage()
    

    await page1.goto('https://www.saucedemo.com/');
    const username1:Locator=await page1.locator('[id="user-name"]')
    const password1:Locator=await page1.locator('[id="password"]')
    const login1:Locator=await page1.locator('[id="login-button"]')


    await username1.fill("standard_user")
    await password1.fill("secret_sauce")
    await login1.click()
    await expect(page1.getByText('Products')).toBeVisible()

//  Context 2 code
    const context2:BrowserContext=await browser.newContext();
    const page2:Page= await context2.newPage()

    await page2.goto('https://www.saucedemo.com/');
    const username2:Locator=await page2.locator('[id="user-name"]')
    const password2:Locator=await page2.locator('[id="password"]')
    const login2:Locator=await page2.locator('[id="login-button"]')


    await username2.fill("problem_user")
    await password2.fill("secret_sauce")
    await login2.click()
    await expect(page2.getByText('Products')).toBeVisible()
//  To verif session isolation
    const storage1 = await context1.storageState();
    const storage2 = await context2.storageState();

    expect(storage1.cookies).not.toEqual(storage2.cookies);
    // browser.close()
})    









