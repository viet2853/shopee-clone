import * as yup from 'yup'
import { AnyObject } from 'yup/lib/types'

function testPriceMinMax(this: yup.TestContext<AnyObject>) {
  const { price_min, price_max } = this.parent
  if (price_max !== '' && price_min !== '') {
    return Number(price_max) > Number(price_min)
  }
  return price_min !== '' || price_max !== ''
}

export const schema = yup
  .object({
    email: yup
      .string()
      .required('Email là bắt buộc')
      .email('Email không đúng định dạng')
      .min(5, 'Độ dài từ 5-160 ký tự')
      .max(160, 'Độ dài từ 5-160 ký tự'),
    password: yup
      .string()
      .required('Mật khẩu là bắt buộc')
      .min(6, 'Độ dài từ 6-160 kí tự')
      .max(160, 'Độ dài từ 6-160 kí tự'),
    confirm_password: yup
      .string()
      .required('Nhập lại mật khẩu là bắt buộc')
      .min(6, 'Độ dài từ 6-160 kí tự')
      .max(160, 'Độ dài từ 6-160 kí tự')
      .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không khớp'),
    price_min: yup.string().test({
      name: 'price-not-allow',
      message: 'Giá không phù hợp',
      test: testPriceMinMax
    }),
    price_max: yup.string().test({
      name: 'price-not-allow',
      message: 'Giá không phù hợp',
      test: testPriceMinMax
    }),
    name: yup.string().trim().required()
  })
  .required()

export const userSchema = yup.object({
  name: yup.string().max(160, 'Số kí tự tối đa là 160'),
  phone: yup.string().max(20, 'Số kí tự tối đa là 20'),
  address: yup.string().max(160, 'Số kí tự tối đa là 160'),
  date_of_birth: yup.date().max(new Date(), 'Hãy chọn một ngày trong quá khứ'),
  avatar: yup.string().max(1000),
  password: schema.fields['password'],
  new_password: schema.fields['password'],
  confirm_password: yup
    .string()
    .required('Nhập lại mật khẩu là bắt buộc')
    .min(6, 'Độ dài từ 6-160 kí tự')
    .max(160, 'Độ dài từ 6-160 kí tự')
    .oneOf([yup.ref('new_password')], 'Mật khẩu nhập lại không khớp')
})

export type UserSchema = yup.InferType<typeof userSchema>

export type Schema = yup.InferType<typeof schema>
