import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { api } from '../services/api';
import {useAuth} from '../contexts/AuthProvider'
import { AuthParamList, AuthScreensProps  } from '../../types';

const LoginScreen = ({ navigation }: AuthScreensProps<'Login'>) => {

  const [user, setUser] = React.useState({
    email:'',
    password:'',
  });

  const handlePassword = (e:any) => {
    setUser({
      ...user ,
      password: e
    });
  };

  const handlerEmail = (e:any) => {
    setUser({
      ...user ,
      email: e
    });
  };

  const { login } = useAuth();

  const handleLogin = async () => {
    const userExist = login(user);

    if (!userExist){
      console.log('User not found')
      setUser({email: '', password: ''});
      Alert.alert('Login failed','Por favor valide se os dados estavam corretos.')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text_title}> Entrar </Text>

      <TextInput style={styles.button}
        placeholder="email" 
        autoCorrect={false}
        keyboardType="email-address" 
        value={user.email} 
        onChangeText={handlerEmail} 
      />

      <TextInput style={styles.button}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={handlePassword}
        value={user.password}
      />

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.text_title}>Logar</Text>
      </TouchableOpacity>

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
    color: 'white'
  },
  text_description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default LoginScreen;