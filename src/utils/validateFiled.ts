export const validateField = (name: string, value: string): string => {
  if (!value.trim()) return 'Field required'

  switch (name) {
    case 'Email':
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Enter a correct email'
      }
      break
    case 'Name':
      if (!/^[a-zA-Zа-яА-ЯёЁ\s'-]{2,30}$/.test(value)) {
        return 'Please enter a valid name (2-30 letters)'
      }
      break
  }

  return ''
}
