import { expect, test } from "@playwright/test";

test("home and navigation are usable", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Turn Your Business Data Into Your Next/i })).toBeVisible();
  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page.getByRole("heading", { name: /Book a Free Consultation/i })).toBeVisible();
});

test("contact form reports an unconfigured backend instead of false success", async ({ page }) => {
  await page.goto("/contact");
  await page.getByLabel("Email *").fill("test@example.com");
  await page.getByLabel("Phone number *").fill("9876543210");
  await page.waitForTimeout(2600);
  await page.getByRole("button", { name: /Send Message/i }).click();
  await expect(page.getByRole("alert")).toContainText(/not configured|couldn’t save|couldn’t reach/i);
  await expect(page.getByText(/Thanks! We'll contact you within 24 hours/i)).toHaveCount(0);
});

test("admin lead inbox requires sign-in", async ({ page }) => {
  await page.goto("/admin/leads");
  await expect(page).toHaveURL(/\\/admin\\/login/);
});
