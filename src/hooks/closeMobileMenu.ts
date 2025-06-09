import { useEffect } from 'react'
import { breakpoints } from '@/constants'

type TMobileMenuProps = {
  isOpen: boolean
  closeMenu: () => void
}

export const useCloseMobileMenu = ({ isOpen, closeMenu }: TMobileMenuProps) => {
  const { tablet } = breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth > tablet) {
        closeMenu()
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen, closeMenu, tablet])
}
