import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useAuth } from '../contexts/AuthProvider';
import MapView from 'react-native-maps';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const {logout} = useAuth();
  
  return (
    <View style={styles.container}>
      <MapView
        region={{ 
          latitude: -23.5239007,
          longitude: -46.7575315,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0032
        }}
        style={styles.map}
      >
        
      </MapView>
      {/* <Text style={styles.title}>Tab One</Text>
      <TouchableOpacity onPress={() => logout()}><Text>SAIR</Text></TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  map: {
    // height: '100%',
    // width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});
