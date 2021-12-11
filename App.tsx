import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './source/hooks/useCachedResources';
import useColorScheme from './source/hooks/useColorScheme';
import {AuthProvider} from './source/contexts/AuthProvider'
import Navigation from './source/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </AuthProvider>
      </SafeAreaProvider>
    );
  }
}
