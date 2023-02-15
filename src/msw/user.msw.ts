import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { access_token_1s } from './auth.msw'

const meRes = {
  message: 'Lấy người dùng thành công',
  data: {
    _id: '63aafffd6d7c62034084f3c8',
    roles: ['User'],
    email: 'viet@gmail.com',
    createdAt: '2022-12-27T14:23:57.547Z',
    updatedAt: '2023-02-12T18:58:08.139Z',
    address: 'Hà Nội',
    date_of_birth: '2003-05-27T17:00:00.000Z',
    name: 'Nguyễn Trọng Việt',
    phone: '0374882337',
    avatar: 'cc1db019-cd60-4562-8ee7-89e8cc108288.jpg'
  }
}
const userRequest = rest.get(`${config.baseUrl}me`, (req, res, ctx) => {
  const access_token = req.headers.get('authorization')
  if (access_token === access_token_1s) {
    return res(
      ctx.status(HttpStatusCode.Unauthorized),
      ctx.json({
        message: 'Lỗi',
        data: {
          message: 'Token hết hạn',
          name: 'EXPIRED_TOKEN'
        }
      })
    )
  }
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(meRes))
})

const userRequests = [userRequest]

export default userRequests
