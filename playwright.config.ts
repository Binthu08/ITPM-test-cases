import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html'], ['json', { outputFile: 'test-results.json' }]],
  use: {
    baseURL: 'https://tamil.changathi.com/',
    headless: false,
    video: 'on',                    // ← VIDEOS ALWAYS!
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    launchOptions: { slowMo: 300 },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});