/* Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Perfil } from '../components/Perfil';

/* Zona2: Main - Hogar de los componentes */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>

      <Perfil 
      estiloExt={styles.tarjetaRoja} 
      nombre="Victor Manuel Molina Caballero" 
      carrera="Ingeniería en Sistemas Computacionales" 
      materia="Programación Móvil" 
      cuatrimestre="9no" />

      <Perfil 
      estiloExt={styles.tarjetaVerde} 
      nombre="VMMC" 
      carrera="ISC" 
      materia="PM" 
      cuatrimestre="9" />

      <Perfil 
      estiloExt={styles.tarjetaRoja} 
      nombre="Victor Manuel Molina Caballero" 
      carrera="Ingeniería en Sistemas Computacionales" 
      materia="Programación Móvil" 
      cuatrimestre="9no" />

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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  tarjetaRoja:{backgroundColor: 'red'},
  tarjetaVerde:{backgroundColor: 'green'},
});