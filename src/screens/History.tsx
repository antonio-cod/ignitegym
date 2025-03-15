import { HistoryCard } from "@components/Historycard"
import { ScreenHeader } from "@components/ScreenHeader"
import { Center, Text, VStack } from "@gluestack-ui/themed"

export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />
      <HistoryCard />
    </VStack>
  )
}