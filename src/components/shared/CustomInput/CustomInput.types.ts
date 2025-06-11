export type TCustomInput = {
  type: string
  placeholder: string
  name?: string
  className?: string
  isRequired?: boolean
  value?: string
  errorMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  worningMessage?: string
  isError?: boolean
  isWarning?: boolean
  isSelectAll?: boolean
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}
