import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthParamList } from "../../types";
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from '../screens/LandingScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthStack = createNativeStackNavigator<AuthParamList>();

export default function AuthNavigator(){
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
}
