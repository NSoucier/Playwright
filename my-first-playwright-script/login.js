const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://danube-webshop.herokuapp.com/')

    await page.click('#login')
    await page.type('#n-email', 'user@email.com')
    await page.type('#n-password2', 'supersecure1')

    await page.click('#goto-signin-btn')

    await page.waitForSelector('#login-message', { state: 'visible' })
    await browser.close();

})()