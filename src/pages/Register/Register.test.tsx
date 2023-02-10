import { fireEvent, screen, waitFor } from '@testing-library/react'
import path from 'src/constants/path'
import { logScreen, renderWithRoute } from 'src/utils/testUtils'
import { describe, test, expect, beforeAll } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

describe('Register page', () => {
  beforeAll(async () => {
    renderWithRoute({ route: path.register })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })
  })

  test('Show error message required', async () => {
    const btnSubmit = document.querySelector('form button[type="submit"]') as Element
    fireEvent.click(btnSubmit)
    await waitFor(async () => {
      expect(await screen.findByText(/Email là bắt buộc/i)).toBeTruthy()
      // expect(screen.getAllByText(/Mật khẩu là bắt buộc/i)).toBeInTheDocument()
      expect(await screen.findByText(/Nhập lại mật khẩu là bắt buộc/i)).toBeTruthy()
    })
  })

  test('Should display matching error when email is malformed ', async () => {
    const inputEmail = document.querySelector('form input[type="email"]') as Element
    const btnSubmit = document.querySelector('form button[type="submit"]') as Element

    fireEvent.change(inputEmail, {
      target: {
        value: 'test'
      }
    })

    fireEvent.click(btnSubmit)
    await waitFor(async () => {
      expect(screen.getByText(/Email không đúng định dạng/i)).toBeInTheDocument()
    })
  })

  test('Should display min length error password', async () => {
    const inputPassword = document.querySelector('form input[name="password"]') as Element
    const btnSubmit = document.querySelector('form button[type="submit"]') as Element

    fireEvent.change(inputPassword, {
      target: {
        value: '123'
      }
    })

    fireEvent.click(btnSubmit)
    await waitFor(async () => {
      expect(screen.getByText(/Độ dài từ 6-160 kí tự/i)).toBeInTheDocument()
    })
  })

  test('Should display error when confirm password not match', async () => {
    const inputPassword = document.querySelector('form input[name="password"]') as Element
    const inputConfirmPassword = document.querySelector('form input[name="confirm_password"]') as Element
    const btnSubmit = document.querySelector('form button[type="submit"]') as Element

    fireEvent.change(inputPassword, {
      target: {
        value: '123'
      }
    })

    fireEvent.change(inputConfirmPassword, {
      target: {
        value: '123456'
      }
    })

    fireEvent.click(btnSubmit)
    // await logScreen()
    await waitFor(() => {
      expect(screen.getByText(/Mật khẩu nhập lại không khớp/i)).toBeInTheDocument()
    })
  })
})
