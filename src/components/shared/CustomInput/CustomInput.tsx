import { FocusEvent } from 'react'
import { useClassNames } from '@/hooks'
import { TCustomInput } from './CustomInput.types'

import styles from './CustomInput.module.scss'

export const CustomInput = ({
  type,
  name,
  value,
  onBlur,
  onFocus,
  onChange,
  className,
  placeholder,
  errorMessage,
  worningMessage,
  wrapperClassName,
  isError = false,
  isWarning = false,
  isRequired = false,
  isSelectAll = false
}: TCustomInput) => {
  const { cn } = useClassNames('custom-input', styles)

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    onFocus?.(e)
    if (isSelectAll) {
      e.target.select()
    }
  }

  return (
    <div className={(cn(), wrapperClassName)}>
      <input
        type={type}
        className={(cn('__input'), { error: isError }, { warning: isWarning }, className)}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        onBlur={(e) => onBlur?.(e)}
      />
      {isRequired && <div className={cn('__isRequired')}>*</div>}
      {errorMessage && isError && <span className={cn('__errorMessage')}>{errorMessage}</span>}
      {worningMessage && isWarning && (
        <span className={cn('__worningMessage')}>{worningMessage}</span>
      )}
    </div>
  )
}
