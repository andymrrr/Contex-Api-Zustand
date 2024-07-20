import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { EstiloGlobales } from '../../../config'
import { UsarPerfilStore } from '../../Store/Perfil-Store';

export const PerfilPantalla = () => {
  const nombre = UsarPerfilStore(state => state.nombre)
  const email = UsarPerfilStore(state => state.email)
  const cambiarPerfil = UsarPerfilStore(state => state.cambiarPerfil)
  return (
    <View style={EstiloGlobales.contenedor}>
      <Text style={EstiloGlobales.titulo}>{nombre}</Text>
      <Text style={EstiloGlobales.titulo}>{email}</Text>
      <Pressable
        onPress={() => UsarPerfilStore.setState({nombre: 'Andy Reyes'})}
        style={EstiloGlobales.botonPrimario}>
        <Text>Cambiar Nombre</Text>
      </Pressable>
      <Pressable
        onPress={() => UsarPerfilStore.setState({email: 'ARR@Cloud.com'})}
        style={EstiloGlobales.botonPrimario}>
        <Text>Cambiar Email</Text>
      </Pressable>
      <Pressable
        onPress={() => cambiarPerfil("Jhon Doe","Jhon.Doe@google.com")}
        style={EstiloGlobales.botonPrimario}>
        <Text>Regresar a Jhon</Text>
      </Pressable>
    </View>
  );
}
