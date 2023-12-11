import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet  } from 'react-native';
import axios from 'axios';
import { router } from 'expo-router';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const enviarDatos = () => {
    axios.post(
        "http://10.0.2.2:8000/asilo/api/medicos/", 
        {
            "nombre": nombre,
            "apellidos": apellidos,
            "telefono_de_contacto": telefono,
            "correo_electronico": correo
    })
    router.replace("/listaMedicos")
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        styles={styles.input}
        placeholder='Nombres del médico'
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
      <Button
        title="Enviar"
        onPress={enviarDatos}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        borderWith:1,
        borderColor: "#ccc",
        borderRaius: 3,
        padding: 10,
        marginBotton: 10,
    }
})

export default Formulario;