import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button, Box, Heading, Text } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
// ...
<ProductList />
// CodeRabbit: Please check this component for best practices in:
// - Chakra UI usage
// - Reusability
// - Accessibility for screen readers
// - Performance optimizations

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Box textAlign="center" p={10}>
        <Heading mb={4}>Welcome to Auralis Storefront 🌟</Heading>
        <Text fontSize="lg" mb={4}>
          Your one-stop shop for tech, skincare, and sports gear!
        </Text>
        <ProductCard
          title="Wireless Earbuds"
          image="https://via.placeholder.com/150"
          price="49.99"
        />
        <Button colorScheme="teal" onClick={() => setCount(count + 1)} mt={6}>
          Clicked {count} times
        </Button>
      </Box>
    </>
  );
}

export default App;



