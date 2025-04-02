
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://vite-react-alpha-lemon.vercel.app/');
});

test.describe('Search Functionality', () => {
  
  test('Test the search input field for filtering the available tracks', async ({ page }) => {  

    const inputField = page.getByLabel("Search");    
    
        await expect(inputField).toBeVisible();
        
      });
  
  test('Ensure that when a user types a track name in the search box, only matching tracks are displayed', async ({ page }) => {  
        
        const inputField = page.getByLabel("Search");    
        
          await inputField.fill("summer");
          await expect(page.getByText('Summer Breeze')).toBeVisible();
      
        
  });

});

test.describe('Add Track Using "+" Button', () => {

  test.only("Test the ability to add a single track using the < + > button for a given track", async ({page}) => {
 
      await page.locator("button").nth(2).click();
      await expect(page.getByText('Your playlist')).toBeVisible();
      await expect(page.locator('#playlist').getByText('Winter Winds')).toBeVisible();    
        
  });  

});

test.describe('Verify Total Duration of the Playlist in Seconds', () => {

 

});