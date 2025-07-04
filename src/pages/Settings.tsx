import React from 'react'
import ThemeSwitcher from '../componets/ThemeSwitcher'
import Form from '../componets/FormData'
import FormData from '../componets/FormData'

const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Settings</h2>

      <ThemeSwitcher />

      <FormData />
    </div>
  )
}

export default Settings
