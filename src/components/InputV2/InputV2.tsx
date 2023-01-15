import React, { InputHTMLAttributes, useState } from 'react'
import { UseControllerProps, useController, FieldValues, FieldPath } from 'react-hook-form'

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameInput?: string
  classNameError?: string
}

function InputV2<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: UseControllerProps<TFieldValues, TName> & InputNumberProps) {
  const {
    type,
    onChange,
    value = '',
    className,
    classNameInput = 'p-3 w-full outlline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 text-red-600 text-sm min-h-[1.25rem]',
    ...rest
  } = props
  const { field, fieldState } = useController(props)
  const [localValue, setLocalValue] = useState<string>(field.value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueFromInput = e.target.value
    const numberCondition = type === 'number' && /^\d+$/.test(valueFromInput)
    if (numberCondition || type !== 'number') {
      //Cập nhật localValue
      setLocalValue(valueFromInput)
      //Gọi field.onChange để cập nhật state vào react hook form
      field.onChange(e)
      //Thực thi onChange từ truyền vào props
      onChange && onChange(e)
    }
  }
  return (
    <div className={className}>
      <input className={classNameInput} {...field} value={value || localValue} onChange={handleChange} {...rest} />
      <div className={classNameError}>{fieldState.error?.message}</div>
    </div>
  )
}

export default InputV2
