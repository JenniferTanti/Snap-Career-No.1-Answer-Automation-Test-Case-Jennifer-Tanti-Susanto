const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function UpdateProfilesEmptyComponent() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        //Note: Make sure to Zoom Out manually until 67%, to prevent from ElementClickInterceptedError
        
        //Login as Candidate (as example. Due to confidential, Company section will not implement here)
        await driver.findElement(By.id(('loginBtn'))).click();
        await driver.findElement(By.xpath('/html/body/nav/div/div/ul[1]/li[6]/div/div[2]/div/a[1]')).click();
    
        //Email
        await driver.findElement(By.id('email')).sendKeys('jennifertantisusanto@gmail.com');
        
        //Password
        await driver.findElement(By.xpath('/html/body/section/div/div/div[2]/div/div/div[1]/form/div/div[2]/div/input')).sendKeys('J3nn1Sus');

        //Click Login
        await driver.findElement(By.xpath('/html/body/section/div/div/div[2]/div/div/div[1]/form/div/button')).click();
        
        //Select Profile
        await driver.findElement(By.xpath('/html/body/nav[2]/div/div/ul/li[2]/a')).click();
        await driver.sleep(4000);
        
        //Click Profile Informations
        await driver.findElement(By.xpath('/html/body/nav[2]/div/div/ul/li[2]/div/a[1]')).click();
        await driver.sleep(4000);

        //Country
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[3]/div/div[2]/div/span/span[1]/span/span[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li')).click();
        await driver.sleep(8000);

        //State
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[4]/div/div[1]/div/span/span/span[1]/span/span[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[3]')).click();
        await driver.sleep(8000);

        //City
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[4]/div/div[2]/div/span/span/span[1]/span/span[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[4]')).click();
        await driver.sleep(8000);

        //Marital Status
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[3]/div/div[1]/div/span/span[1]/span/span[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[2]')).click();
        await driver.sleep(8000);


        //Gender
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[2]/div/div[2]/div/span/span[1]/span/span[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[1]')).click();
        await driver.sleep(8000);

        //Date
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[5]/div/div[2]/div/input')).clear();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[5]/div/div[2]/div/input')).sendKeys('06/26/1997');
        await driver.sleep(8000);

        //WA Country Code
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[6]/div/div[2]/div/div[1]/div/span/span[1]/span/span[1]')).click();
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li')).click(); //Indonesia
        await driver.sleep(8000);
        
        //WA Number
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[6]/div/div[2]/div/div[2]/div/input')).clear();
        await driver.sleep(8000);

        //Click to Update Profile, then Error Message below empty components appears
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/form/div/div[2]/div/div[11]/div/div[2]/div/button')).click();
        await driver.sleep(8000);
    } catch(e) {
        console.log(e);
    } finally {
        //await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
UpdateProfilesEmptyComponent();