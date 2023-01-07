import React, { forwardRef, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputNumber = forwardRef<HTMLInputElement, Props>(function InputNumberInner(
  {
    errorMessage,
    className,
    classNameInput = 'p-3 w-full outlline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]',
    onChange,
    ...rest
  },
  ref
) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d+$/.test(value) || (value === '' && onChange)) {
      onChange(e)
    }
  }
  return (
    <div className={className}>
      <input className={classNameInput} ref={ref} onChange={handleChange} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
})

export default InputNumber
