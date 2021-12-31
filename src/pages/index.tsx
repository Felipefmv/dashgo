import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/input'

export default function SignIn() {
  return (
    <Flex
        width="100vw"
        height="100vh"
        align="center"
        justify="center"
    >      
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="Email"/>
          <Input type="password" name="password" label="Senha"/>
        </Stack>  
        <Button
          name=""
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          >Entrar</Button>
      </Flex>
    </Flex>
  )
}