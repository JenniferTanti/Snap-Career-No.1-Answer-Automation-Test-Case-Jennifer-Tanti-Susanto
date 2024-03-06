const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function ForgotPass() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        
        //Login as Candidate (as example. Due to confidential, Company section will not implement here)
        await driver.findElement(By.id(('loginBtn'))).click();
        await driver.findElement(By.xpath('/html/body/nav/div/div/ul[1]/li[6]/div/div[2]/div/a[1]')).click();
    
        
        //Click Forgot Password
        await driver.findElement(By.className('forgot')).click();
    
        //Click if Email Address is empty
        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[1]/form/div[2]/button')).click();
       
        await driver.sleep(3000);
        await driver.findElement(By.id('email')).sendKeys('asdhas');

        //Click when Email Address in incorrect format
        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[1]/form/div[2]/button')).click();
       
        await driver.sleep(3000);
        await driver.findElement(By.id('email')).clear();
        await driver.findElement(By.id('email')).sendKeys('sss@s');

        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[1]/form/div[2]/button')).click();
       
        await driver.sleep(3000);
        await driver.findElement(By.id('email')).clear();
        await driver.findElement(By.id('email')).sendKeys('sss@ss.');

        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[1]/form/div[2]/button')).click();
       
        await driver.sleep(3000);
        await driver.findElement(By.id('email')).clear();
        await driver.findElement(By.id('email')).sendKeys('sss@ss.com');

        //Click Submit when Email Format is correct
        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[1]/form/div[2]/button')).click();
        
        await driver.sleep(7000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
ForgotPass();