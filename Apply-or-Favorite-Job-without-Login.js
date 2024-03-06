const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function JobApplyFav() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        
        //Click Search Jobs
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[2]/a'))).click();

        
        //Select the Job that want to Apply
        await driver.sleep(2000);
        //Audit Internal as the Example
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[3]/ul[1]/li[1]/div/div[2]/h3/a')).click();
        
        //Click "Apply Jobs"
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[2]/a[1]')).click();
        
        //Result: Redirect to Login

        //Repeat: When you add Favorite Jobs
        //Click Search Jobs
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[2]/a'))).click();

        
        //Select the Job that want to Apply
        await driver.sleep(2000);
        //Audit Internal as the Example
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[3]/ul[1]/li[1]/div/div[2]/h3/a')).click();
        
        //Click "Favorite", then Redirect to Login
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[1]/div[1]/div[2]/a[3]')).click();
        await driver.sleep(4000);
        

    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
JobApplyFav();