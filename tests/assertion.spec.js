
import { test, expect } from "@playwright/test";
test("Assertion", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle("Automation Testing Practice");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
    //expect(page.url().toContain("automation"));
    const header = await page.getByText("Automation Testing Practice").isVisible();
    await expect(page.getByText("Automation Testing Practice")).toBeVisible();
    console.log(header);
    
    let name= expect(page.getByLabel("Name:").isVisible());
    console.log(name);
    await expect(page.getByText("Name:")).toBeVisible();
    await page.getByPlaceholder("Enter Name").fill("priya");
    await expect(page.getByPlaceholder("Enter Name")).toBeEditable();
    await page.getByRole("textbox", {name:"Address:"}).fill("Anna Nagar");
    await expect(page.getByLabel("Address:")).toHaveValue("Anna Nagar");
    
    //checkbox

    await page.getByRole("checkbox", {name: "Monday"}).check();
    await expect(page.getByRole("checkbox", {name: "Monday"})).toBeChecked();
    await expect(page.getByRole("checkbox", {name: "Wednesday"})).not.toBeChecked();
    await page.getByRole("radio",{name: "Male", exact:true}).check();
    await expect(page.getByRole("radio",{name: "Male", exact:true})).toBeChecked();
    await page.getByRole("radio",{name: "Female", exact:true}).check();
    await expect(page.getByRole("radio",{name: "Male", exact:true})).not.toBeChecked();
    await page.waitForTimeout(5000);
})