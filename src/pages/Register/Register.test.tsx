import { fireEvent, screen, waitFor } from '@testing-library/react'
import path from 'src/constants/path'
import { renderWithRoute } from 'src/utils/testUtils'
import { describe, test, expect, beforeAll } from 'vitest'

describe('Register page', () => {
  let inputEmail: Element
  let inputPassword: Element
  let inputConfirmPassword: Element
  let btnSubmit: Element

  beforeAll(async () => {
    renderWithRoute({ route: path.register })
    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })

    inputEmail = document.querySelector('form input[type="email"]') as Element
    inputPassword = document.querySelector('form input[name="password"]') as Element
    inputConfirmPassword = document.querySelector('form input[name="confirm_password"]') as Element
    btnSubmit = document.querySelector('form button[type="submit"]') as Element
  })

  test('Show error message required', async () => {
    fireEvent.click(btnSubmit)
    await waitFor(async () => {
      expect(await screen.findByText(/Email là bắt buộc/i)).toBeTruthy()
      // expect(screen.getAllByText(/Mật khẩu là bắt buộc/i)).toBeInTheDocument()
      expect(await screen.findByText(/Nhập lại mật khẩu là bắt buộc/i)).toBeTruthy()
    })
  })

  test('Should display matching error when email is malformed ', async () => {
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
    await waitFor(() => {
      expect(screen.getByText(/Mật khẩu nhập lại không khớp/i)).toBeInTheDocument()
    })
  })

  test('Should hide error messsage when input value is correct', async () => {
    fireEvent.change(inputEmail, {
      target: {
        value: 'viet@gmail.com'
      }
    })

    fireEvent.change(inputPassword, {
      target: {
        value: '123123'
      }
    })

    fireEvent.change(inputConfirmPassword, {
      target: {
        value: '123123'
      }
    })

    fireEvent.click(btnSubmit)
    await waitFor(() => {
      expect(screen.queryByText(/Email là bắt buộc/i)).toBeNull()
      expect(screen.queryByText(/Email không đúng định dạng/i)).toBeNull()
      expect(screen.queryByText(/Độ dài từ 6-160 kí tự/i)).toBeNull()
      expect(screen.queryByText(/Mật khẩu nhập lại không khớp/i)).toBeNull()
    })
  })
})
