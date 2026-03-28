import { test } from "@playwright/test";
test("Navigate to URL of TestBlog page and fill", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name =  page.locator('//input[@placeholder="Enter Name"]'); // basic xpath
    const isnameVisible= await name.isVisible();
    console.log(isnameVisible, "-name field is visible");
    console.log(await name.isEnabled(), "-name field is enabled");
    console.log(await name.isEditable(), "-name field is editable");
    await name.fill("priya");
    const email= page.locator('//input[contains(@id,"email")]'); // contains with attribute name
    await email.fill("priya@gmail.com");
    const phone = await page.locator("//label[text()='Phone:']").isVisible(); // xpath with text
    console.log(phone, "-phone field is visible");
    await page.locator('(//input[@type="text"])[3]').fill("1234567890"); //xpath with index
    const labelAddress= await page.locator("//label[text()='Address:']").fill("Chennai"); // contains text
    await page.waitForTimeout(5000);
});
