import { useState } from "react"
import { ScrollView, TouchableOpacity } from "react-native"
import { VStack, Text, Center, Heading, useToast, Toast, onChange } from "@gluestack-ui/themed"

import * as ImagePicker from "expo-image-picker"
import * as FileSystem from "expo-file-system"

import { ScreenHeader } from "@components/ScreenHeader"
import { UserPhoto } from "@components/UserPhoto"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { ToastMessage } from "@components/ToastMessage"
import { useForm, Controller } from "react-hook-form"
import { useAuth } from "@hooks/useAuth"

const PHOTO_SIZE = 33;

type FormDataProps = {
  email: string;
  name: string;
  password: string;
  old_password: string;
  confirm_password: string;
}

export function Profile() {
  const [userPhoto, setUserPhoto] = useState("https://avatars.githubusercontent.com/u/67842667?v=4")

  const toast = useToast();
  const { user } = useAuth();
  const {control} = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email
    }
  });

  async function handleUserPhotoSelect(){
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (photoSelected.canceled) {
        return
      }

      const photoURI = photoSelected.assets[0].uri

      if (photoURI){
        const photoInfo = (await FileSystem.getInfoAsync(photoURI)) as {
          size: number
        }

        if ( photoInfo.size && (photoInfo.size / 1024 /1024) > 5) {
          return toast.show({
            placement: "top",
            render: ({ id }) => (
              <ToastMessage 
              id={id}
              action="error"
              title="Essa imagem é muito grande. Escolha uma de até 5MB."
              onClose={() => toast.close(id)}
              />
            ),
          })
        }

        setUserPhoto(photoURI)
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto 
            source={{ uri: userPhoto }}
            alt="Foto do usuário"
            size="xl"
          />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text 
            color="$green500"
            fontFamily="$heading"
            fontSize="$md"
            mt="$2"
            mb="$8"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange }}) => (
           <Input
              bg="$gray600"
              placeholder="Nome"
              onChangeText={onChange}
              value={value}
            />
          )}  
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange }}) => (
           <Input
              bg="$gray600"
              placeholder="E-mail"
              isReadOnly
              onChangeText={onChange}
              value={value}
            />
          )}  
        />

        

        <Center w="$full" gap="$4">
          <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
          <Input placeholder="Nova senha" bg="$gray600" secureTextEntry />
          <Input
           placeholder="Confirme a nova senha"
           bg="$gray600"
           secureTextEntry 
           />
          
          <Button title="Atualizar" />
        </Center>
        </Center>
      </ScrollView>
    </VStack>
  )
}