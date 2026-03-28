import { test, expect } from "@playwright/test";
test("Dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");
    await expect.soft(page).toHaveURL(/testautomationpracti/);
//select dropdown with different methods
    await page.locator("#country").scrollIntoViewIfNeeded();
    await page.locator("#country").selectOption({value:"france"});
   // await page.waitForTimeout(3000);
    await page.locator("#country").selectOption({label:"Japan"});
    //await page.waitForTimeout(3000);
    await page.locator("#country").selectOption({index:7});
    //await page.waitForTimeout(3000);
    await expect (page.locator("#country")).toHaveValue("china");
     await page.waitForTimeout(3000);
    const selectedText= await page.locator("#country option:checked").innerText();
    console.log(selectedText);
    console.log(await page.locator("#country option").count());
    expect (await page.locator("#country option").count()).toEqual(10);
    const textnotselected = await page.locator("#country option:not(:checked)").allInnerTexts();
    console.log(textnotselected);

    for(let c of textnotselected){
        console.log(c);
    }
})