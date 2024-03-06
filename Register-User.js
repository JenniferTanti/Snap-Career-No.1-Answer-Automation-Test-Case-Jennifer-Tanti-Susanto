const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function RegisterUser() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        
        //Note: Make sure to Zoom Out manually until 67%, to prevent from ElementClickInterceptedError

        //Register as Candidate (as example. Due to confidential, Company section will not implement here)
        await driver.findElement(By.id(('registerBtn'))).click();
        await driver.findElement(By.xpath('//*[@id="btnnavbar"]/div[1]/div/a[1]')).click();
    
        //First Name (Name will be only one component in Company Section)
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[1]/div[1]/input')).sendKeys('Jennifer');
        
        //Middle Name
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[1]/div[2]/input')).sendKeys('Tanti');

        //Last Name
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[1]/div[3]/input')).sendKeys('Susanto');

        //Email
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[2]/div[1]/input')).sendKeys('jennifertantisusanto@gmail.com');

        //Password
        await driver.findElement(By.id('password')).sendKeys('J3nn!Sus@');

        //Confirmation Password
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[2]/div[3]/div/input')).sendKeys('J3nn!Sus@');

        //This is Absolute Xpath method
        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[2]/div/div[1]/div[1]/form/div/div[3]/label/input')).click();
        
        //This is Relative Xpath method
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[4]/label/input')).click();

        //Captcha (Note: It won't used if you always check and refresh, so it should use manual instead)
        await driver.sleep(60000);
        //await driver.findElement(By.xpath('/html/body/div[2]/div[3]/div[1]/div/div/span')).click();

        
        //Click Register
        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[2]/div/div[1]/div[1]/form/div/div[6]/button')).click();
        //Register successful, then redirect to Login (unless Registered Users wants to Register again)
        await driver.sleep(10000);
    } catch(e) {
        console.log(e);
    } finally {
        //await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
RegisterUser();