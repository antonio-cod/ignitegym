import { Center, Heading, Image, Text, VStack, ScrollView } from '@gluestack-ui/themed'

import { useNavigation } from '@react-navigation/native'

import backgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useState } from 'react'
import { useForm, Controller } from "react-hook-form";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

export function SignUp() {
 
  const { control, handleSubmit, formState: {errors}, } = useForm<FormDataProps>();

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp({ name, email, password, password_confirm }: FormDataProps) {
    console.log({name, email, password, password_confirm});
    
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
            rules={{
              required: "Informe o nome.",
            }}
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="name"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
                />
            )}
          />

          <Controller
            control={control}
            name="email"
            rules={{
              required: "Informe o e-mail.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido'
              }
            }}
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
                />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: "Informe a senha.",
            }}
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            rules={{
              required: "Confirme a senha.",
            }}
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="Confirme a Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
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