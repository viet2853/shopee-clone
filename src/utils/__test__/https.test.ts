import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { access_token_1s, refresh_token_1000days } from 'src/msw/auth.msw'
import { describe, it, expect, beforeEach } from 'vitest'
import { saveAccessTokenToLS, saveRefreshTokenToLS } from '../auth'
import { http, Http } from '../https'

describe('http axios', () => {
  let http = new Http().instance
  beforeEach(() => {
    localStorage.clear()
    http = new Http().instance
  })

  it('Call API', async () => {
    const res = await http.get('products')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Auth request', async () => {
    await http.post('login', {
      email: 'vietntph22574@fpt.edu.vn',
      password: '123123'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })

  it('Refresh Token', async () => {
    saveAccessTokenToLS(access_token_1s)
    saveRefreshTokenToLS(refresh_token_1000days)
    const httpNew = new Http().instance
    const res = await httpNew.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
