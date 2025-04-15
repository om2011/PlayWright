import {test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test';
import {webkit,chromium,firefox} from 'playwright';

test('roles selector',async ()=>{
    const browser:Browser =await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();
    await page.goto('https://profile.w3schools.com/signup?redirect_url=https%3A%2F%2Fwww.w3schools.com%2F')

    await expect(page.getByRole('heading', { name: 'Sign Up' })).toBeVisible(); 

    await expect(page.getByRole('checkbox')).toBeChecked()

    const link= await page.getByRole('link',{name:'Learn more here!'})
    await expect(link).toBeVisible();

    const button = await page.getByRole('button',{name:'Google'}) 
    await button.click()
    const currentUrl = page.url();
    await expect(currentUrl).toContain('https://accounts.google.com/')
})