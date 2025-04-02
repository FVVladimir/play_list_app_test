
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://vite-react-alpha-lemon.vercel.app/');
});

test.describe('Search Functionality', () => {
  
  test('Test the search input field for filtering the available tracks', async ({ page }) => {  

    const inputField = page.getByLabel("Search");    
    
        await expect(inputField).toBeVisible();
        await inputField.fill("summer");
        await expect(page.getByText('Summer Breeze')).toBeVisible();
        
  });

});

test.describe('Add Track Using "+" Button', () => {

  

});

test.describe('Verify Total Duration of the Playlist in Seconds', () => {

 

});