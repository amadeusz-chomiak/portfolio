import { wait, waitFor } from '@testing-library/vue'

jest.setTimeout(30000)
page.on('pageerror', (err) => {
  console.error(err)
})

describe('request cooperation form', () => {
  it('navigate to localhost:3000', async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' })
  })

  it('should press send email button', async () => {
    await page.waitForSelector('[data-testid="contact-send-email"]')
    await page.$eval('[data-testid="contact-send-email"]', (Button) =>
      (Button as HTMLButtonElement).click()
    )
  })

  it('should display congratulation modal', async () => {
    await page.waitFor(1000)
    const modal = await page.$('[data-testid="contact-form-modal"]')
    expect(await modal?.isIntersectingViewport()).toBe(true)
  })
})
