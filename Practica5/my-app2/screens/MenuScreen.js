/* Zona1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalBottomScreen from './ModalBottomScreen';

/* Zona2: Main - Hogar de los componentes */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'safeArea':
            return <SafeAreaScreen />;
        case 'pressable':
            return <PressableScreen />;
        case 'textInput':
            return <TextInputScreen />;
        case 'flatList':
            return <FlatListScreen />;
        case 'imageBackground':
            return <ImageBackgroundScreen />;
        case 'activityIndicator':
            return <ActivityIndicatorScreen />;
        case 'modal':
            return <ModalBottomScreen />;
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>Menú de Prácticas</Text>
                    <Button title="Práctica: Tarjetas" onPress={() => setScreen('tarjetas')} />
                    <Button title="Práctica: SafeArea" onPress={() => setScreen('safeArea')} />
                    <Button title="Práctica: Pressable" onPress={() => setScreen('pressable')} />
                    <Button title="Práctica: TextInput" onPress={() => setScreen('textInput')} />
                    <Button title="Práctica: FlatList" onPress={() => setScreen('flatList')} />
                    <Button title="Práctica: ImageBackground" onPress={() => setScreen('imageBackground')} />
                    <Button title="Práctica: ActivityIndicator" onPress={() => setScreen('activityIndicator')} />
                    <Button title="Práctica: Modal & BottomSheet" onPress={() => setScreen('modal')} />
                    <StatusBar style="auto" />
                </View>
            );
    }
}

/* Zona3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8', 
    alignItems: 'stretch',      
    justifyContent: 'center',
    paddingHorizontal: 40,      
    gap: 16,                   
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2937',           
    textAlign: 'center',
    marginBottom: 20,           
    letterSpacing: 0.5,
  },
});
