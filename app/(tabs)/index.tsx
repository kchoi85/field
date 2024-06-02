import { Image, StyleSheet, Platform, Pressable, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { useState } from 'react';
import ExampleModal from '@/components/ExampleModal';

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/beeny-header.jpg')}
          style={styles.beenyLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!!!!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 0: File Structure</ThemedText>
        <ThemedText>
          Edit{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
          to see changes. Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step X: Routing</ThemedText>
        <ThemedText>
          <Link href={{ pathname: '/user/[id]', params: { id: 123 } }}>
            Click here to route with param 123 to (user/[id].tsx)
          </Link>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step Y: Modal</ThemedText>
        <ThemedText>
          <ExampleModal
            modalVisible={isModalVisible}
            setModalVisible={setIsModalVisible}
          />
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  beenyLogo: {
    height: 250,
    width: 420,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
