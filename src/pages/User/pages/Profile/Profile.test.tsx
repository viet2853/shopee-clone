import { waitFor } from '@testing-library/react'
import path from 'src/constants/path'
import { access_token } from 'src/msw/auth.msw'
import { saveAccessTokenToLS } from 'src/utils/auth'
import { logScreen, renderWithRoute } from 'src/utils/testUtils'
import { describe, expect, test } from 'vitest'

describe('Profile', () => {
  test('Render Page Profile', async () => {
    saveAccessTokenToLS(access_token)
    const { container } = renderWithRoute({ route: path.profile })

    await waitFor(() => {
      expect((container.querySelector('form input[placeholder="Tên"]') as HTMLInputElement).value).toBe(
        'Nguyễn Trọng Việt'
      )
    })
  })
})
