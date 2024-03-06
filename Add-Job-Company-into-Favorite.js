const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function FavJobCompany() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        
        //Login as Candidate (as example. Due to confidential, Company section will not implement here)
        await driver.findElement(By.id(('loginBtn'))).click();
        await driver.findElement(By.xpath('/html/body/nav/div/div/ul[1]/li[6]/div/div[2]/div/a[1]')).click();
    
        //Email
        await driver.findElement(By.id('email')).sendKeys('jennifertantisusanto@gmail.com');
        
        //Password
        await driver.findElement(By.xpath('/html/body/section/div/div/div[2]/div/div/div[1]/form/div/div[2]/div/input')).sendKeys('J3nn1Sus');

        //Click Login
        await driver.findElement(By.xpath('/html/body/section/div/div/div[2]/div/div/div[1]/form/div/button')).click();
        await driver.sleep(4000);

        //Click Search Jobs
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[2]/a'))).click();

        //Select Jobs
        await driver.findElement(By.xpath(('/html/body/div[1]/div/div[2]/div/div[3]/ul[1]/li[2]/div/div[2]/h3/a'))).click(); //HRGA Supervisor as the example
        await driver.sleep(4000);

        //Click "Favorite", then Message Appears
        await driver.findElement(By.className('btn icon-love')).click();
        await driver.sleep(4000);
        await driver.getTitle("Job has been added in favorites list");
        
        await driver.findElement(By.xpath('/html/body/nav[2]/div/div/ul/li[5]/a')).click();
        await driver.sleep(4000);

        //Repeat steps above, but with Company
        //Click Company
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[3]/a'))).click();

        
        //Select Company that you want to add Favourite
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/section/div/div[1]/div[4]/a')).click(); //Aurora Consultant as the Example
        
        //Click Favourite
        await driver.findElement(By.className('btn icon-love')).click();
        await driver.sleep(4000);
        await driver.getTitle("Company has been added in favorites list");

        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
FavJobCompany();