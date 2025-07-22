// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { SimpleGrid } from '@chakra-ui/react';

const products = [
  {
    id: 1,
    title: 'Wireless Earbuds',
    image: 'https://via.placeholder.com/150',
    price: 49.99
  },
  {
    id: 2,
    title: 'Vegan Skincare Set',
    image: 'https://via.placeholder.com/150',
    price: 35.5
  },
  {
    id: 3,
    title: 'Smart Fitness Tracker',
    image: 'https://via.placeholder.com/150',
    price: 89.99
  }
];

function ProductList() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} p={4}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          onAddToCart={() => alert(`${product.title} added to cart!`)}
        />
      ))}
    </SimpleGrid>
  );
}

export default ProductList;

