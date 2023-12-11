import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { router, useLocalSearchParams, useGlobalSearchParams } from 'expo-router';

const Formulario = () => {
    const params = useLocalSearchParams()
    
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [notas, setNotas] = useState('');

    useEffect(() => {
        axios.get(`http://10.0.2.2:8000/asilo/api/pacientes/${params.id}/?format=json`)
          .then(response => response.data)
          .then(data => {
            setNombre(data.nombre),
            setApellidos(data.apellidos),
            setFechaDeNacimiento(data.fecha_de_nacimiento),
            setTelefono(data.telefono_de_contacto),
            setCorreo(data.correo_electronico),
            setNotas(data.notas)})
      }, []);

    const enviarDatos = () => {
        axios.put(
            `http://10.0.2.2:8000/asilo/api/pacientes/${params.id}/`,
            {
                "nombre": nombre,
                "apellidos": apellidos,
                "fecha_de_nacimiento": fechaDeNacimiento,
                "telefono_de_contacto": telefono,
                "correo_electronico": correo,
                "notas": notas
            })
        router.replace("/listaPacientes")
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                styles={styles.input}
                placeholder='Nombres'
                label="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                styles={styles.input}
                placeholder='Apellidos'
                label="Apellidos"
                value={apellidos}
                onChangeText={setApellidos}
            />
            <TextInput
                styles={styles.input}
                placeholder='Fecha de nacimiento'
                label="Fecha de nacimiento"
                value={fechaDeNacimiento}
                onChangeText={setFechaDeNacimiento}
            />
            <TextInput
                styles={styles.input}
                placeholder='Teléfono'
                label="Teléfono de contacto"
                value={telefono}
                onChangeText={setTelefono}
            />
            <TextInput
                styles={styles.input}
                placeholder='email'
                label="Correo electrónico"
                value={correo}
                onChangeText={setCorreo}
            />
            <TextInput
                styles={styles.input}
                placeholder='notas'
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