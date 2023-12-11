import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={'#fff'} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6c47ff',
        },
        headerTintColor: '#fff',
      }}>
      <Tabs.Screen
        name="listaMedicos"
        options={{
          headerTitle: 'Lista de médicos',
          tabBarIcon: ({ color, size }) => <Ionicons name="people-circle-outline" size={size} color={color} />,
          tabBarLabel: 'Lista de médicos',
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="crear_medico"
        options={{
          headerTitle: 'Agregar un médico',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-add-outline" size={size} color={color} />,
          tabBarLabel: 'Agregar médico',
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="ver_medico/[id]"
        options={{
          headerTitle: 'Ver médico',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Inicio',
          href: null
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
