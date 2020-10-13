import { firestoreTestCollection } from '../utils/firebase'
jest.setTimeout(30000)
page.on('pageerror', (err) => {
  console.error(err)
})

export const testRequestCooperation = async () => {
  try {
    const result = await firestoreTestCollection
      .where('email', '==', 'test@test')
      .get()
    if (result.size > 1)
      throw new Error(
        'Firestore: Too much test emails in collection, makes this test unreliable. Remove all of them from console!'
      )
    if (result.size === 0)
      throw new Error(
        "Firestore: No results for query (where('email', '==', 'test@test'))"
      )
    const doc = result.docs[0]
    const data = doc.data()
    if (!(data.email === 'test@test' && data.request === 'test'))
      throw new Error(
        "Firestore: Received data doesn't match desired one data: " + data
      )
    await doc.ref.delete()
    return true
  } catch (error) {
    return error
  }
}

describe('request cooperation form', () => {
  it('navigate to localhost:3000', async () => {
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' })
  })

  it('should fill email input', async () => {
    await page.waitForSelector('[data-testid="contact-form-email"]')
    await page.type('[data-testid="contact-form-email"] > input', 'test@test')
  })

  it('should fill description input', async () => {
    await page.type(
      '[data-testid="contact-form-description"] > textarea',
      'test'
    )
  })

  it('should submit the form', async () => {
    // await page.waitForSelector(
    //   '[data-testid="contact-form-email"]:not([disabled])'
    // )
    await page.$eval('[data-testid="contact-form-submit"]', (Button) =>
      (Button as HTMLButtonElement).click()
    )
  })
  it('should remove created test email without errors', async () => {
    await page.waitFor(5000)
    const result = await testRequestCooperation()
    expect(result).toBe(true)
  })

  it('should display congratulation modal', async () => {
    await page.$('[data-testid="contact-form-modal"]')
  })
})
