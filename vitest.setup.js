import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import authRequests from './src/msw/auth.msw'
import productRequests from './src/msw/product.msw'
import categoriesRequests from './src/msw/category.msw'
import purchasesRequests from './src/msw/purchases.msw'
import userRequests from './src/msw/user.msw'

const server = setupServer(...authRequests, ...productRequests, ...categoriesRequests, ...purchasesRequests, ...userRequests)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())