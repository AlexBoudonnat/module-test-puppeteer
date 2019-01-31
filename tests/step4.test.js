const timeout = 15000;

// test d'un raccourcisseur d'URL
describe("Step 4", () => {
    let page;

    test('log in', async () => {
        await page.goto('http://polr.alwaysdata.net');
        await page.waitForSelector('.dropdown-toggle');
        await page.$eval( '.dropdown-toggle', el => el.click() );
        await page.waitForSelector('.login-form-field:first-of-type');
        await page.type('.login-form-field:first-of-type', 'alex');
        await page.waitForSelector('.login-form-field:nth-of-type(2)');
        await page.type('.login-form-field:nth-of-type(2)', '1234');
        await page.screenshot({path: './tests/img/login1.png'});
        await page.waitForSelector('.login-form-submit');
        await page.$eval( '.login-form-submit', el => el.click() );
        await page.waitForSelector('.dropdown-toggle');
        await page.$eval( '.dropdown-toggle', el => el.click() );
        await page.waitForSelector('.dropdown-toggle.login-name');
        await page.$eval( '.dropdown-toggle.login-name', el => el.click() );
        await page.screenshot({path: './tests/img/login2.png'});
        // await page.waitForSelector('#link-availability-status');
        // const val = await page.$eval('#link-availability-status span', el => el.textContent);
        // console.log(val);
        // expect(val).toMatch(" Already in use");
        // await page.screenshot({path: './tests/img/shorten4.png'});
    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
