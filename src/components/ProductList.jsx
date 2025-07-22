// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';
import { SimpleGrid } from '@chakra-ui/react';

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
    price: 79.99,
  },
  {
    id: 3,
    title: 'Vitamin C Serum',
    image: 'https://via.placeholder.com/150',
    price: 25.00,
  },
];

function ProductList() {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={8} mt={8}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </SimpleGrid>
  );
}

export default ProductList;


