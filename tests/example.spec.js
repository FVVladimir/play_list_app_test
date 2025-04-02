
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://vite-react-alpha-lemon.vercel.app/');
});



test.describe('Search Functionality', () => {

  // test('has title', async ({ page }) => {
    
  //   await page.goto('https://vite-react-alpha-lemon.vercel.app/');
  
  //   // Expect a title "to contain" a substring.
  //   await expect(page).toHaveTitle(/Playwright/);
  // });
  
  test('get started link', async ({ page }) => {
  
    // Click the get started link.
    // await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

});
// test.describe('Add Track Using "+" Button', () => {

//   test('has title', async ({ page }) => {
//     await page.goto('https://vite-react-alpha-lemon.vercel.app/');
  
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Playwright/);
//   });
  
//   test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
  
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
  
//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//   });

// });
// test.describe('Verify Total Duration of the Playlist in Seconds', () => {

//   test('has title', async ({ page }) => {
//     await page.goto('https://vite-react-alpha-lemon.vercel.app/');
  
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Playwright/);
//   });
  
//   test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
  
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
  
//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//   });

// });