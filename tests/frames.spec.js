
import { test, expect } from "@playwright/test";

/*
test("Let code Frames with index", async ({page})=>{
await page.goto("https://letcode.in/frame");

const frame=await page.frames();
console.log(frame);

frame.forEach((f,i)=>{
    console.log(`index=${i} and frames= ${f.url()}`);
});

await frame[1].getByPlaceholder("Enter name").fill("Divya");
await frame[1].locator('[name="lname"]').fill("R");
await frame[6].locator('[name="email"]').fill("div@123");
await page.waitForTimeout(5000);
})
*/

test("Let code Frames", async ({page})=> {
await page.goto("https://letcode.in/frame");
const logo= await page.getByAltText("letcode").isVisible();
console.log(logo);
await page.frameLocator("#firstFr").getByPlaceholder("Enter name").fill("Divya"); 
await page.frameLocator("#firstFr").locator('[name="lname"]').fill("R");
await page.frameLocator(".ng-star-inserted").getByPlaceholder("Enter email").fill("div@123");
await page.waitForTimeout(5000);

})