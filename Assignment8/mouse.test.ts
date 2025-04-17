import { BrowserContext, chromium, Page, test } from '@playwright/test'

test('move item', async ({ }) => {
    const browserC: BrowserContext = await chromium.launchPersistentContext('', { headless: false, channel: 'chrome' })
    const page: Page = await browserC.newPage()

   
        await page.goto("https://www.bigbasket.com/");

        const btn = await page.locator('span:has-text("Category")');
        await btn.last().click();

        await page.getByText('Beverages').last().click();

        await page.getByText('Tea').last().click();

        await page.getByText('Tea').last().hover();

        const grrenTeaLink = await page.locator('#side-menu-category-navigation').getByRole('link', { name: 'Green Tea' });
        await grrenTeaLink.last().click();
    

})
