import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { BotonTabNavegacion } from './Presentacion/Navegacion/Boton-Tab-Navegacion'

export const Principal = () => {
  return (
    <NavigationContainer>
      <BotonTabNavegacion/>
    </NavigationContainer>
  )
}
