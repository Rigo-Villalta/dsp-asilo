import { View, Text } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { useLocalSearchParams, useGlobalSearchParams } from 'expo-router';

const detalleDePaciente = () => {
  const { user } = useUser();
  const params = useLocalSearchParams()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalle de la paciente: {params.id} </Text>
    </View>
  );
};

export default detalleDePaciente ;