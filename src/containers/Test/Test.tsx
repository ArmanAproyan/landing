import { useState } from 'react'
import { useClassNames, useTimer } from '@/hooks'
import { LinksData } from '@/constants/LinksData'
import { NavBarItems as items } from '@/components/shared/NavBar/Navbar.const'
import { CustomButton, CustomInput, CustomLinks, NavBarItems, RenderTimer } from '@/components'

import styles from './style.module.scss'

export const Test = () => {
  const { cn } = useClassNames('test', styles)
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [warningMessage, setWarningMessage] = useState('')

  const [isError, setIsError] = useState(false)
  const [isWarning, setIsWarning] = useState(false)
  const [isRequired, setIsRequired] = useState(false)
  const [isSelectAll, setIsSelectAll] = useState(false)

  const handleToggleError = () => {
    setIsError(!isError)
    if (isWarning) {
      setIsWarning(false)
      setWarningMessage('')
    }
    setErrorMessage(isError ? '' : 'This is an error message')
  }
  const handleToggleWarning = () => {
    setIsWarning(!isWarning)
    if (isError) {
      setIsError(false)
      setErrorMessage('')
    }
    setWarningMessage(isWarning ? '' : 'This is a warning message')
  }
  const handleToggleRequired = () => {
    setIsRequired(!isRequired)
    setInputValue('')
    setErrorMessage('')
    setWarningMessage('')
  }

  const handleToggleSelectAll = () => {
    setIsSelectAll(!isSelectAll)
  }

  const timer = useTimer('2025-06-11T10:30:00Z')

  console.log('timer', timer)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    if (!value) {
      setErrorMessage('This field is required')
      setWarningMessage('')
    } else if (value.length < 3) {
      setErrorMessage('')
      setWarningMessage('Minimum 3 characters')
    } else if (value.length > 20) {
      setErrorMessage('')
      setWarningMessage('Maximum 20 characters')
    } else {
      setErrorMessage('')
      setWarningMessage('')
    }
  }

  return (
    <div className={cn()}>
      <div className={cn('__form')}>
        <CustomInput
          className={cn('__input')}
          type="text"
          placeholder="Name"
          name="testInput"
          isError={isError}
          value={inputValue}
          isWarning={isWarning}
          isRequired={isRequired}
          onChange={handleChange}
          errorMessage={errorMessage}
          worningMessage={warningMessage}
          isSelectAll={isSelectAll}
        />
        <div className={cn('__buttons')}>
          <CustomButton variant="small" onClick={handleToggleError}>
            Toggle error
          </CustomButton>
          <CustomButton variant="small" onClick={handleToggleWarning}>
            Toggle warning
          </CustomButton>
          <CustomButton variant="small" onClick={handleToggleRequired}>
            Toggle required
          </CustomButton>
          <CustomButton variant="small" onClick={handleToggleSelectAll}>
            Toggle isSelectAll
          </CustomButton>
        </div>
      </div>

      <CustomLinks linkData={LinksData} />

      <RenderTimer timer={timer} />

      <div className={cn('__navbar_items')}>
        <NavBarItems navItems={items} variant="secondary" />
      </div>
    </div>
  )
}
