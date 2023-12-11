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
        name="listaCitas"
        options={{
          headerTitle: 'Lista de citas',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar-outline" size={size} color={color} />,
          tabBarLabel: 'Citas',
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="ver_cita/[id]"
        options={{
          headerTitle: 'Ver cita',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Detalle de cita',
          href: null
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="editar_cita/[id]"
        options={{
          headerTitle: 'Editar cita',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Editar cita',
          href: null
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="crear_cita"
        options={{
          headerTitle: 'Crear una cita',
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" size={size} color={color} />,
          tabBarLabel: 'Crear cita',
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
