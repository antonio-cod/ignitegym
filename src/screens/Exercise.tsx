import { ScrollView, TouchableOpacity } from "react-native"

import { Box, HStack, Heading, Icon, Image, Toast, useToast } from "@gluestack-ui/themed"
import { VStack, Text } from "@gluestack-ui/themed"
import { useNavigation, useRoute } from "@react-navigation/native"

import { ArrowLeft } from "lucide-react-native"

import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepetitionSvg from "@assets/repetitions.svg"

import { AppNavigatorRoutesProps } from "@routes/app.routes"
import { Button } from "@components/Button"
import { AppError } from "@utils/AppError"
import { ToastTitle } from "@gluestack-ui/themed"
import { api } from "@services/api"
import { useEffect, useState } from "react"
import { ExerciseDTO } from "@dtos/ExerciseDTO"

type RouteParamsProps = {
  exerciseId: string;
}

export function Exercise() {
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const toast = useToast();
  const route = useRoute();

  const { exerciseId } = route.params as RouteParamsProps;
  
  function handleGoBack(){
    navigation.goBack();
  }

  async function fetchExerciseDetails(){
    try {
      const response = await api.get(`/exercises/${exerciseId}`);
      setExercise(response.data);

    } catch (error) {
          const isAppError = error instanceof AppError;
          const title = isAppError ? error.message : 'Não foi possivel carregar exercicios.';

          toast.show({
            placement: 'top',
            render: () => (
              <Toast backgroundColor='$red500' action="error" variant="outline">
                <ToastTitle color="$white">{title}</ToastTitle>
              </Toast>
            ),
          });
        }
  }

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);

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
          {exercise.name}
        </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="$gray200" ml="$1" textTransform="capitalize">
             {exercise.group}
            </Text>
          </HStack>
      </HStack>
    </VStack>

    <ScrollView 
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{ paddingBottom: 32 }}
    >
      <VStack p="$8">
        <Box rounded="lg" mb={3} overflow="hidden">
        <Image
          source={{ uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}` }}
          alt="Imagem manhando costas"
          resizeMode="cover"
          rounded="$lg"
          w="$full"
          h="$80"
          />
        </Box>

        <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
          <HStack alignItems="center" justifyContent="space-around" mb="$6" mt="$5">
            <HStack>
              <SeriesSvg  />
              <Text color="$gray200" ml="$2">{exercise.series}</Text>
            </HStack>

            <HStack>
              <RepetitionSvg />
              <Text color="$gray200" ml="$2">{exercise.repetitions} repetições</Text>
            </HStack>
          </HStack>

        <Button title="Marcar como realizado" />
        </Box>
      </VStack>
    </ScrollView>
    </VStack>
  )
}