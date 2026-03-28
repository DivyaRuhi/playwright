
import { test, expect } from "@playwright/test";
test ("Alerts", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
//event  listener

page.on("dialog", async (alerts)=>{
    const typeofalert= alerts.type();
    console.log(`Alert type - ${typeofalert}`);
    const alertmessage= alerts.message();
    console.log(`message of alert - ${alertmessage}`);


if (alerts.type().toLowerCase()=="alert"){
await alerts.accept();
console.log("Simple Alert completed")
}else if(alerts.type().toLowerCase()=="confirm"){
    console.log("Confirm Alert Started")
    if(alerts.message()=="Press a button!"){
        await alerts.accept();
    } else {
        await alerts.dismiss();
    }
    console.log("Confirm Alert ended")

}else (alerts.type().toLowerCase()=="prompt")
{
    console.log("Prompt Alert started")
    console.log(alerts.defaultValue());
    const name="";
    if(name == "Priya"){
    await alerts.accept(name);
    }
    else
{
    await alerts.dismiss();
}
console.log("prompt Alert ended")
//await alerts.accept(); // to click ok - simple
 //await alerts.dismiss(); // to click cancel - confirm
   //await page.waitForTimeout(5000);
   //await alerts.accept("Priya");
   //await page.waitForTimeout(5000);
   //console.log(alerts.defaultValue());
   //await expect(page.locator("#demo")).toHaveText("Hello Priya! How are you today?")
}
});
await page.getByRole("button",{name: "Simple Alert"}).click();
await page.locator("#confirmBtn").waitFor({state:'attached'})
await page.locator("#confirmBtn").click();
await page.getByRole("button",{name: "Prompt Alert"}).click();
//await page.waitForTimeout(3000);
});


test.only ("Let code Modern Alerts", async ({page})=>{
await page.goto("https://letcode.in/alert");
await page.click('#modern');
const text = await page.locator('[class="title"]').innerText();
console.log(text);
await page.waitForTimeout(3000);
await page.locator('[aria-label="close"]').click();
})