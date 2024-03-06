const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function CompanyFav() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        
        //Click Company
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[3]/a'))).click();

        
        //Select Company that you want to add Favourite
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/section/div/div[1]/div[5]/a')).click(); //Mega Auto Finance as Example
        
        //Click Favourite
        await driver.findElement(By.xpath('/html/body/div[2]/div/div/div[1]/div/div/div[2]/div/div[3]/div/a[1]')).click();
        
        //Result: Redirect to Login
        await driver.sleep(4000);
        

    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
CompanyFav();