import { fireEvent, screen, waitFor } from '@testing-library/react'
import path from 'src/constants/path'
import { logScreen, renderWithRoute } from 'src/utils/testUtils'
import { describe, test, expect, beforeAll } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

describe('Login page', () => {
  beforeAll(async () => {
    renderWithRoute({ route: path.login })

    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })
  })

  test('Show error message required', async () => {
    const btnSubmit = document.querySelector('form button[type="submit"]') as Element

    fireEvent.click(btnSubmit)
    expect(await screen.findByText(/Email là bắt buộc/i)).toBeTruthy()
    expect(await screen.findByText(/Mật khẩu là bắt buộc/i)).toBeTruthy()
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
    expect(screen.getByText(/Email không đúng định dạng/i)).toBeInTheDocument()
  })

  test('Should display min length error password', async () => {
    const inputPassword = document.querySelector('form input[type="password"]') as Element
    const btnSubmit = document.querySelector('form button[type="submit"]') as Element

    fireEvent.change(inputPassword, {
      target: {
        value: '123'
      }
    })

    fireEvent.click(btnSubmit)
    await logScreen()
    expect(screen.getByText(/Độ dài từ 6-160 kí tự/i)).toBeInTheDocument()
  })
})
