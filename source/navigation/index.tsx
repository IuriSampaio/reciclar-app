import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import LinkingConfiguration from './LinkingConfiguration';
import { useAuth } from '../contexts/AuthProvider';
import AuthNavigator from './auth.routes';
import RootNavigator from './root.routes';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  
  const { signed } = useAuth();
  
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={theme}>
      {
        signed ? <RootNavigator /> : <AuthNavigator />
      }
    </NavigationContainer>
  );
}
