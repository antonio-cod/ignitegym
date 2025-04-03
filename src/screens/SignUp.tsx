import { Center, Heading, Image, Text, VStack, ScrollView } from '@gluestack-ui/themed'

import { useNavigation } from '@react-navigation/native'

import backgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useState } from 'react'
import { useForm, Controller } from "react-hook-form";


export function SignUp() {
 
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp(data: any) {
    
  }

  return (
    <ScrollView 
    contentContainerStyle={{ flexGrow: 1 }}
    showsVerticalScrollIndicator={false}
    >
    <VStack flex={1}>
      <Image
        w="$full"
        h={624}
        source={backgroundImg}
        defaultSource={backgroundImg}
        alt="Pessoas treinando"
        position="absolute"
      />
      <VStack flex={1} px="$10" pb="$16">
        <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
            Treine sua mente e seu corpo
            </Text>  
        </Center>

        <Center gap="$2">
          <Heading color="$gray100">Crie sua conta</Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="name"
                onChangeText={onChange}
                value={value}
                />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="Confirme a Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                />
            )}
          />

          <Button 
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
          />

        </Center>
    
        <Button 
          title="Voltar para o login" 
          variant="outline" 
          mt={24}
          onPress={handleGoBack} 
        />

    </VStack>
    </VStack>
    </ScrollView>
  )
}