/* Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';

/* Zona2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>

      <Text>-------------------------- Componentes Nativos --------------------------</Text>
      <Image source={require('./assets/wave.png')}/>
      <Text>Hola Mundo React Native</Text>
      <Text>-----------------------------------------------------------------------------</Text>

      <Text>-------------------------- Componentes Propio Simple --------------------------</Text>
      <Saludo></Saludo>
      <Text>-----------------------------------------------------------------------------------</Text>

      <Text>-------------------------- Componentes Propio Compuesto --------------------------</Text>
      <Saludo2></Saludo2>

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
