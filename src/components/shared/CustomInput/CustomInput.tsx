import classNames from 'classnames'
import { useClassNames } from '@/hooks'
import { TCustomInput } from './CustomInput.types'

import styles from './CustomInput.module.scss'

export const CustomInput = ({
  type,
  placeholder,
  name,
  className: classNameProp,
  isRequired = false,
  onChange,
  value,
  error
}: TCustomInput) => {
  const { cn } = useClassNames('input', styles)

  return (
    <div className={cn()}>
      <input
        type={type}
        className={classNames(cn('__item'), classNameProp)}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      <br />
      {isRequired && <span>*</span>}
      {error && <span className={cn('__errorMessage')}>{error}</span>}
    </div>
  )
}
