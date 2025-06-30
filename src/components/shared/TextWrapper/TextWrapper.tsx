import styles from './TextWrapper.module.scss'
import { TextWrapperProps } from './TextWrapper.const'

export const TextWrapper = ({ children, lines = 2, className = '', ...rest }: TextWrapperProps) => {
  return (
    <div
      className={`${styles.textWrapper} ${className}`}
      style={{ WebkitLineClamp: lines }}
      {...rest}
    >
      {children}
    </div>
  )
}
