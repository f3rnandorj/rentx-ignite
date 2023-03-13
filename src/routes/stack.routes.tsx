import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

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
      <Screen name="SchedulingComplete" component={SchedulingComplete}></Screen>
    </Navigator>
  );
}
