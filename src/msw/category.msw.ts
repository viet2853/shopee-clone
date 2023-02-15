import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

const categoriesRes = {
  message: 'Lấy categories thành công',
  data: [
    {
      _id: '60aba4e24efcc70f8892e1c6',
      name: 'Áo thun'
    },
    {
      _id: '60afacca6ef5b902180aacaf',
      name: 'Đồng hồ'
    },
    {
      _id: '60afafe76ef5b902180aacb5',
      name: 'Điện thoại'
    }
  ]
}

const categoriesRequest = rest.get(`${config.baseUrl}categories`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(categoriesRes))
})

const categoriesRequests = [categoriesRequest]

export default categoriesRequests
