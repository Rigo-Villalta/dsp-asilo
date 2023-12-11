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
        name="listaPacientes"
        options={{
          headerTitle: 'Lista de pacientes',
          tabBarIcon: ({ color, size }) => <Ionicons name="people-circle-outline" size={size} color={color} />,
          tabBarLabel: 'Lista de pacientes',
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="crear_paciente"
        options={{
          headerTitle: 'Agregar un paciente',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-add-outline" size={size} color={color} />,
          tabBarLabel: 'Agregar paciente',
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="ver_paciente/[id]"
        options={{
          headerTitle: 'Ver paciente',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Detalle de paciente',
          href: null
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="editar_paciente/[id]"
        options={{
          headerTitle: 'Editar paciente',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Editar paciente',
          href: null
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
