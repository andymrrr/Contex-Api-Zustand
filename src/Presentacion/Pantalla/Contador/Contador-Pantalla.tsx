import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { EstiloGlobales } from '../../../config'
import { usarContadorStore } from '../../Store/Contador-Store'
import { useNavigation } from '@react-navigation/native'

export const ContadorPantalla = () => {
  const navegar =useNavigation()
  const contar = usarContadorStore(state => state.contar)
  const IncrementarDecrementar = usarContadorStore(state => state.incrementarDecrementar)
  useEffect(() => {
   navegar.setOptions({
    title: `Contador: ${contar}`
   })
  }, [contar])
  
  return (
    <View style={EstiloGlobales.contenedor}>
        <Text style={EstiloGlobales.titulo}>Contador: {contar}</Text>
        <View style={{ flexDirection:"row", }}>
        <Pressable 
          onPress={()=> IncrementarDecrementar(-1)}
          style={[EstiloGlobales.botonPrimario, {flex:1, marginRight: 5}]}>
          <Text style={{textAlign:"center", fontWeight:"bold"}}>-1</Text>
        </Pressable>
        
        <Pressable 
          onPress={()=> IncrementarDecrementar(+1)}
          style={[EstiloGlobales.botonPrimario, {flex:1, marginLeft: 5}]}>
          <Text style={{textAlign:"center", fontWeight:"bold"}}>+1</Text>
        </Pressable>
        </View>
       
    </View>
  )
}
