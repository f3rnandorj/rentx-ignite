import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  useEffect(() => {
    async function show() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setTimeout(() => setIsAppReady(true), 500);
      }
    }

    show();
  }, []);

  useEffect(() => {
    async function hide() {
      if (isAppReady) {
        await SplashScreen.hideAsync();
      }
    }

    hide();
  }, [isAppReady]);

  if (!fontsLoaded || !isAppReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
