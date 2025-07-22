import { Box, Heading, Text } from '@chakra-ui/react';

function Hero() {
  return (
    <Box bg="gray.100" p={10} textAlign="center">
      <Heading as="h1" size="xl" mb={4}>
        Discover New Products
      </Heading>
      <Text fontSize="lg">Browse trending gadgets, beauty picks, and more.</Text>
    </Box>
  );
}

export default Hero;


