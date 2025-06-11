export type TCustomInput = {
  type: string
  name?: string
  value?: string
  isError?: boolean
  className?: string
  placeholder: string
  isWarning?: boolean
  isRequired?: boolean
  errorMessage?: string
  isSelectAll?: boolean
  worningMessage?: string
  wrapperClassName?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
