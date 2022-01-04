import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile(){
  return(

    <Flex align="center"> 
      <Box>
        <Text>Felipe</Text>
        <Text color="gray.300" fontSize="small">
          felipefernandes@gmail.xom
        </Text>
      </Box>

      <Avatar size="md" name="Felipe"/>
    </Flex>
  )
}