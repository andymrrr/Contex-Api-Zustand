import React from 'react'
import { Text, View } from 'react-native'
import { EstiloGlobales } from '../../../config'
import { UsarPerfilStore } from '../../Store/Perfil-Store'
import { usarContadorStore } from '../../Store/Contador-Store'

export const InicioPantalla = () => {
  const nombre = UsarPerfilStore(state => state.nombre)
  const email = UsarPerfilStore(state => state.email)
  const contar = usarContadorStore(state => state.contar)
  return (
    <View style={EstiloGlobales.contenedor}>
        <Text style={EstiloGlobales.titulo}>
            {nombre}
        </Text>
        <Text style={EstiloGlobales.titulo}>
          {email}
        </Text>
        <Text style={EstiloGlobales.titulo}>
          Contador: {contar}
        </Text>
    </View>
  )
}
