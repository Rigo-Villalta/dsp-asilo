import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Medico = ({ medico }) => {
  return (
    <View>
      <Text><Link href={{ 
        pathname: "/ver_medico/[id]",
        params: {id: medico.id }
        }}>{medico.apellidos}, {medico.nombre}</Link></Text>
    </View>
  );
};

export default Medico;