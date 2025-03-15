import { TouchableOpacity } from "react-native"

import { Icon } from "@gluestack-ui/themed"
import { VStack, Text } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"

import { ArrowLeft } from "lucide-react-native"

import { AppNavigatorRoutesProps } from "@routes/app.routes"

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleGoBack(){
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
    <VStack px="$8" bg="$gray600" pt="$12">
      <TouchableOpacity onPress={handleGoBack}>
        <Icon as={ArrowLeft} color="$green500" size="xl" />
      </TouchableOpacity>
    </VStack>

    </VStack>
  )
}