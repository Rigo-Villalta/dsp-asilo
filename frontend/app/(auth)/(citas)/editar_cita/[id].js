import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router';
import axios from 'axios';

const editarDeCita = () => {
  const { user } = useUser();
  const params = useLocalSearchParams()
  const [cita, setCita] = useState({
    medico: {},
    paciente: {}
  });

  useEffect(() => {
    axios.get(`http://10.0.2.2:8000/asilo/api/citas/${params.id}/?format=json`)
      .then(response => response.data)
      .then(data => setCita({ 
        fecha: data.fecha, 
        hora: data.hora, 
        notas: data.notas, 
        medico: data.medico, 
        paciente: data.paciente }));
  }, []);


  return (
    <View>
      <Text>Fecha: {cita.fecha}</Text>
      <Text>Hora: {cita.hora}</Text>
      <Text>Médico: Dr. {cita.medico.nombre}  {cita.medico.apellidos}</Text>
      <Text>Paciente: {cita.paciente.nombre} {cita.paciente.apellidos}</Text>
      
    </View>
  );
};

export default editarDeCita;