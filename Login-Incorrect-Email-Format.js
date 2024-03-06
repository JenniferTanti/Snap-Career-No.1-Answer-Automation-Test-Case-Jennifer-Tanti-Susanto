const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function LoginEmailIncorrect() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        
        //Login as Candidate (as example. Due to confidential, Company section will not implement here)
        await driver.findElement(By.id(('loginBtn'))).click();
        await driver.findElement(By.xpath('/html/body/nav/div/div/ul[1]/li[6]/div/div[2]/div/a[1]')).click();
    
        //Email with Incorrect Format
        await driver.findElement(By.id('email')).sendKeys('asda@asda');
    
        //Click Login
        await driver.findElement(By.xpath('/html/body/section/div/div/div[2]/div/div/div[1]/form/div/button')).click();
        
        //Email with Incorrect Format (Repeat)
        await driver.sleep(3000);
        await driver.findElement(By.id('email')).clear();
        await driver.findElement(By.id('email')).sendKeys('test123');

        await driver.sleep(3000);
        await driver.findElement(By.xpath('/html/body/section/div/div/div[2]/div/div/div[1]/form/div/button')).click();

        await driver.sleep(3000);
        await driver.findElement(By.id('email')).clear();
        await driver.findElement(By.id('email')).sendKeys('test123@test.com');
        
        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
LoginEmailIncorrect();