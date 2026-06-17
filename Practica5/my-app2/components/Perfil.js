/* PERFIL usando Desestructuración */
import { View, Text, Button, StyleSheet } from 'react-native';
import React, {useState} from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre, estiloExt }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={[styles.tarjeta, estiloExt]}>
            <Text style={styles.nombre}>{nombre}</Text>
            
            {/* Renderizado condicional */}
            {mostrar && (
                <>
                    <Text style={styles.carrera}>{carrera}</Text>
                    <Text style={styles.otroTexto}>{materia}</Text>
                    <Text style={styles.otroTexto}>{cuatrimestre}</Text>
                </>
            )}
            <Button title="Mostrar Perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    );
}


const styles = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: 600,
        textTransform: 'uppercase',
    },
    carrera: {
        fontSize: 18,
        color: 'blue',
        fontStyle: 'Roboto',
    },
    otroTexto: {
        fontSize: 12,
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
    tarjeta: {
        borderWidth: 2,
        padding: 25,
        margin: 15,
    },
})
