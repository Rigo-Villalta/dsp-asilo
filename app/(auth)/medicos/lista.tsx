import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ListaDoctores = () => {
  const [doctores, setDoctores] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:8000/asilo/api/doctors/?format=json')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <View>
      <Text>Lista de doctores:</Text>
      {doctores.map(doctor => (
        <View key={doctor.id}>
          <Text>{doctor.nombre} {doctor.apellido}</Text>
        </View>
      ))}
    </View>
  );
};

export default ListaDoctores;