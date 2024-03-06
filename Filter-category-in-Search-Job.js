const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function FilterJobCategory() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        
        //Click Search Jobs
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[2]/a'))).click();

        
        //Select State that you like
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[1]/div[2]/span/select')).click();
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[1]/div[2]/span/select/option[7]')).click();//Jakarta
        
        //Put the Job
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[2]/div[1]/input')).sendKeys('Admin');
        
        //Put Salary
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[2]/div[3]/input')).sendKeys('5000000');

        //Select Position
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[3]/div[1]/span/span[1]/span/span[1]')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[3]')).click(); //Freelance
        
        // Select Company
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[3]/div[2]/span/span[1]/span')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[1]/input')).sendKeys('Snap');
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[1]')).click(); //Snap Innovations

        //Click Search Jobs
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[4]/button[1]')).click();
        
        await driver.sleep(4000);
        
        //Click Reset Filter if needed (Depends on the user)
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[4]/button[2]')).click();
        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
FilterJobCategory();