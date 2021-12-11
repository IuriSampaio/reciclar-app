import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface AuthParamList extends AuthStackParamList {}
  }
}


// AUTH STACK

export type AuthParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
};

export type AuthStackParamList = {
  AuthRoutes: NavigatorScreenParams<AuthParamList>;
};

export type AuthScreensProps<Screen extends keyof AuthParamList> = CompositeScreenProps<
  NativeStackScreenProps<AuthParamList, Screen>,
  NativeStackScreenProps<AuthStackParamList>
>;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps< AuthStackParamList, Screen >;


// ROOT STACK

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AuthRoutes: NavigatorScreenParams<AuthParamList>;
  NotFound: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps< RootStackParamList, Screen >;