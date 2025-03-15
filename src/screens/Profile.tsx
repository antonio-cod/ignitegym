import { ScreenHeader } from "@components/ScreenHeader"
import { VStack, Text } from "@gluestack-ui/themed"

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
    </VStack>
  )
}