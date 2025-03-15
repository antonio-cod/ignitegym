import { ScrollView } from "react-native"
import { ScreenHeader } from "@components/ScreenHeader"

import { VStack, Text, Center } from "@gluestack-ui/themed"
import { UserPhoto } from "@components/UserPhoto"

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto 
            source={{ uri: "https://avatars.githubusercontent.com/u/67842667?v=4 "}}
            alt="Foto do usuário"
            size="xl"
          />
        </Center>
      </ScrollView>
    </VStack>
  )
}