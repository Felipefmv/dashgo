import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {RiDashboardLine} from "react-icons/ri"

export function Sidebar(){
  return(
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20"/>
              <Text fontWeight="medium" ml="4">Dashboard</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>

    </Box>
  )
}