import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'
import App from 'src/App'

export const renderWithRoute = ({ route = '/' } = {}) => {
  window.history.pushState({}, 'Test App render', route)

  return {
    user: userEvent.setup(),
    ...render(<App />, { wrapper: BrowserRouter })
  }
}
