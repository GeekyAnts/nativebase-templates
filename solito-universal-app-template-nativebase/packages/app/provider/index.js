import { NavigationProvider } from './navigation'
import React from 'react'
import { NativeBaseProvider } from 'native-base'

export function Provider({ children }) {
  return (
    <NavigationProvider>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationProvider>
  )
}
