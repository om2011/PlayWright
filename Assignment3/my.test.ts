import {test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test';
import {webkit,chromium,firefox} from 'playwright';

test('locators',async()=>{
    const browser:Browser =await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();
    await page.goto('https://www.saucedemo.com/')

    // Text Locator
    const title:Locator= await page.locator('text=Swag Labs')
    const titleExist=await title.isEnabled();
    console.log(titleExist)
    // XPath Locator
    const xTitle:Locator= await page.locator('xpath=//*[@id="root"]/div/div[1]')
    const xTitleExist=await title.isEnabled();
    console.log(xTitleExist)
     // Class Locator
     const CTitle:Locator=await page.locator('.login_logo')
     const CTitleExist=await CTitle.isEnabled()
     console.log(CTitleExist) 
    // Data Test Id Locator
    const credentials:Locator =await page.getByTestId('login-credentials');
    const credentialsExist =await credentials.isEnabled()
    console.log(credentialsExist)
    // Id Locator
    const username:Locator=await page.locator('id=user-name')
    await username.fill('standard_user')
   
    const password:Locator=await page.locator('id=password')
    await password.fill('secret_sauce')
    // CSS Locator
    const submit:Locator=await page.locator('#login-button')
    await submit.click()
    

    // await new Promise(()=>{})
})
