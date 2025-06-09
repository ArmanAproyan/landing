export type TCustomInput = {
  type: string
  placeholder: string
  name?: string
  className?: string
  isRequired?: boolean
  value?: string
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
