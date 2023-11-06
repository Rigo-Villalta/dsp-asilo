import { View, Text } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const citasNueva = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Crear una nueva cita</Text>
      <Link href="/citas/lista">Listas</Link>
    </View>
  );
};

export default citasNueva;