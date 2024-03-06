const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

async function ContactsEmpty() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');

        //Note: Make sure to Zoom Out manually until 67%, to prevent from ElementClickInterceptedError

        //Click Contact Us
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[5]/a'))).click();

        //Click Submit when components are empty
        
        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();
        //await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div/div[2]/div/div/div/form/div/div[7]/button')).click();
        await driver.sleep(3000);

        //Repeat again
        //Input Full Name
        await driver.findElement(By.id('full_name')).sendKeys('Jenni');
        
        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();
        //await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div/div[2]/div/div/div/form/div/div[7]/button')).click();
        await driver.sleep(3000);
        //Input Email
        await driver.findElement(By.id('email')).sendKeys('jenni@gmail.com');

        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();
        
        //await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div/div[2]/div/div/div/form/div/div[7]/button')).click();
        await driver.sleep(3000);
        //Input Phone
        await driver.findElement(By.id('phone')).sendKeys('1234567890');
       
        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();
        //await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div/div[2]/div/div/div/form/div/div[7]/button')).click();
        await driver.sleep(3000);
        //Input Subject
        await driver.findElement(By.id('subject')).sendKeys('Testing');
        
        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();
        //await driver.findElement(By.xpath('/html/body/section/div/div/div/div/div/div[2]/div/div/div/form/div/div[7]/button')).click();
        await driver.sleep(3000);
        //Input Message
        await driver.findElement(By.id('message_txt')).sendKeys('Testing123');

        //The End
        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
ContactsEmpty();