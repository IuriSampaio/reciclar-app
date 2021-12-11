import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { AuthScreensProps } from '../../types'
import { useAuth } from '../contexts/AuthProvider';
import { api } from '../services/api';

export default function RegisterScreen({ navigation }: AuthScreensProps<'Register'>) {
  
  const [user, setUser] = React.useState({
    name: '',
    email:'',
    password:'',
    is_recicler:true,
    is_point_of_collect:false
  });

  const handlerUser = (e:any) => {
    setUser({
      ...user ,
      [e.target.placeholder]: e.target.value
    });
  };

  const {login} = useAuth();

  const handleLogon = async () => {
    const newUser = await api.post('/user',user);
    newUser.status == 201 ? login({
      email:user.email,
      password:user.password
    }) : Alert.alert('Erro!','Erro ao criar seu usuario, tente novamente mais tarde');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_title}> Register </Text>

      <TextInput style={styles.button}
        placeholder="name" 
        autoCorrect={false}
        keyboardType="default" 
        value={user.name} 
        onChange={handlerUser} 
      />

      <TextInput style={styles.button}
        placeholder="email" 
        autoCorrect={false}
        keyboardType="email-address" 
        value={user.email} 
        onChange={handlerUser} 
      />

      <TextInput style={styles.button}
        placeholder="password"
        secureTextEntry={true}
        onChange={handlerUser}
        value={user.password}
      />

      <TouchableOpacity onPress={handleLogon}>
        <Text style={styles.text_title}>Criar Conta</Text>
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
    fontWeight: 'bold',
    color: 'white'
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
    fontFamily: 'Helvetica',
    color: 'white'
  },
  text_description: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: 'white'
  }
})
