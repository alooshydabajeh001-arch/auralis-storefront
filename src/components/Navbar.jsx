import { Box, Flex, Heading } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg="teal.500" color="white" p={4}>
      <Flex justify="center">
        <Heading size="md">Auralis</Heading>
      </Flex>
    </Box>
  );
}

export default Navbar;


