import { VStack } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { HStack, Text } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";


export function HomeHeader(){
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto source={{ uri: "https://avatars.githubusercontent.com/u/67842667?v=4"}}
        w="$16"
        h="$16"
        alt="Imagem do Usuário" />
       <VStack>
          <Text color="$gray100" fontSize="$sm">
            Olá,
         </Text>
          <Heading color="$gray100" fontSize="$md">
          Antonio Carlos
          </Heading>
    </VStack>
  </HStack>
  )
}