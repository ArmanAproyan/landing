import { FocusEvent } from 'react'
import classNames from 'classnames'
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
  placeholder,
  errorMessage,
  worningMessage,
  isError = false,
  isWarning = false,
  isRequired = false,
  isSelectAll = false,
  className: classNameProp
}: TCustomInput) => {
  const { cn } = useClassNames('custom-input', styles)

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    onFocus?.(e)
    if (isSelectAll) {
      e.target.select()
    }
  }

  return (
    <div className={cn()}>
      <input
        type={type}
        className={classNames(
          cn('__input'),
          { [cn('__error')]: isError },
          { [cn('__warning')]: isWarning },
          classNameProp
        )}
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
