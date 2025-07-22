import { useState } from 'react';
import './App.css';
import { Box, Heading, Text } from '@chakra-ui/react';
import ProductCard from './components/ProductCard';

const products = [
  {
    id: 1,
    title: 'Wireless Earbuds',
    image: 'https://via.placeholder.com/150',
    price: 49.99,
  },
  {
    id: 2,
    title: 'Smart Watch',
    image: 'https://via.placeholder.com/150',
    price: 89.99,
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    image: 'https://via.placeholder.com/150',
    price: 39.99,
  }
];

function App() {
  return (
    <Box p={10}>
      <Heading mb={4}>Auralis Storefront 🌟</Heading>
      <Text fontSize="lg" mb={6}>Your one-stop shop for tech, skincare, and sports gear!</Text>
      <Box display="flex" flexWrap="wrap" gap={4}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;





