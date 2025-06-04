import { useEffect } from 'react'

type TMobileMenuProps = {
  isOpen: boolean
  closeMenu: () => void
}

export const useCloseMobileMenu = ({ isOpen, closeMenu }: TMobileMenuProps) => {
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth > 800) {
        closeMenu()
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen, closeMenu])
}
