import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { Box } from "@gluestack-ui/themed"
import { gluestackUIConfig } from "../../config/gluestack-ui.config"

import { AuthRoutes } from "./auth.routes"
import { useAuth } from "@hooks/useAuth"
import { AppRoutes } from "./app.routes"
import { useState } from "react"
import { Loading } from "@components/Loading"

export function Routes() {
  const theme = DefaultTheme
  const { user, isLoadingUserStorageData } = useAuth();
  
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700

 if(isLoadingUserStorageData){
  return <Loading />
 }
  
  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
       {user.id ? <AppRoutes /> : <AuthRoutes /> } 
      </NavigationContainer>
    </Box>
  );
}