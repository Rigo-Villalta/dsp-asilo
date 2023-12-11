import { View, Text } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const Menu = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aquí el menú, {user?.emailAddresses[0].emailAddress} 🎉</Text>
      <Link href="/listaMedicos">Lista de médicos</Link>
      <Link href="/listaCitas">Lista de citas</Link>
      <Link href="/listaPacientes">Lista de pacientes</Link>
    </View>
  );
};

export default Menu;

