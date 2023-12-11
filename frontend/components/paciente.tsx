import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Paciente = ({ paciente: paciente }) => {
  return (
    <View>
      <Text><Link href={{ 
        pathname: "/ver_paciente/[id]",
        params: {id: paciente.id }
        }}>{paciente.apellidos}, {paciente.nombre}</Link></Text>
    </View>
  );
};

export default Paciente;