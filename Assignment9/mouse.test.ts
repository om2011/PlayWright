import { BrowserContext,expect, chromium, Page, test ,Locator} from '@playwright/test'

test('mouse click',async()=>{
    const browser: BrowserContext = await chromium.launchPersistentContext('', { headless: false, channel: 'chrome' })
    const page: Page = await browser.newPage()
    await page.goto('https://www.bigbasket.com/')

    // Single Click: Click a button to trigger an action.
    const button:Locator =await page.getByText('Add').first()
    await button.click()

    const label = await page.locator('span.Label-sc-15v1nk5-0.CtaOnDeck___StyledLabel-sc-orwifk-11.gJxZPQ.ezEGzY').first();
    await label.waitFor();
    const labelText = await label.innerText();
    await expect(labelText).toBe('1')

    // Double Click
    const button1:Locator=await page.locator('[id="headlessui-menu-button-:R5bab6:"]')
    await button1.dblclick()

    // Right Click
    const right:Locator=await page.getByText('Tea').first()
    await right.click({button:'right'})

    // Mouse Hover
    await right.hover()

    // Shift + Click
    await right.click({ modifiers: ['Shift'] })

    await page.waitForTimeout(3000)

})