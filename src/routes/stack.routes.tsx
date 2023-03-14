import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { Confirmation } from "../screens/Confirmation";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";
import { CarDTO } from "../dtos/CarDTO";
import { ParamListBase } from "@react-navigation/native";

export interface AppStackParamList extends ParamListBase {
  Home: undefined;
  MyCars: undefined;
  Scheduling: { car: CarDTO };
  Confirmation: {
    title: string;
    message: string;
    nextScreenRoute: string;
  };
  SchedulingDetails: {
    car: CarDTO;
    dates: {};
  };
  CarDetails: { car: CarDTO };
  SignUpFirstStep: undefined;
  SignUpSecondStep: {
    user: {
      name: string;
      email: string;
      driverLicense: string;
    };
  };
}

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Screen name="Splash" component={Splash}></Screen>
      <Screen name="SignIn" component={SignIn}></Screen>
      <Screen name="SignUpFirstStep" component={SignUpFirstStep}></Screen>
      <Screen name="SignUpSecondStep" component={SignUpSecondStep}></Screen>
      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      ></Screen>
      <Screen name="MyCars" component={MyCars}></Screen>
      <Screen name="CarDetails" component={CarDetails}></Screen>
      <Screen name="Scheduling" component={Scheduling}></Screen>
      <Screen name="SchedulingDetails" component={SchedulingDetails}></Screen>
      <Screen name="Confirmation" component={Confirmation}></Screen>
    </Navigator>
  );
}
