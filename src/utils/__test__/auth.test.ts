import { User } from 'src/types/user.type'
import { beforeEach, describe, expect, it } from 'vitest'
import {
  getAccessTokenFromLS,
  getProfileFromLS,
  getRefreshTokenFromLS,
  saveAccessTokenToLS,
  saveProfileToLS,
  saveRefreshTokenToLS
} from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWFmZmZkNmQ3YzYyMDM0MDg0ZjNjOCIsImVtYWlsIjoidmlldEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTA2VDA4OjMzOjI5LjcxOFoiLCJpYXQiOjE2NzU2NzI0MDksImV4cCI6MTY3NTY3NjAwOX0.9_xyLsZyZ7dtPhmvKLjZAyYoLTH2N_wjUE72Gt9XFjA'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWFmZmZkNmQ3YzYyMDM0MDg0ZjNjOCIsImVtYWlsIjoidmlldEBnbWFpbC5jb20iLCJyb2xlcyI6WyJVc2VyIl0sImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTA2VDA4OjMzOjI5LjcxOFoiLCJpYXQiOjE2NzU2NzI0MDksImV4cCI6MTY3NTc1ODgwOX0.RaOJqrRatu33sP5_opNFaJr2qjPJvWzNxZ_4eYVvzVM'

const profile =
  '{"_id":"63aafffd6d7c62034084f3c8","roles":["User"],"email":"viet@gmail.com","createdAt":"2022-12-27T14:23:57.547Z","updatedAt":"2023-02-06T02:33:49.274Z","__v":0,"address":"Hà Nội","date_of_birth":"2008-12-27T17:00:00.000Z","name":"Nguyễn Trọng Việt","phone":"0374882337","avatar":"03030fa6-6d32-4a9c-a87e-01c6a485f9ee.jpg"}'

//Trước mỗi describe thì clear localStorage để chúng không bị phụ thuộc lẫn nhau
beforeEach(() => {
  localStorage.clear()
})

describe('access token', () => {
  it('access token', () => {
    saveAccessTokenToLS(access_token)
    expect(getAccessTokenFromLS()).toBe(access_token)
  })
})

describe('refresh token', () => {
  it('refresh token', () => {
    saveRefreshTokenToLS(refresh_token)
    expect(getRefreshTokenFromLS()).toBe(refresh_token)
  })
})

describe('profile', () => {
  it('profile', () => {
    saveProfileToLS(profile as unknown as User)
    expect(getProfileFromLS()).toBe(profile)
  })
})
