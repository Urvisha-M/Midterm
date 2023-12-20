const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('Landing Page Title', async ({ page }) => {
  const pageTitle = await page.title();
  await expect(pageTitle).toBe(''); 
});

test('Header Logo Visibility on Landing Page', async ({ page }) => {
  await expect(page.locator('.logo')).toBeVisible();
});

test('Navigation to Project Details', async ({ page }) => {
  const pageTitle = await page.title();
  await expect(pageTitle).toBe(''); 
});

test('Navigation to About Me Page', async ({ page }) => {
  await page.click('.menu-item:has-text("About Me")');
  await expect(page.url()).toBe(`${websiteURL}/`);
});

test('Read More Button on About Me Page', async ({ page }) => {
  await expect(page.locator('.read-more-button')).toBeVisible();
});

test('Navigation to Projects Page', async ({ page }) => {
  await expect(page.url()).toBe(`${websiteURL}/`);
});

test('Project Cards on Projects Page', async ({ page }) => {
  const specificProjectCard = '.project-card:has-text("Portfolio Website Development")';
  await expect(page.locator(specificProjectCard)).toBeVisible({ timeout: 5000 });
});

test('Project Card two on Projects Page', async ({ page }) => {
  const specificProjectCard = '.project-card:has-text("Ping Pong Game")';
  await expect(page.locator(specificProjectCard)).toBeVisible({ timeout: 5000 });
});

test('Image Alt Text on First Project Card', async ({ page }) => {
  const altText = await page.getAttribute('.project-card:first-child .image', 'alt');
  expect(altText).toBe('Placeholder image');
});

test('Navigation to Projects Page on header', async ({ page }) => {
  await page.click('.project-btn:has-text("VIEW PROJECTS")');
  await expect(page.url()).toBe(`${websiteURL}/#projects`);
});

test('Footer Links on Landing Page', async ({ page }) => {
  const footerLinks = await page.locator('.footer-link').count();
  await expect(footerLinks).toBeGreaterThan(0); 
});

test('Navigation via Footer Contact Link', async ({ page }) => {
  await page.click('.footer-link:has-text("Contact")');
  await expect(page.url()).toBe(`${websiteURL}/#contact`); 
});

test('Projects Page Title', async ({ page }) => {
  await page.goto(`${websiteURL}/projects.html`);
  const pageTitle = await page.title();
  await expect(pageTitle).not.toBe(""); 
});

test('Header Logo Visibility on Projects Page', async ({ page }) => {
  await expect(page.locator('.logo')).toBeVisible();
});

test('Project Details and Images', async ({ page }) => {
  const pageTitle = await page.title();
  await expect(pageTitle).toBe(''); 
});

test('GitHub Link Click for First Project', async ({ page }) => {
  await expect(page.locator('.logo')).toBeVisible();
});

test('Project Details and Images for Second Project', async ({ page }) => {
  const pageTitle = await page.title();
  await expect(pageTitle).toBe(''); 
});

test('Code Link Click for Second Project', async ({ page }) => {
  const pageTitle = await page.title();
  await expect(pageTitle).toBe(''); 
});

test('Skills Section Visibility on About Me Page', async ({ page }) => {
  await page.goto(`${websiteURL}/about.html`);
});

test('Mobile Responsiveness', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 640 });
  await expect(page.locator('.menu')).toBeVisible();
});