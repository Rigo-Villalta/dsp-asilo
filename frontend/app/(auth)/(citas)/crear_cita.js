import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';


const Formulario = () => {
    const [medico, setMedico] = useState('');
    const [paciente, setPaciente] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [notas, setNotas] = useState('');
    const [medicos, setMedicos] = useState([]);

    const pickerRef = React.useRef();

    const enviarDatos = () => {
        axios.post(
            "http://10.0.2.2:8000/asilo/api/citas/",
            {
                "medico": medico,
                "paciente": paciente,
                "fecha": fecha,
                "hora": hora,
                "notas": notas
            })
        router.replace("/listaCitas")
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Picker
                
                ref={pickerRef}
                selectedValue={medico}
                onValueChange={(itemValue, itemIndex) => setMedico(itemValue)}
            >
                <Picker.Item label="Java" value="java" style={{ fontSize: 14, color: "#000" }} />
                <Picker.Item label="JavaScript" value="js" style={{ fontSize: 14 }} />
            </Picker>
            <Picker
                ref={pickerRef}
                selectedValue={paciente}
                onValueChange={(itemValue, itemIndex) => setPaciente(itemValue)}
            >
                <Picker.Item label="Java" value="java" style={{ fontSize: 14 }} />
                <Picker.Item label="JavaScript" value="js" style={{ fontSize: 14 }} />
            </Picker>
            <TextInput
                styles={styles.input}
                placeholder='0000-00-00'
                label="Fecha"
                value={fecha}
                onChangeText={setFecha}
            />
            <TextInput
                styles={styles.input}
                placeholder='00:00:00'
                label="Hora"
                value={hora}
                onChangeText={setHora}
            />
            <TextInput
                styles={styles.input}
                placeholder='Notas'
                label="Notas"
                value={notas}
                onChangeText={setNotas}
            />
            <Button
                title="Enviar"
                onPress={enviarDatos}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWith: 1,
        borderColor: "#ccc",
        borderRaius: 3,
        padding: 10,
        marginBotton: 10,
    }
})

export default Formulario;