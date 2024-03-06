const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function ApplyJobsLogon() {
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
        
        //Click Search Jobs
        await driver.sleep(3000);
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[2]/a'))).click();

        //Put the Job
        await driver.sleep(2000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[2]/div[1]/input')).sendKeys('QA');

        await driver.sleep(3000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[1]/div/form/div[4]/button[1]')).click();
        
        //Select the Job that want to Apply
        await driver.sleep(2000);
        //QA Tester as the Example
        await driver.findElement(By.xpath('/html/body/div[1]/div/div[2]/div/div[3]/ul[1]/li/div/div[2]/h3/a')).click();
        
        //Click "Apply Jobs"
        await driver.sleep(3000);
        await driver.findElement(By.className('btn apply')).click();
        
        //Click "Apply on Job" if without adding CV and Desc
        await driver.sleep(3000);
        await driver.findElement(By.className('btn btnsubmit btn-theme')).click();
        await driver.sleep(3000);
        await driver.getTitle('The cv id field is required.');
        //Add CV
        await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div/div/form/div/div[1]/div/div[1]/div/span[1]/span[1]/span/span[1]')).click();
        await driver.sleep(3000);
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li')).click();

        await driver.sleep(3000);
        await driver.findElement(By.id('description')).sendKeys('Testing 12345');
        await driver.sleep(3000);
        
        //Click Apply on Job, and then redirect to applied jobs
        await driver.findElement(By.className('btn btnsubmit btn-theme')).click();
        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
ApplyJobsLogon();