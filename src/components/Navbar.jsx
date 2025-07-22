import { Box, Flex, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="teal.500" px={4} py={3} color="white">
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">Auralis Storefront</Text>
        <Text>🛒 Cart</Text>
      </Flex>
    </Box>
  );
}

export default Navbar;

