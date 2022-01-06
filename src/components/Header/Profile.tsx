import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?:boolean,

}

export default function Profile({showProfileData=true}:ProfileProps){
  return(

    <Flex align="center"> 
      {showProfileData && (<Box>
        <Text>Felipe</Text>
        <Text color="gray.300" fontSize="small">
          felipefernandes@gmail.xom
        </Text>
      </Box>)}

      <Avatar size="md" name="Felipe"/>
    </Flex>
  )
}