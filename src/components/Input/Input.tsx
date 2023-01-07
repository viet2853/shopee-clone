import React, { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({
  errorMessage,
  className,
  classNameInput = 'p-3 w-full outlline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  name,
  classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]',
  register,
  rules,
  ...rest
}: Props): JSX.Element {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input className={classNameInput} {...registerResult} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
