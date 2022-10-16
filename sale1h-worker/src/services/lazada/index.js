const browserObject = require('../../common/browser.js');

async function readData(){
	let browser;
	try{
		browser = await browserObject.startBrowser();
        let   page = await browser.newPage();
        await page.setViewport({
            width: 1366,
            height: 768,
        });

        // await page.setRequestInterception(true);
        // page.on('response', (response) => {
        //     console.log('RESPONSE RECEIVED');
        //     console.log(response.status() + ' ' + response.url());
        // });
        // page.on('request', request => {
        //     console.log('INTERCEPTED: ' + request.url());
        //     request.continue();
        // });

        page.on("response", async (response) => {
            const headers = response.headers();
            if(headers['content-type'] && headers['content-type'].indexOf('application/json') >=0)
            {
                var uri = response.url();
                    try{
                        let contentJson =await response.json();
                        console.log("kết quả",contentJson);
                    }catch(e){
                    
                    
                }
                
                
            }
        });

		await page.goto('https://shopee.vn/flash_sale',{
            waitUntil: "load",
            timeout: 0
        });
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = {
    readData
};