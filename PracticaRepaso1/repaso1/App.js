import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, SafeAreaView, Platform, Alert } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert("Campos incompletos\n\nDebes llenar todos los campos.");
      } else {
        Alert.alert("Campos incompletos", "Debes llenar todos los campos.");
      }
      return;
    }

    if (isNaN(semestre)) {
      if (Platform.OS === 'web') {
        window.alert("Error\n\nEl semestre debe ser un número.");
      } else {
        Alert.alert("Error", "El semestre debe ser un número.");
      }
      return;
    }

    const mensajeExito = `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`;
    
    if (Platform.OS === 'web') {
        window.alert(`Registro enviado\n\n${mensajeExito}`);
    } else {
        Alert.alert("Registro enviado", mensajeExito);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
      />

      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.switchRow}>
        <Text>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.switchRow}>
        <Text>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.switchRow}>
        <Text>¿Participará en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <View style={styles.botonContainer}>
        <Button title="Enviar Registro" onPress={enviarRegistro} color="blue" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    maxWidth: 500, 
    marginHorizontal: 'auto',
    width: '100%',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  botonContainer: {
    marginTop: 20,
  }
});