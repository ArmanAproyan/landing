export type TButtonProps = {
  isDisabled?: boolean
  onClick?: () => void
  children: React.ReactNode
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>
  className?: string
}
