const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  // test("page loads with title", async () => {
  //   await driver.get("http://localhost:8000");
  //   await driver.wait(until.titleIs("Duel Duo"), 1000);
  // });

  test('click draw button', async () => {
    await driver.get('http://localhost:8000');

    await driver.sleep(2000);
    
    await driver.findElement(By.id('draw')).click();

    await driver.sleep(2000);
  })

  test('click draw button then add a robot', async () => {
    await driver.get('http://localhost:8000');
    
    await driver.sleep(2000);
    
    await driver.findElement(By.id('draw')).click();
    
    await driver.sleep(2000);
    
    await driver.findElement(By.css('button[class*=bot-btn]')).click();
   
    await driver.sleep(2000);
  })
});