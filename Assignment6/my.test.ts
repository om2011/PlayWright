import {test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test';
import {webkit,chromium,firefox} from 'playwright';

test('chaining selector',async ()=>{
    const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
    const page:Page=await browser.newPage();
    await page.goto('https://www.saucedemo.com')
    // Chaining selectors
    const username:Locator = await page.locator('div.form_group >> input#user-name')
    // visibility of a nested element
    await username.fill("standard_user")
    await expect(username).toBeVisible()
    // Chaining Locators
    const password:Locator=await page.locator('form').locator('id=password')
    // visibility of a nested element
    await expect(password).toBeVisible()
    await password.fill("secret_sauce")

    // Click a button
    const submit:Locator =await page.locator('form').locator('id=login-button')
    // visibility of a nested element
    await expect(submit).toBeVisible()
    await submit.click()
    
    
    await page.waitForTimeout(3000)
})