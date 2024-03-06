const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function Contacts() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');

        //Note: Make sure to Zoom Out manually until 67%, to prevent from ElementClickInterceptedError
        
        //Click Contact Us
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[5]/a'))).click();

        //Input Full Name
        await driver.findElement(By.id('full_name')).sendKeys('Jenni');
        await driver.sleep(1000);
        //Input Email
        await driver.findElement(By.id('email')).sendKeys('jenni@gmail.com');
        await driver.sleep(1000);
        //Input Phone
        await driver.findElement(By.id('phone')).sendKeys('1234567890');
        await driver.sleep(1000);
        //Input Subject
        await driver.findElement(By.id('subject')).sendKeys('Testing');
        await driver.sleep(1000);
        //Input Message
        await driver.findElement(By.id('message_txt')).sendKeys('Testing123');
        
        //Note: Captcha can not use for more than one times, so you should manual input instead
        await driver.sleep(40000);
        //Click to Submit
        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();

        //Then Email has been sent to Customer Services
        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
Contacts();