import { View, Text } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const agregarMedico = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Agregar un médico</Text>
    </View>
  );
};

export default agregarMedico;