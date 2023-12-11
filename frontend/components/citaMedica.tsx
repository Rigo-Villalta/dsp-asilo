import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const CitaMedica = ({ cita }) => {
  return (
    <View>
      <Text><Link href={{ 
        pathname: "/ver_cita/[id]",
        params: {id: cita.id }
        }}>{cita.paciente.apellidos} - {cita.fecha}</Link></Text>
    </View>
  );
};

export default CitaMedica;