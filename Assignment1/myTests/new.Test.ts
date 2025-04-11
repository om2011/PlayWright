import {test,expect,Browser,Page,Locator} from '@playwright/test';
import {webkit,chromium,firefox} from 'playwright';

test('login test',async({page},testInfo)=>{
    // const browser:Browser =await firefox.launch({headless:false})
    // const page:Page= await browser.newPage()
    await page.goto('https://www.saucedemo.com/');
    const username:Locator=await page.locator('[id="user-name"]')
    const password:Locator=await page.locator('[id="password"]')
    const login:Locator=await page.locator('[id="login-button"]')


    await username.fill("standard_user")
    await password.fill("secret_sauce")
    await login.click()
    await expect(page.getByText('Products')).toBeVisible()
    await page.screenshot({ path: `screenshot-${testInfo.project.name}.png` });
    
});