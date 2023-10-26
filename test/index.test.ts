import { expect, it } from 'vitest'
import { fnReturn400, shouldBe200 } from '~/index.js'
import { logger } from '~/logger'

it('shoudBe200', () => {
  expect(shouldBe200).toBe(200)
})

it('fnReturn400', () => {
  expect(fnReturn400()).toBe(400)
})

it('logger', () => {
  expect(logger).toHaveProperty('info')
})
