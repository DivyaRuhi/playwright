//gotoMethod

import { test } from "@playwright/test";
test("Navigate to URL of Insta", async({page})=>{
    await page.goto("https://www.instagram.com/");
    await page.waitForTimeout(5000);
}); 

test.only("Navigate to URL of TestBlog", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#name").fill("priya");
    await page.locator('.form-control[placeholder="Enter EMail"]#email').type("priya@gmail.com");
    await page.locator('[placeholder="Enter Phone"]').fill("1234567890");
    await page.waitForTimeout(5000);

});

test("Navigate to URL of TestBlog & search", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const name =  page.locator('//input[@placeholder="Enter Name"]');
    await name.fill("priya");
    await page.waitForTimeout(5000);

});


