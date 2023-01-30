import axios, { type AxiosInstance } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
import { AuthResponse } from 'src/types/auth.type'
import { clearLocalStorage, getAccessTokenFromLS, getProfileFromLS, saveAccessTokenToLS, saveProfileToLS } from './auth'
import { User } from 'src/types/user.type'
import config from 'src/constants/config'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private profile: User
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.profile = getProfileFromLS()
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const url = response.config.url
        if (url === '/login' || url === '/register') {
          this.accessToken = (response.data as AuthResponse).data.access_token
          this.profile = (response.data as AuthResponse).data.user
          saveAccessTokenToLS(this.accessToken)
          saveProfileToLS(this.profile)
        } else if (url === '/logout') {
          this.accessToken = ''
          clearLocalStorage()
        }
        return response
      },
      function (error) {
        if (error.response.status !== HttpStatusCode.UnprocessableEntity) {
          const message = error.response?.data?.message || error.message
          toast.error(message)
        }
        if (error.response.status === HttpStatusCode.Unauthorized) {
          clearLocalStorage()
        }
        return Promise.reject(error)
      }
    )
  }
}

export const http = new Http().instance
