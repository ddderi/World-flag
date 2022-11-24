import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledSelectChild } from '../styles/NavbarElements';



export default function SelectNav() {

  const languages = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'es', label: 'Español' }
  ]

  const { i18n } = useTranslation();


  const colorStyles = {
    control: (styles) => {
      return ({ ...styles, backgroundColor: 'black', width: '80px', color: 'white' })
    },
    option: (styles, { data, isDisable, isFocused, isSelected }) => {
      return { ...styles, color: 'black', backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.89)' : 'white', color: isSelected ? 'white' : 'black' };
    }
  }

  const handleChange = (lng) => {
    i18n.changeLanguage(lng.value)
  }


  return (
    <StyledSelectChild options={languages}
      classNamePrefix="react-select"
      onChange={handleChange}
      styles={colorStyles}
      defaultValue={{ label: 'English' }}
    />

  )
}

