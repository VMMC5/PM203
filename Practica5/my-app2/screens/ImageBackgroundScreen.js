/* Zona1: Importaciones de componenetes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { useState } from 'react';


/* Zona2: Main - Hogar de los componentes */
export default function ImageBackgroundScreen() {

  const [fondo, setFondo] = useState(
        require('../assets/fondo.jpg')
        );
  
  const cambiarFondo = () => {
    setFondo (
      fondo === require('../assets/fondo.jpg')
      ? require('../assets/fondo2.jpg')
      : require('../assets/fondo.jpg')
    );
  }
    
  return (
     <ImageBackground
            source={fondo}
            style={styles.fondo}
            resizeMode="cover"
        >
            <View style={styles.centro}>
                <Text style={styles.texto}>Bienvenido</Text>
                <Button title="Cambiar Fondo" onPress={cambiarFondo} />
            </View>
            <StatusBar style="auto" />
      </ImageBackground>
  );
}

/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
   fondo: {
        flex: 1,
        width: '100%',
    },
    centro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
});