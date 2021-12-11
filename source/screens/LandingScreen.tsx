import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AuthScreensProps  } from '../../types';

const LandingScreen = ({ navigation }: AuthScreensProps<'Landing'>) => {

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text_title}> Bem Vindo ao Reciclar </Text>
        <Text style={styles.text_description}> Vamos mudar o mundo ? </Text>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Login') }>
          <Text style={styles.text_button} >Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Register')}>
          <Text style={styles.text_button} >Se cadastrar na mudança</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '60%',
    height: 40,
    backgroundColor: '#f00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10
  },
  text_button:{
    fontFamily:'space-mono',
    fontSize: 13,
    fontWeight: 'bold'
  },
  container:{
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text_title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:'space-mono',
    color: 'white'
  },
  text_description: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'space-mono',
    marginBottom:30,
    color: 'white'
  }
});

export default LandingScreen;