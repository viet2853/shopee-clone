import { describe, test, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

expect.extend(matchers)

describe('App', () => {
  test('App render & navigate', async () => {
    render(<App />, { wrapper: BrowserRouter })
    const user = userEvent.setup()
    screen.debug(document.body.parentElement as HTMLElement, 99999999)

    // //Verify render home page
    // await waitFor(() => {
    //   expect(document.querySelector('title')?.textContent).toBe('Home | VietStore')
    // })

    // //Verify navigate login page
    // await user.click(screen.getByText(/Đăng nhập/i))
    // await waitFor(() => {
    //   expect(screen.getByText(/Bạn chưa có tài khoản/i)).toBeInTheDocument()

    //   expect(document.querySelector('title')?.textContent).toBe('Login | VietStore')
    // })

    // //Verify navigate register page
    // await user.click(screen.getByText(/Đăng kí/i))
    // await waitFor(() => {
    //   expect(screen.getByText(/Bạn đã có tài khoản/i)).toBeInTheDocument()

    //   expect(document.querySelector('title')?.textContent).toBe('Register | VietStore')
    // })
  })
})
