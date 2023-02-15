import { delay, renderWithRoute } from 'src/utils/testUtils'
import { describe, expect, test } from 'vitest'

describe('ProductDetail', () => {
  test('Render ProductDetail Page', async () => {
    renderWithRoute({
      route:
        '/KHUYẾN-MÃI-35-Áo-Thun-POLO-Nam-Tay-Ngắn-Áo-Cổ-Sọc-Chất-Liệu-Cá-Sấu-Cao-Cấp--Nhiều-màu-Đủ-Size-i-60af722af1a3041b289d8ba1'
    })

    await delay(1000)

    expect(document.body).toMatchSnapshot()
  })
})
