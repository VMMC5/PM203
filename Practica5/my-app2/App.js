/* Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* Zona2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Text>-------------------------- Componentes Nativos --------------------------</Text>
      <Image source={require('./assets/wave.png')} />
      <Text>Hola Mundo React Native</Text>
      <Text>-----------------------------------------------------------------------------</Text>

      <Text>-------------------------- Componente Propio Simple --------------------------</Text>
      <Saludo />
      <Text>-----------------------------------------------------------------------------------</Text>

      <Text>-------------------------- Componentes Propios Compuestos --------------------------</Text>
      <Saludo2 />
      <Text>-----------------------------------------------------------------------------------</Text>

      <Text>-------------------------- Componente Perfil --------------------------</Text>
      <Perfil nombre="Victor Manuel Molina Caballero" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="9no" />
      <Text>-----------------------------------------------------------------------</Text>

      <StatusBar style="auto" />
    </View>
  );
}

/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});