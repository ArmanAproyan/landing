import { useEffect, useState } from 'react'

export const useCroppedText = (text: string, maxLength: number) => {
  const [croppedText, setCroppedText] = useState('')

  useEffect(() => {
    if (!text) {
      setCroppedText('')
      return
    }

    const trimmedText = text.trim()
    if (trimmedText.length > maxLength) {
      setCroppedText(trimmedText.slice(0, maxLength) + '...')
    } else {
      setCroppedText(trimmedText)
    }
  }, [text, maxLength])

  return [croppedText]
}
