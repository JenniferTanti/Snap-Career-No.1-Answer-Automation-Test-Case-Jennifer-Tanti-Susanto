const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

async function AddProfilesSpecific() {
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
        //Register successful, then redirect to Login (unless Registered Users wants to Register again)
        
        //Select Profile
        await driver.findElement(By.xpath('/html/body/nav[2]/div/div/ul/li[2]/a')).click();
        await driver.sleep(4000);
        
        //Click Skill
        await driver.findElement(By.xpath('/html/body/nav[2]/div/div/ul/li[2]/div/a[4]')).click();
        await driver.sleep(4000);

        //Click "Add Skill"
        await driver.findElement(By.className('btn-add')).click();

        //Select Your skills
        await driver.sleep(4000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[2]/form/div/div/div[1]/span[1]/span[1]/span/span[1]')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[1]/input')).sendKeys('Selenium'); //Selenium
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li')).click();

        //Select Skill's Level
        await driver.sleep(4000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[2]/form/div/div/div[2]/span[1]/span[1]/span')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[3]')).click();

        //Click Add
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[3]/button')).click();
        await driver.sleep(4000);

        //Close this Button
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[1]/button')).click();
        await driver.sleep(6000);

        /*
        //============================== Bonus: Edit Skills by click Edit Icon ==============================
        await driver.findElement(By.xpath('//*[@id="skill_7420"]/div[3]/a[1]')).click(); //Example
        
        await driver.sleep(4000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[2]/form/div/div/div[1]/span[1]/span[1]/span/span[1]')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[1]/input')).sendKeys('Katalon'); //Choose Katalon
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li')).click();

        await driver.sleep(4000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[2]/form/div/div/div[2]/span[1]/span[1]/span')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[4]')).click();

        //Click Edit button
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[3]/button')).click();
        await driver.sleep(4000);

        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[1]/button')).click();
        //============================== Bonus: Edit Skills by click Edit Icon ==============================
        */

        //Repeat steps above, but with another components, like Language (as the example), Education, Experience etc.
        await driver.findElement(By.xpath('/html/body/nav[2]/div/div/ul/li[2]/a')).click();
        await driver.sleep(4000);
        
        //Click Language
        await driver.findElement(By.xpath('/html/body/nav[2]/div/div/ul/li[2]/div/a[5]')).click();
        await driver.sleep(4000);
        
        //Click "Add Languages"
        await driver.findElement(By.className('btn-add')).click();

        //Select Your Language
        await driver.sleep(4000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[2]/form/div/div/div[1]/span[1]/span[1]/span/span[1]')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[1]/input')).sendKeys('English'); //English
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li')).click();

        //Select Language's Level
        await driver.sleep(4000);
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[2]/form/div/div/div[2]/span[1]/span[1]/span/span[1]')).click();
        await driver.findElement(By.xpath('/html/body/span/span/span[2]/ul/li[1]')).click(); //Intermediate

        //Click Add
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[3]/button')).click();
        await driver.sleep(4000);

        //Close this Button
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div[1]/button')).click();
        await driver.sleep(2000);

        await driver.sleep(5000);
    } catch(e) {
        console.log(e);
    } finally {
        //await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
AddProfilesSpecific();