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
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="(citas)"
        options={{
          headerTitle: 'Citas',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Citas',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="(medicos)"
        options={{
          headerTitle: 'Médicos',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Médicos',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="(pacientes)"
        options={{
          headerTitle: 'Pacientes',
          tabBarIcon: ({ color, size }) => <Ionicons name="menu-outline" size={size} color={color} />,
          tabBarLabel: 'Pacientes',
          headerRight: () => <LogoutButton />,
          href: null,
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
