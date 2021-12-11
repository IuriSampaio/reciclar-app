import React, {createContext, useState, useEffect, useContext, ProviderProps, ReactChildren} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../services/api';

interface LoginUser {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: LoginUser | any;
  login: Function;
  logout: Function;
};


const AuthContext = createContext<AuthContextData>( {} as AuthContextData );

export const AuthProvider : React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    async function loadStorageData(){
      
      const storagedUser = await AsyncStorage.getItem('@AMAuth:user');
      const storagedToken = await AsyncStorage.getItem('@AMAuth:token');
      
      if (storagedUser && storagedToken) {
        
        api.defaults.headers.options = {
          'Authorization':`Bearer ${storagedToken}`
        };
        
        setUser(JSON.parse(storagedUser));
      
      }

    }

    loadStorageData();
  }, []);

  async function login(user: LoginUser) {

    try{

    
    const res = await api.post('/user/auth',{
      email: user.email,
      password: user.password
    });
    
    if (res.status != 200) return false;

    const response = res.data;

    setUser(response); 

    api.defaults.headers.options = {
          'Authorization':`Bearer ${response.token}`
    };
    
    await AsyncStorage.setItem('@AMAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@AMAuth:token', response.token);
    }catch (error){
      return false;
    }
    return true;
  }

  async function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
      console.log(user)
    });
  };

  const methods = {
    login, logout
  };

  return (
    <AuthContext.Provider value={
      {
        signed: !!user,
        user,
        ...methods
      }
    }>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(){
  const context = useContext(AuthContext);
  
  return context;
};
