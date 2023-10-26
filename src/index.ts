import { BAD_REQUEST, OK } from 'readable-http-codes'
import { logger } from '~/logger'

export const shouldBe200 = OK
export const fnReturn400 = () => BAD_REQUEST
export const shouldBeOK = 'OK'
export const shouldBeNotOK = 'NotOK'

logger.info({ shouldBe200, message: 'hello there' })
