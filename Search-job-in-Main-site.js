const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function SearchJobs() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        //Note: Make sure to Zoom Out manually until 67%, to prevent from ElementClickInterceptedError
        //Search the Job that you want
        await driver.findElement(By.id(('search_desktop'))).sendKeys('QA');


        //Select State that you like
        await driver.findElement(By.id('select2-state_id-container')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[3]')).click();//Banten
        

        //Click to Search it
        await driver.findElement(By.id('search_btn')).click();

        await driver.findElement(By.className('box-job-top-class box-button-job more-less-job box-job-more-less')).click();
        
        //Job that you searched can be displayed correctly
        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
SearchJobs();