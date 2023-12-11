import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router';
import axios from 'axios';

const detalleDeMedico = () => {
  const { user } = useUser();
  const params = useLocalSearchParams()
  const [medico, setMedico] = useState({});

  useEffect(() => {
    axios.get(`http://10.0.2.2:8000/asilo/api/medicos/${params.id}/?format=json`)
      .then(response => response.data)
      .then(data => setMedico(data));
  }, []);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nombre: {medico.nombre}</Text>
      <Text>Apellido: {medico.apellidos}</Text>
      <Text>Teléfono de contacto {medico.telefono_de_contacto}</Text>
      <Text>Correo electrónico: {medico.correo_electronico}</Text>
    </View>
  );
};

export default detalleDeMedico;