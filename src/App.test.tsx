import { describe, test, expect } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { logScreen, renderWithRoute } from './utils/testUtils'

expect.extend(matchers)

describe('App', () => {
  test('App render & navigate', async () => {
    const { user } = renderWithRoute()

    /**
     * waitFor sẽ run callback 1 vài lần
     * cho đến khi hết timeout hoặc expect pass
     * Số lần run phụ thuộc vào timeout và interval
     * Mặc định: timeout = 1000ms và interval = 50ms
     *
     */

    //Verify render home page
    await waitFor(() => {
      expect(document.querySelector('title')?.textContent).toBe('Home | VietStore')
    })

    //Verify navigate login page
    await user.click(screen.getByText(/Đăng nhập/i))
    await waitFor(() => {
      expect(screen.getByText(/Bạn chưa có tài khoản/i)).toBeInTheDocument()
      expect(document.querySelector('title')?.textContent).toBe('Login | VietStore')
    })

    //Verify navigate register page
    await user.click(screen.getByText(/Đăng kí/i))
    await waitFor(() => {
      expect(screen.getByText(/Bạn đã có tài khoản/i)).toBeInTheDocument()
      expect(document.querySelector('title')?.textContent).toBe('Register | VietStore')
    })
  })

  test('NotFound page', async () => {
    const route = '/some/bad/route'
    renderWithRoute({ route })

    await waitFor(() => {
      expect(screen.getByText(/Something is missing/i)).toBeInTheDocument()
    })
    // await logScreen()
  })
})
