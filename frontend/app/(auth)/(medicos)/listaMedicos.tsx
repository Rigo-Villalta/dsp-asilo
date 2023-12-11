import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import axios from 'axios';
import Medico from '../../../components/medico';

const listaMedicos = () => {
  const { user } = useUser();
  const [medicos, setMedicos] = useState([]);

  useEffect( () => {
  axios.get("http://10.0.2.2:8000/asilo/api/medicos/?format=json")
  .then(response => response.data)
  .then(data => setMedicos(data));
  }, []);

  return (
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
      data={medicos}
      renderItem={({ item }) => <Medico medico={item} />}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />

    </View>
  );
};

export default listaMedicos;
