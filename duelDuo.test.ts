
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('See All Bots button is displayed', async () => {
    const botsBtn = await driver.findElement(By.id('see-all'))
    const displayed = await botsBtn.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('See All Bots button is displayed', async () => {
    const botsBtn = await driver.findElement(By.id('see-all'))
    const displayed = await botsBtn.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test(`When clicking the Draw button displays a div with id="choices"`, async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

