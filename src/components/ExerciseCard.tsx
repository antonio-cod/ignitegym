import { Image } from "@gluestack-ui/themed"
import { Heading } from "@gluestack-ui/themed"
import { Text } from "@gluestack-ui/themed"
import { Icon } from "@gluestack-ui/themed"
import { VStack } from "@gluestack-ui/themed"
import { HStack } from "@gluestack-ui/themed"
import { ChevronRight } from "lucide-react-native"
import { TouchableOpacity, TouchableOpacityProps} from "react-native"


type Props = TouchableOpacityProps & {}

export function ExerciseCard({ ...rest }: Props) {
  return <TouchableOpacity {...rest}>
    <HStack 
      bg="$gray500"
      alignItems="center"
      p="$2"
      rounded="$md"
      mb="$3"
    >
      <Image source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMVV_bsEttU6V4-3o9T5j5d7AZtJdxM6N1Q&s"
      }}
        alt="Imagem do exercício"
        w="$16"
        h="$16"
        rounded="$md"
        mr="$4"
        resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            Puxada frontal
          </Heading>

          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}> 
            3 séries x 12 repetições
          </Text>
        </VStack>

      <Icon as={ChevronRight} color="$gray300" />
    </HStack>
  </TouchableOpacity>

}