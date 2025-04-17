import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { GluestackUIProvider} from "@gluestack-ui/themed";

import { config } from "./config/gluestack-ui.config";

import { Routes } from "./src/routes";

import { AuthContext, AuthContextProvider } from "@contexts/AuthContext";
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <GluestackUIProvider config={config}>
        <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
        <AuthContextProvider>
          {fontsLoaded ? <Routes /> : <Loading />}

        </AuthContextProvider>
      </GluestackUIProvider>
  )
}


