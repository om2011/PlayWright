import {test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test';
import {webkit,chromium,firefox} from 'playwright';

test('no incoginato test',async ()=>{
    const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
    const pages=browser.pages();

    const page:Page = pages[0]
    await page.goto('https://www.saucedemo.com')
    // verify the page loads successfully
    expect(page.url()).toBe('https://www.saucedemo.com/');
    const username:Locator=await page.locator('[id="user-name"]')
    const password:Locator=await page.locator('[id="password"]')
    const login:Locator=await page.locator('[id="login-button"]')


    await username.fill("standard_user")
    await password.fill("secret_sauce")
    await login.click()
    await expect(page.getByText('Products')).toBeVisible()
    // Store session data in a specific folder instead of a temporary directory.
    await browser.storageState({path:'Assignment5/Session'})

    const browser1:BrowserContext=await firefox.launchPersistentContext('',{headless:false})
    const page1:Page =await browser1.newPage()
    await page1.goto(' https://www.saucedemo.com')
    expect(page1.url()).toBe('https://www.saucedemo.com/');



})