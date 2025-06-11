export type TCustomButtonProps = {
  isDisabled?: boolean
  onClick?: () => void
  children: React.ReactNode
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>> | null
  showIcon?: boolean
  className?: string
  variant?: 'primary' | 'secondary' | 'small'
}
