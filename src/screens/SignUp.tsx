import { Center, Heading, Image, Text, VStack, ScrollView } from '@gluestack-ui/themed'

import { useNavigation } from '@react-navigation/native'

import backgroundImg from '@assets/background.png'
import Logo from '@assets/logo.svg'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useState } from 'react'

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfir, setPasswordConfir] = useState('');

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp() {
    
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

          <Input placeholder="Nome"
            onChangeText={setName}
          />

          <Input 
           placeholder="E-mail"
           keyboardType="email-address"
           autoCapitalize="none"
           onChangeText={setEmail}
           />

          <Input 
           placeholder="Senha"
           secureTextEntry
           onChangeText={setPassword}
           />

          <Input 
           placeholder="Confirme a Senha"
           secureTextEntry
           onChangeText={setPasswordConfir}
           />
          
          <Button title="Criar e acessar"
            onPress={handleSignUp}
          />
        </Center>
    
        <Button 
        title="Voltar para o login" 
        variant="outline" 
        mt="$12"
        onPress={handleGoBack} />
      </VStack>
    </VStack>
    </ScrollView>
  )
}