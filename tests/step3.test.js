const timeout = 15000;

// test d'un raccourcisseur d'URL
describe("Step 3", () => {
    let page;

    test('custom shorten', async () => {
        await page.goto('http://polr.alwaysdata.net');
        await page.waitForSelector('.long-link-input');
        await page.type('.long-link-input', 'https://www.google.com/search?rlz=1C1CHBF_frFR834FR834&ei=XfpSXIyPOYGYabaHouAD&q=plus+beau+metier+du+monde&oq=plus+beau+metier+du+monde&gs_l=psy-ab.3..0l2j0i22i30l3j0i22i10i30j0i22i30l4.117347.122904..123311...1.0..0.68.1547.26......0....1..gws-wiz.......0i71j35i39j0i131j0i67.LcptFsEax8g');
        await page.waitForSelector('#show-link-options');
        await page.$eval( '#show-link-options', el => el.click() );
        await page.waitForSelector('input.custom-url-field');
        var customed = Date.now().toString();
        await page.type('input.custom-url-field', customed);
        await page.screenshot({path: './tests/img/shorten3.png'});
        await page.waitForSelector('#shorten');
        await page.$eval( '#shorten', el => el.click() );
        await page.waitForSelector('input.result-box');
        const val = await page.$eval('input.result-box', el => el.value);
        expect(val).toMatch("http://polr.alwaysdata.net/" + customed);
        await page.screenshot({path: './tests/img/shorten5.png'});
    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
