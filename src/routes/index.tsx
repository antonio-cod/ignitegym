import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { useContext } from "react"

import { AuthContext } from "@contexts/AuthContext"

 import { AuthRoutes } from "./auth.routes"

import { Box } from "@gluestack-ui/themed"

import { gluestackUIConfig } from "../../config/gluestack-ui.config"

export function Routes() {
  const theme = DefaultTheme
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

  const contextData = useContext(AuthContext);
  console.log("Usuario logado", contextData);
  
  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}