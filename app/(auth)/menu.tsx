import { View, Text } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const Menu = () => {
  const { user } = useUser();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Aquí el menú, {user?.emailAddresses[0].emailAddress} 🎉</Text>
      <Link href="/citas/lista">Citas</Link>
      <Link href="/medicos/lista">Médicos</Link>
    </View>
  );
};

export default Menu;

