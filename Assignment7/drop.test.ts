import {test,expect,Browser,Page,Locator,BrowserContext} from '@playwright/test';
import {webkit,chromium,firefox} from 'playwright';

test('drop down test',async()=>{
    const browser:BrowserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'})
    const page:Page=await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PALI')

    // Locate a dropdown (<select> tag) using its ID or other attributes.
    // Select an option using the value attribute.
    const Afghanistan=await page.selectOption('select#Contact_CountryCode',{value:'AF'})
    // Select an option using the visible text (label).
    await page.selectOption('select#Contact_CountryCode',{label:'Australia'})
    // Select an option using the index.
    await page.selectOption('select#Contact_CountryCode',{index:10})
    // Retrieve and print all available options from the dropdown.
    const allOptions=await page.$$('select#Contact_CountryCode > option')
    console.log(allOptions)
    console.log(Afghanistan)
    // Implement conditional selection based on option text 
    for(const e of allOptions){
        const text=await e.textContent();
        console.log(text)
        if(text==='India'){
            await page.selectOption('select#Contact_CountryCode',{label:text})
            break;
        }
    }

    await page.waitForTimeout(3000)
})