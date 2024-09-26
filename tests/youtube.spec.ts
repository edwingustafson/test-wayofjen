import { test, expect } from '@playwright/test';
import { playlists, videos } from './videos';

const channel = 'https://youtube.com/@wayofjen';
const share = `${channel}/feature=shared`;

test('channel', async ({ page }) => {
  await page.goto(share);
  await expect(page).toHaveTitle(/WAY OF JEN/);
});

test('playlists', async ({ page }) => {
  for(const [id, playlist] of Object.entries(playlists)) {
    await page.goto(playlist.url);
    await expect(page).toHaveTitle(RegExp(playlist.title)); //  Starts with is sufficient
  }
});

test('videos', async ({ page }) => {
  for(const video of videos) {
    await page.goto(video.youtubeLink);
    await expect(page).toHaveTitle(RegExp(video.video, 'i'));
  }
});

