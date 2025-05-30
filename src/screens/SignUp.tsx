import { Center, Heading, Image, ScrollView, Text, Toast, ToastTitle, useToast, VStack } from '@gluestack-ui/themed';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';

import { api } from '@services/api';

import backgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg';

import { AppError } from '@utils/AppError';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useAuth } from '@hooks/useAuth';
import { useState } from 'react';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup
  .string()
  .required('Informe a senha')
  .min(6, 'A senha deve conter minimo 6 digitos!'),
  password_confirm: yup
  .string()
  .required('Confirme a senha.')
  .oneOf([yup.ref("password"), ""], "A confirmação da senha não confere."),
});

export function SignUp() {
const [isLoading, setIsLoading] = useState(false);

 const toast = useToast();
 const { signIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    try {
      setIsLoading(true);

      await api.post('/users', {name, email, password});
      await signIn(email, password);

    } catch (error){
      setIsLoading(false);
      
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possivel criar a conta. tente mais tarde.';

      toast.show({
        placement: 'top',
        render: () => (
          <Toast backgroundColor='$red500' action="error" variant="outline">
            <ToastTitle  color="$white">{title}</ToastTitle>
          </Toast>
        ),
      });
   }
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
            render={({ field: { onChange, value }}) => (
              <Input
                placeholder="Confirme a Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
                />
            )}
          />

          <Button 
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
            isLoading={isLoading}
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
  );
}