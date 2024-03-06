const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

async function ContactsIncorrectFormat() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        await driver.get('https://www.snap.careers');
        
        //Note: Make sure to Zoom Out manually until 67%, to prevent from ElementClickInterceptedError
        
        //Click Contact Us
        await driver.findElement(By.xpath(('/html/body/nav/div/div/ul[1]/li[5]/a'))).click();

        //Pre-requisite: Input Full Name, subject and Message first
        await driver.findElement(By.id('full_name')).sendKeys('Jenni');
        await driver.findElement(By.id('subject')).sendKeys('Testing');
        await driver.findElement(By.id('message_txt')).sendKeys('Testing123');
        
        //Input Email with incorrect Format
        await driver.findElement(By.id('email')).sendKeys('asda@asda');

        //Input Phone with Incorrect Format
        await driver.findElement(By.id('phone')).sendKeys('esys123');

        //Click Submit Now (Note: Captcha won't use Automation Method.)
        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();
        await driver.sleep(3000);

        //Repeat again
        await driver.findElement(By.id('email')).clear();
        await driver.findElement(By.id('email')).sendKeys('asda');
        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();
        await driver.sleep(3000);

        await driver.findElement(By.id('email')).clear();
        await driver.findElement(By.id('email')).sendKeys('asda@asda.com');
        await driver.findElement(By.xpath('//*[@class="btn btn-theme border-radius-0" and @id="submit"]')).click();


        //The End
        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
ContactsIncorrectFormat();