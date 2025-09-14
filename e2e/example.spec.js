const { test, describe, expect } = require('@playwright/test')
const { beforeEach } = require('node:test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('should navigate to ivysaur page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Ivysaur')
    await expect(page).toHaveURL(/.*\/ivysaur/)
  })
})