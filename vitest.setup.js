import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import config from './src/constants/config'

const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWFmZmZkNmQ3YzYyMDM0MDg0ZjNjOCIsImVtYWlsIjoidmlldEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTE0VDE1OjU1OjA3LjU5N1oiLCJpYXQiOjE2NzYzOTAxMDcsImV4cCI6MTE2NzYzOTAxMDd9.lQxNqM4aYEmE1Yd5fxMfl_wa_6oyRkd2FgekU0Lf5Ks',
    expires: 10000000000,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWFmZmZkNmQ3YzYyMDM0MDg0ZjNjOCIsImVtYWlsIjoidmlldEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTE0VDE1OjU1OjA3LjU5N1oiLCJpYXQiOjE2NzYzOTAxMDcsImV4cCI6MTE2NzYzOTAxMDd9.lQxNqM4aYEmE1Yd5fxMfl_wa_6oyRkd2FgekU0Lf5Ks',
    expires_refresh_token: 10000000000,
    user: {
      _id: '63aafffd6d7c62034084f3c8',
      roles: ['User'],
      email: 'viet@gmail.com',
      createdAt: '2022-12-27T14:23:57.547Z',
      updatedAt: '2023-02-12T18:58:08.139Z',
      __v: 0,
      address: 'Hà Nội',
      date_of_birth: '2003-05-27T17:00:00.000Z',
      name: 'Nguyễn Trọng Việt',
      phone: '0374882337',
      avatar: 'cc1db019-cd60-4562-8ee7-89e8cc108288.jpg'
    }
  }
}

export const restHandlers = [
  rest.post(`${config.baseUrl}/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(loginRes))
  })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
