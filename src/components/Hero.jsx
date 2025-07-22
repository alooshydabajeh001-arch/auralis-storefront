import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box textAlign="center" p={10} bg="gray.50">
      <Heading>Auralis Storefront</Heading>
      <Text fontSize="lg" mt={4}>
        Your one-stop shop for premium tech & lifestyle gear.
      </Text>
      <Stack direction="row" spacing={4} justify="center" mt={6}>
        <Button colorScheme="teal">Shop Now</Button>
        <Button variant="outline" colorScheme="teal">Learn More</Button>
      </Stack>
    </Box>
  );
};

export default Hero;

