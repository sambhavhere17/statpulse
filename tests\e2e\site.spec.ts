import { expect, test } from "@playwright/test";

test("home, navigation, and dashboard demo are usable", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Turn Your Business Data Into Your Next/i })).toBeVisible();
  await expect(page.getByText("Demo Data", { exact: true }).first()).toBeVisible();
  await page.getByRole("link", { name: /Live Dashboard Demo/i }).click();
  await expect(page.getByRole("heading", { name: /Explore a sample business dashboard/i })).toBeVisible();
  await page.getByRole("tab", { name: "Marketing Performance" }).click();
  await expect(page.getByText("Attributed Revenue", { exact: true })).toBeVisible();
  await page.getByLabel("Date range").selectOption("3");
  await expect(page.getByLabel("Date range")).toHaveValue("3");
});

test("contact form reports an unconfigured backend instead of false success", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("Name *").fill("Test User");
  await page.getByLabel("Email *").fill("test@example.com");
  await page.getByLabel("Message *").fill("This is a test enquiry for the StatPulse contact form.");
  await page.waitForTimeout(2600);
  await page.getByRole("button", { name: /Send Message/i }).click();
  await expect(page.getByRole("alert")).toContainText(/not configured|couldn’t save|couldn’t reach/i);
  await expect(page.getByText(/Your enquiry has been saved/i)).toHaveCount(0);
});

test("admin lead inbox requires sign-in", async ({ page }) => {
  await page.goto("/admin/leads");
  await expect(page).toHaveURL(/\\/admin\\/login/);
});
