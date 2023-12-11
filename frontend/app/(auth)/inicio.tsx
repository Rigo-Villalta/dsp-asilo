import { View, Text } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const Home = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido, {user?.emailAddresses[0].emailAddress} 🎉</Text>
      <Link href="menu">Menú</Link>
    </View>
  );
};

export default Home;
