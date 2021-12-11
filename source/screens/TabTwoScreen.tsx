import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { useAuth } from '../contexts/AuthProvider';

export default function TabTwoScreen() {
  
  const {logout} = useAuth();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <TouchableOpacity onPress={()=>logout()}>
        <Text>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
