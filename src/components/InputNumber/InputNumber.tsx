import React, { forwardRef, InputHTMLAttributes, useState } from 'react'

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(function InputNumberInner(
  {
    errorMessage,
    className,
    classNameInput = 'p-3 w-full outlline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]',
    onChange = () => null,
    value = '',
    ...rest
  },
  ref
) {
  const [localValue, setlocalValue] = useState(value)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d+$/.test(value) || value === '') {
      //Thực thi onChange từ truyền vào props
      onChange && onChange(e)
      //Cập nhật localValue
      setlocalValue(value)
    }
  }
  return (
    <div className={className}>
      <input className={classNameInput} ref={ref} value={value || localValue} onChange={handleChange} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
})

export default InputNumber
