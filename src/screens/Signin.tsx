import { Controller, useForm } from 'react-hook-form'
import { useNavigation } from "@react-navigation/native"
import { Center, Heading, Image, Text, VStack, ScrollView, useToast, ToastTitle, Toast } from '@gluestack-ui/themed'

import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

import Logo from '@assets/logo.svg'
import backgroundImg from '@assets/background.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useAuth } from '@hooks/useAuth'
import { AppError } from '@utils/AppError'
import { useState } from 'react'


type FormData = {
  email: string;
  password: string;
}

export function SignIn() {
const [isLoading, setIsLoading] = useState(false);

  const { singIn } = useAuth();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const toast = useToast();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()

  function handNewAccount() {
    navigation.navigate("signUp");
  }

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await singIn(email, password);

    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possivel entrar. tente novamente mais tarde';

      toast.show({
        placement: 'top',
        render: () => (
          <Toast backgroundColor='$red500' action="error" variant="outline">
            <ToastTitle color="$white">{title}</ToastTitle>
          </Toast>
        ),
      });
      setIsLoading(false);
    }

  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
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

          <Center>
            <Heading color="$gray100" fontSize="$xl" mb={6} fontFamily="$heading">
              Acesse a conta
            </Heading>

            <Controller
              control={control}
              name="email"
              rules={{ required: 'Informe o e-mail' }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: 'Informe a senha' }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button
             title="Acessar" 
             onPress={handleSubmit(handleSignIn)} 
             isLoading={isLoading} />

          </Center>

          <Center mt={24}>
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem aceso?
            </Text>

            <Button
              title="Criar Conta"
              variant="outline"
              onPress={handNewAccount} />
          </Center>

        </VStack>
      </VStack>
    </ScrollView>
  )
}