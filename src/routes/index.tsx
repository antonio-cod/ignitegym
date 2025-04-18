import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { useContext } from "react"



 import { AuthRoutes } from "./auth.routes"

import { Box } from "@gluestack-ui/themed"

import { gluestackUIConfig } from "../../config/gluestack-ui.config"
import { useAuth } from "@hooks/useAuth"

export function Routes() {
  const theme = DefaultTheme
  const { user } = useAuth();
  console.log("USUÁRIO LOGADO =>", user);
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

 
  
  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}