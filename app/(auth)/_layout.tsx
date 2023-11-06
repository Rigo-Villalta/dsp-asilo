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
        name="inicio"
        options={{
          headerTitle: 'Inicio',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Inicio',
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="menu"
        options={{
          headerTitle: 'Menú',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Menú',
          headerRight: () => <LogoutButton />,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="citas/lista"
        options={{
          headerTitle: 'Lista de citas',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Lista de citas',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="citas/agregar"
        options={{
          headerTitle: 'Nueva cita',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Nueva cita',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="citas/[id]"
        options={{
          headerTitle: 'Detalle de cita',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Detalle de cita',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="medicos/agregar"
        options={{
          headerTitle: 'Nuevo médico',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Nuevo médico',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="medicos/lista"
        options={{
          headerTitle: 'Lista de médicos',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Lista de médicos',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="medicos/[id]"
        options={{
          headerTitle: 'Detalle de médico',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Detalle de médico',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="pacientes/agregar"
        options={{
          headerTitle: 'Nuevo paciente',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Nuevo médico',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="pacientes/lista"
        options={{
          headerTitle: 'Lista de pacientes',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Lista de médicos',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="pacientes/[id]"
        options={{
          headerTitle: 'Detalle de paciente',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Detalle de paciente',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
