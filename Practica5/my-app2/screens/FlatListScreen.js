/* Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/* Zona2: Main - Hogar de los componentes */
export default function FlatListScreen() {
    return (
        <View style={styles.container}>
            <Text>Aquí va la práctica de FlatList</Text>

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
    flexDirection: 'column',
  },
});