import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import axios from 'axios';
import Paciente from '../../../components/paciente';

const listaPacientes = () => {
  const { user } = useUser();
  const [pacientes, setPacientes] = useState([]);

  useEffect( () => {
  axios.get("http://10.0.2.2:8000/asilo/api/pacientes/?format=json")
  .then(response => response.data)
  .then(data => setPacientes(data));
  }, []);

  return (
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
      data={pacientes}
      renderItem={({ item }) => <Paciente paciente={item} />}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />

    </View>
  );
};

export default listaPacientes;
