const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function RegisterMandatoryComponentsempty() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');

        //Note: Make sure to Zoom Out manually until 67%, to prevent from ElementClickInterceptedError
        
        //Register as Candidate (as example. Due to confidential, Company section will not implement here)
        await driver.findElement(By.id(('registerBtn'))).click();
        await driver.findElement(By.xpath('//*[@id="btnnavbar"]/div[1]/div/a[1]')).click();
    
        //First Name (Component empty)
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[1]/div[1]/input')).sendKeys('');
        
        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[2]/div/div[1]/div[1]/form/div/div[6]/button')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[1]/div[1]/input')).sendKeys('test');

        //Last Name (Component Empty)
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[1]/div[3]/input')).sendKeys('');

        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[2]/div/div[1]/div[1]/form/div/div[6]/button')).click();
        await driver.sleep(2000);
        
        
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[1]/div[3]/input')).sendKeys('124');
        
        //Email
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[2]/div[1]/input')).sendKeys('');

        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[2]/div/div[1]/div[1]/form/div/div[6]/button')).click();
        await driver.sleep(2000);
        
        
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[2]/div[1]/input')).sendKeys('jenni@gmail.com');

        //Password
        await driver.findElement(By.id('password')).sendKeys('');

        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[2]/div/div[1]/div[1]/form/div/div[6]/button')).click();
        
        await driver.sleep(2000);
        await driver.findElement(By.id('password')).sendKeys('Test@124');

        //Confirmation Password
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[2]/div[3]/div/input')).sendKeys('');
        
        await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div[2]/div/div[1]/div[1]/form/div/div[6]/button')).click();
    
        await driver.sleep(2000);
        await driver.findElement(By.xpath('//*[@id="candidate"]/form/div/div[2]/div[3]/div/input')).sendKeys('Test@124');
        await driver.sleep(2000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
RegisterMandatoryComponentsempty();