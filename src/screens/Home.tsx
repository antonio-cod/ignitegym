import { useState } from "react"
import { FlatList } from "react-native"
import { Group } from "@components/Group"

import { HomeHeader } from "@components/HomeHeader"
import { Center, Text, VStack } from "@gluestack-ui/themed"

export function Home() {
  const [groups, setGroups] = useState(["Costas", "Bíceps", "Tríceps", "Ombro"])
  const [groupSelected, setGroupSelected] = useState("costa")

  return (
    <VStack flex={1}>
       <HomeHeader />
       <FlatList 
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group 
              name={item}
              isActive={ groupSelected === item}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 32 }}
          style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
        />
    </VStack>
  )
}