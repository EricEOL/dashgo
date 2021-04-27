import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Eric Lopes</Text>
            <Text 
                color="gray.300"
                fontSize="small"
            >lopes.eric051@gmail.com</Text>
        </Box>

        <Avatar size="md" name="Eric Lopes" src="https://github.com/EricEOL.png"/>
    </Flex>
    )
}