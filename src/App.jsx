// src/App.jsx
import React, { useState } from 'react';
import { Button, Box, Heading, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Box textAlign="center" p={10}>
        <Heading mb={4}>Welcome to Auralis Storefront ✨</Heading>
        <Text fontSize="lg" mb={4}>
          Your one-stop shop for tech, skincare, and sports gear!
        </Text>
        <Button colorScheme="teal" onClick={() => setCount(count + 1)} mt={6}>
          Clicked {count} times
        </Button>
      </Box>
      <ProductList />
    </>
  );
}

export default App;




