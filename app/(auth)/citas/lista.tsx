import { View, Text } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const citasLista = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de citas</Text>
      <Link href="/citas/citas_nueva">Crear una nueva cita</Link>
      <Link href={{
        pathname: "/citas/[id]",
        params: { id: "1"},
      }}>Detalle de cita 1</Link>
    </View>
  );
};

export default citasLista;