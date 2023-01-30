const path = {
  home: '/',
  login: '/login',
  register: '/register',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  historyPurChase: '/user/purchase',
  productDetail: '/:nameId',
  cart: '/cart'
} as const

export default path
