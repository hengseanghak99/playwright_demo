import { test, expect } from '@playwright/test';
//const test = '';

test('Mock user', async ({ page }) => {
    // Intercept API request and provide a fake response
    await page.route('https://seanghaktest.free.beeceptor.com/api/employees', async route => {
        const fakeResponse = [
            { id: 1, name: "Alice Smith", position: "Software Engineer" },
            { id: 2, name: "Bob Johnson", position: "QA Tester" },
            { id: 3, name: "Charlie Lee", position: "Project Manager" },
            { id: 4, name: "Diana Moore", position: "UX Designer" },
            { id: 5, name: "Ethan Brown", position: "DevOps Engineer" },
          ];
        await route.fulfill({
            json: fakeResponse
        });
    });

    // Go to the page where the ETH price is displayed
   await page.goto('http://localhost:3000');
    await page.waitForURL('http://localhost:3000/testest');
});

