import * as yup from 'yup'
import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import { AnyObject } from 'yup/lib/types'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

// export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
//   email: {
//     required: {
//       value: true,
//       message: 'Email là bắt buộc'
//     },
//     pattern: {
//       value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
//       message: 'Email không đúng định dạng'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài từ 5-160 kí tự'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 5-160 kí tự'
//     }
//   },
//   password: {
//     required: {
//       value: true,
//       message: 'Password là bắt buộc'
//     },
//     minLength: {
//       value: 6,
//       message: 'Độ dài từ 5-160 kí tự'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 5-160 kí tự'
//     }
//   },
//   confirm_password: {
//     required: {
//       value: true,
//       message: 'Nhập lại password là bắt buộc'
//     },
//     minLength: {
//       value: 6,
//       message: 'Độ dài từ 5-160 kí tự'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 5-160 kí tự'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
//         : undefined
//   }
// })

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

export type Schema = yup.InferType<typeof schema>
