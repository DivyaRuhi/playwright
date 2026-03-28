import { test, expect } from "@playwright/test";
test("shadow DOM", async ({page})=>{
await page.goto("https://selectorshub.com/xpath-practice-page/");

await page.locator('[id="kils"]').fill("Divya");
await page.getByPlaceholder("Enter pizza name").fill("Veg pizza");
await page.waitForTimeout(5000);
await page.locator('[id="training"]').fill("Tester");
await page.getByPlaceholder("enter password").fill("div@123");
await page.waitForTimeout(3000);
})