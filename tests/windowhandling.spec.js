import { test, expect } from "@playwright/test";
test ("Window Handling", async({context, page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const [newpage]= await Promise.all([context.waitForEvent("page"),
    await page.locator("//button[text()='New Tab']").click(),
    ]);
console.log(newpage.url(), newpage.title());
   await expect(page).toHaveTitle("Automation Testing Practice");
   await expect(newpage).toHaveTitle("SDET-QA Blog");
await newpage.locator('[title="search"][name="q"]').fill("QA Test");
await newpage.waitForTimeout(3000);
await page.getByPlaceholder("Enter Name").fill("Divya");
await page.bringToFront();
await page.waitForTimeout(5000);
})