import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ImageBackground, Alert, ActivityIndicator, Image, StatusBar } from 'react-native';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAgregarLibro = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero,
      };
      
      setLibros((prevLibros) => [nuevoLibro, ...prevLibros]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setIsLoading(false);
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Image source={require('./assets/iconoLibros.png')} style={styles.splashIcon} />
        <Text style={styles.splashText}>repa2</Text>
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require('./assets/fondoNieve.webp')} 
      style={styles.background}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        
        <Text style={styles.headerTitle}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#666"
          value={titulo}
          onChangeText={setTitulo}
          editable={!isLoading} 
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#666"
          value={autor}
          onChangeText={setAutor}
          editable={!isLoading}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
          editable={!isLoading}
        />

        <Pressable 
          style={({ pressed }) => [
            styles.button, 
            isLoading && styles.buttonDisabled,
            pressed && !isLoading && styles.buttonPressed
          ]} 
          onPress={handleAgregarLibro}
          disabled={isLoading} 
        >
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <Text style={styles.buttonText}>Guardando... </Text>
              <ActivityIndicator size="small" color="#00ff00" />
            </View>
          ) : (
            <Text style={styles.buttonText}>Agregar Libro</Text>
          )}
        </Pressable>

        <Text style={styles.totalText}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardText}>Autor: {item.autor}</Text>
              <Text style={styles.cardText}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  splashIcon: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  splashText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333333',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 65, 
    backgroundColor: 'rgba(0, 0, 0, 0.25)', 
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: '#155FA0', 
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonPressed: {
    backgroundColor: '#0F4676', 
  },
  buttonDisabled: {
    backgroundColor: 'rgba(128, 128, 128, 0.7)', 
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#444444',
    marginTop: 2,
  },
});