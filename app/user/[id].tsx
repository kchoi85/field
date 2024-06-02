import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function UserScreen() {
  const { id } = useLocalSearchParams();

  return (
    // @ts-ignore
    <View style={styles.container}>
      <Text style={styles.info}>User params id: {id}</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  info: {
    fontSize: 20,
    color: 'white',
    padding: 20,
  },
};
