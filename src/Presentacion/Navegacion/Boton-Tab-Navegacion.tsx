import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InicioPantalla } from '../Pantalla/Inicio/Inicio-Pantalla';
import { ContadorPantalla } from '../Pantalla/Contador/Contador-Pantalla';
import { PerfilPantalla } from '../Pantalla/Perfil/Perfil-Pantalla';

const Tab = createBottomTabNavigator();

export const BotonTabNavegacion =() => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={InicioPantalla} />
      <Tab.Screen name="Perfil" component={PerfilPantalla} />
      <Tab.Screen name="Contador" component={ContadorPantalla} />
    </Tab.Navigator>
  );
}