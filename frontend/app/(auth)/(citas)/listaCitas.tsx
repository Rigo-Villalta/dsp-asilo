import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import axios from 'axios';
import CitaMedica from '../../../components/citaMedica';

const listaCitas = () => {
  const { user } = useUser();
  const [citas, setCitas] = useState([]);

  useEffect( () => {
  axios.get("http://10.0.2.2:8000/asilo/api/citas/?format=json")
  .then(response => response.data)
  .then(data => setCitas(data));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
      data={citas}
      renderItem={({ item }) => <CitaMedica cita={item} />}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      />

    </View>
  );
};

export default listaCitas;
