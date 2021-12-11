import * as React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";


const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  let colorScheme = useColorScheme();

  colorScheme = colorScheme ? colorScheme : 'dark';

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>

      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={
          ({ navigation }: RootTabScreenProps<'TabOne'>) => ({
            title: 'Mapa',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          })
        }
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Items premiados',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}