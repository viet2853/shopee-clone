import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { describe, it, expect, beforeEach } from 'vitest'
import { saveAccessTokenToLS, saveRefreshTokenToLS } from '../auth'
import { http, Http } from '../https'

const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWFmZmZkNmQ3YzYyMDM0MDg0ZjNjOCIsImVtYWlsIjoidmlldEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTA3VDA1OjE1OjM0LjQyNloiLCJpYXQiOjE2NzU3NDY5MzQsImV4cCI6MTY3NTc0NjkzNX0.gQ7loWxVg3XacceCc20APCvBm99kxBgt1jddr0eDcYc'
const refresh_token_1days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWFmZmZkNmQ3YzYyMDM0MDg0ZjNjOCIsImVtYWlsIjoidmlldEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTA3VDA1OjE1OjM0LjQyNloiLCJpYXQiOjE2NzU3NDY5MzQsImV4cCI6MTE2NzU3NDY5MzR9.I76SsNe3MO3WDbAsLPzn8mLDJYJ_MLOqz43viE7tstQ'

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
    saveRefreshTokenToLS(refresh_token_1days)
    const httpNew = new Http().instance
    const res = await httpNew.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
