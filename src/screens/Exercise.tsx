import { Image, TouchableOpacity } from "react-native"

import { HStack, Heading, Icon } from "@gluestack-ui/themed"
import { VStack, Text } from "@gluestack-ui/themed"
import { useNavigation } from "@react-navigation/native"

import { ArrowLeft } from "lucide-react-native"

import BodySvg from "@assets/body.svg"

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

      <HStack
        justifyContent="space-between"
        alignItems="center"
        mt="$4"
        mb="$8"
      >
        <Heading
          color="$gray100"
          fontFamily="$heading"
          fontSize="$lg"
          flexShrink={1}
        >
          Puxada Frontal
        </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="$gray200" ml="$1" textTransform="capitalize">
              Costas
            </Text>
          </HStack>
      </HStack>
    </VStack>

      <VStack p="$8">
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxCzSNXUQ7RNqnhkvLQ0cXlhwUCG93EDusV3XRIbAdMPZS1GwXRd1ndWNVkLXOuFUQIw&usqp=CAU",
          }}
          alt="Imagem manhando costas"
          mb="$3"
          resizeMode="cover"
          rounded="#lg"
          w="$full"
          h="$80"
        />
      </VStack>
    </VStack>
  )
}