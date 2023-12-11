import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';
import axios from 'axios';

const detalleDePaciente= () => {
  const { user } = useUser();
  const params = useLocalSearchParams()
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    axios.get(`http://10.0.2.2:8000/asilo/api/pacientes/${params.id}/?format=json`)
      .then(response => response.data)
      .then(data => setPaciente(data));
  }, []);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nombre: {paciente.nombre}</Text>
      <Text>Apellido: {paciente.apellidos}</Text>
      <Text>Teléfono de contacto {paciente.telefono_de_contacto}</Text>
      <Text>Correo electrónico: {paciente.correo_electronico}</Text>
      <Text><Link href={{ 
        pathname: "/editar_paciente/[id]",
        params: {id: paciente.id }
        }}>Editar</Link></Text>
    </View>
  );
};

export default detalleDePaciente;