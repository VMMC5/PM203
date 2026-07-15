import { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    Animated,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ModalBottomScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [selectedMode, setSelectedMode] = useState('Terraza');
    const [reservationConfirmed, setReservationConfirmed] = useState(false);

    function selectMode(mode) {
        setSelectedMode(mode);
        setReservationConfirmed(false);
        setSheetVisible(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reserva de mesa</Text>
            <Text style={styles.subtitle}>React Native: Modal y Bottom Sheet</Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Cena de Aniversario</Text>
                <Text style={styles.cardText}>Personas: 2 invitados</Text>
                <Text style={styles.cardText}>Zona: {selectedMode}</Text>
                <Text style={styles.cardText}>
                    Estado: {reservationConfirmed ? 'Confirmada' : 'Pendiente'}
                </Text>
            </View>

            <Pressable style={styles.secondaryButton} onPress={() => setSheetVisible(true)}>
                <Text style={styles.secondaryButtonText}>Elegir zona</Text>
            </Pressable>

            <Pressable style={styles.primaryButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.primaryButtonText}>Confirmar reserva</Text>
            </Pressable>

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent
                statusBarTranslucent
                onShow={() => console.log('Modal de confirmacion abierto')}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.overlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>Confirmar reserva</Text>
                        <Text style={styles.modalText}>
                            ¿Deseas reservar tu mesa en la zona de {selectedMode}?
                        </Text>

                        <View style={styles.actionsRow}>
                            <Pressable
                                style={[styles.actionButton, styles.cancelButton]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.actionButton, styles.confirmButton]}
                                onPress={() => {
                                    setReservationConfirmed(true);
                                    setModalVisible(false);
                                }}
                            >
                                <Text style={styles.confirmButtonText}>Confirmar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <BottomSheet
                visible={sheetVisible}
                onClose={() => setSheetVisible(false)}
                title="Elige la zona"
                height={340}
            >
                <Pressable style={styles.optionButton} onPress={() => selectMode('Terraza')}>
                    <Text style={styles.optionTitle}>Terraza</Text>
                    <Text style={styles.optionText}>Área al aire libre con vista a la ciudad.</Text>
                </Pressable>

                <Pressable style={styles.optionButton} onPress={() => selectMode('Salón')}>
                    <Text style={styles.optionTitle}>Salón Principal</Text>
                    <Text style={styles.optionText}>Interior climatizado con música en vivo.</Text>
                </Pressable>

                <Pressable style={styles.optionButton} onPress={() => selectMode('Barra')}>
                    <Text style={styles.optionTitle}>Barra</Text>
                    <Text style={styles.optionText}>Experiencia cercana a la cocina de autor.</Text>
                </Pressable>
            </BottomSheet>

            <StatusBar style="light" />
        </View>
    );
}

function BottomSheet({
    visible,
    onClose,
    title,
    height = 320,
    closeOnBackdropPress = true,
    children,
}) {
    const translateY = useRef(new Animated.Value(height)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: visible ? 0 : height,
            duration: visible ? 250 : 200,
            useNativeDriver: true,
        }).start();
    }, [height, translateY, visible]);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="none"
            statusBarTranslucent
            onRequestClose={onClose}
        >
            <View style={styles.sheetOverlay}>
                <Pressable
                    style={styles.sheetBackdrop}
                    onPress={closeOnBackdropPress ? onClose : undefined}
                />

                <Animated.View
                    style={[
                        styles.sheetContainer,
                        { height, transform: [{ translateY }] },
                    ]}
                >
                    <View style={styles.sheetHandle} />
                    <Text style={styles.sheetTitle}>{title}</Text>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // Fondo oscuro
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 24,
    },
    title: { 
        fontSize: 32, 
        fontWeight: '800', 
        color: '#E0E0E0', 
        marginBottom: 6,
        letterSpacing: 0.5 
    },
    subtitle: { 
        fontSize: 15, 
        color: '#888888', 
        marginBottom: 24 
    },
    card: {
        backgroundColor: '#1E1E1E', // Tarjeta gris oscura
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#333333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    cardTitle: { 
        fontSize: 22, 
        fontWeight: '700', 
        color: '#D4AF37', // Acento dorado
        marginBottom: 12 
    },
    cardText: { 
        fontSize: 16, 
        color: '#CCCCCC', 
        marginBottom: 8 
    },
    primaryButton: {
        backgroundColor: '#D4AF37',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 12,
        shadowColor: '#D4AF37',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    primaryButtonText: { 
        color: '#121212', 
        fontSize: 16, 
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderColor: '#D4AF37',
        borderWidth: 1.5,
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    secondaryButtonText: { 
        color: '#D4AF37', 
        fontSize: 16, 
        fontWeight: '800',
        textTransform: 'uppercase',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    modalCard: { 
        width: '100%', 
        backgroundColor: '#1E1E1E', 
        borderRadius: 16, 
        padding: 24,
        borderWidth: 1,
        borderColor: '#333333',
    },
    modalTitle: { 
        fontSize: 22, 
        fontWeight: '700', 
        color: '#D4AF37', 
        marginBottom: 12 
    },
    modalText: { 
        fontSize: 16, 
        color: '#CCCCCC', 
        marginBottom: 24,
        lineHeight: 24,
    },
    actionsRow: { flexDirection: 'row', gap: 12 },
    actionButton: { flex: 1, borderRadius: 10, paddingVertical: 14, alignItems: 'center' },
    cancelButton: { backgroundColor: '#333333' },
    confirmButton: { backgroundColor: '#D4AF37' },
    cancelButtonText: { color: '#E0E0E0', fontWeight: '700' },
    confirmButtonText: { color: '#121212', fontWeight: '800' },
    sheetOverlay: { flex: 1, justifyContent: 'flex-end' },
    sheetBackdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.6)' },
    sheetContainer: {
        backgroundColor: '#1E1E1E',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 30,
        borderWidth: 1,
        borderColor: '#333333',
    },
    sheetHandle: {
        width: 48,
        height: 5,
        borderRadius: 999,
        backgroundColor: '#555555',
        alignSelf: 'center',
        marginBottom: 20,
    },
    sheetTitle: { 
        fontSize: 22, 
        fontWeight: '700', 
        color: '#E0E0E0', 
        marginBottom: 18 
    },
    optionButton: {
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        backgroundColor: '#2A2A2A',
    },
    optionTitle: { 
        fontSize: 17, 
        fontWeight: '700', 
        color: '#D4AF37', 
        marginBottom: 6 
    },
    optionText: { fontSize: 14, color: '#A0A0A0' },
});