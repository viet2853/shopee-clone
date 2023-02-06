import { AxiosError } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { describe, expect, it } from 'vitest'
import {
  formatCurrency,
  formatNumberToSocialStyle,
  isAxiosError,
  isAxiosUnauthorizedError,
  isAxiosUnprocessableEntityError,
  isExpireAccessTokenError,
  rateSale
} from '../utils'

describe('isAxiosError', () => {
  it('isAxiosError return boolean', () => {
    expect(isAxiosError(new Error())).toBe(false)
    expect(isAxiosError(new AxiosError())).toBe(true)
  })
})

describe('isAxiosUnprocessableEntityError', () => {
  it('isAxiosUnprocessableEntityError return boolean', () => {
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.UnprocessableEntity
        } as any)
      )
    ).toBe(true)

    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.BadGateway
        } as any)
      )
    ).toBe(false)
  })
})

describe('isAxiosUnauthorizedError', () => {
  it('isAxiosUnauthorizedError return boolean', () => {
    expect(
      isAxiosUnauthorizedError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.Unauthorized
        } as any)
      )
    ).toBe(true)

    expect(
      isAxiosUnauthorizedError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.BadGateway
        } as any)
      )
    ).toBe(false)
  })
})

describe('isExpireAccessTokenError', () => {
  it('isExpireAccessTokenError return boolean', () => {
    expect(
      isExpireAccessTokenError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.Unauthorized,
          data: {
            data: {
              name: 'EXPIRED_TOKEN'
            }
          }
        } as any)
      )
    ).toBe(true)

    expect(
      isExpireAccessTokenError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.Unauthorized,
          data: {
            data: {
              name: 'TOKEN'
            }
          }
        } as any)
      )
    ).toBe(false)
  })
})

describe('formatCurrency', () => {
  it('formatCurrency return number currency', () => {
    expect(formatCurrency(1000000)).toBe(new Intl.NumberFormat('de-DE').format(1000000))
  })
})

describe('formatNumberToSocialStyle', () => {
  it('formatNumberToSocialStyle return number social style', () => {
    expect(formatNumberToSocialStyle(1234)).toBe(
      new Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: 1
      })
        .format(1234)
        .replace('.', ',')
        .toLocaleLowerCase()
    )
  })
})

describe('rateSale', () => {
  it('rateSale return %', () => {
    expect(rateSale(10, 5)).toBe('50%')
  })
})
