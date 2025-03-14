import { useState } from "react"
import { Group } from "@components/Group"

import { HomeHeader } from "@components/HomeHeader"
import { Center, Text, VStack } from "@gluestack-ui/themed"

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costa")

  return (
    <VStack flex={1}>
       <HomeHeader />
          <Group 
            name="Costas"
            isActive={ groupSelected === "costa"}
            onPress={() => setGroupSelected("costa")}
           />

          <Group 
            name="Ombro"
            isActive={ groupSelected === "ombro"}
            onPress={() => setGroupSelected("ombro")}
          />
    </VStack>
  )
}